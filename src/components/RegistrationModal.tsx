import { zodResolver } from "@hookform/resolvers/zod";

import { Controller, useForm, SubmitHandler, Resolver } from "react-hook-form";

import { useState } from "react";
import { z } from "zod";

import { motion } from "framer-motion";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import LoadingModal from "./LoadingModal";
import ThankYouModal from "./ThankYouModal";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";

// Modal design from EventDetails.tsx
const Modal = ({
  isOpen,
  onClose,
  title,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}) => (
  <>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-lg shadow-xl w-full max-w-xl max-h-[85vh] overflow-y-auto"
        >
          <div className="bg-[#002349]/95 px-5 py-3 border-b border-gray-200">
            <h3 className="text-xl font-semibold text-[#957C3D]">{title}</h3>
          </div>
          <div className="p-5">{children}</div>
        </motion.div>
      </motion.div>
    )}
  </>
);

const registrationSchema = z
  .object({
    registrant_status: z.enum(["personal", "parents", "teacher"]),
    registrant_name: z.string().max(100, "Max 100 chars"),
    registrant_whatsapp: z.string().regex(/^\+[1-9]\d{1,14}$/, "Invalid phone"),
    registrant_email: z.string().email("Invalid email"),
    participant_name: z
      .string()
      .min(3, "Min 3 chars")
      .max(100, "Max 100 chars"),
    festival_type: z.string().refine((value) => value === "live" || value === "virtual", {
      message: "Please select festival type",
    }),
    category_name: z.string().min(1, "Select category"),
    subcategory_name: z.string().min(1, "Select division"),
    song_title: z.string().min(1, "Enter song title").max(150, "Max 150 chars"),
    song_duration: z.string().max(10, "Max 10 chars"),
    bank_name: z.string().min(1, "Enter bank name").max(100, "Max 100 chars"),
    account_holder_name: z
      .string()
      .min(1, "Enter account name")
      .max(100, "Max 100 chars"),
    payment_receipt: z
      .any()
      .refine((file) => file?.length > 0, "Upload payment receipt."),
    scores_pdf: z
      .any()
      .refine((file) => file?.length > 0, "Upload musical scores PDF.")
      .refine((file) => {
        if (!file || file.length === 0) return true; // Skip validation if no file
        const selectedFile = file[0];
        return selectedFile.type === "application/pdf";
      }, "Only PDF files are allowed.")
      .refine((file) => {
        if (!file || file.length === 0) return true; // Skip validation if no file
        const selectedFile = file[0];
        return selectedFile.size <= 10 * 1024 * 1024; // 10MB limit
      }, "File size must be less than 10MB."),
    video_url: z.string().url("Enter a valid URL").optional(),
    terms_accepted: z.literal(true, {
      errorMap: () => ({ message: "Please accept the terms and conditions." }),
    }),
  })
  .superRefine((data, ctx) => {
    if (data.festival_type === "virtual") {
      if (!data.video_url || data.video_url.trim() === "") {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["video_url"],
          message: "Video URL is required for Virtual festival",
        });
      }
    }
  });

type RegistrationForm = z.infer<typeof registrationSchema>;

interface SubCategory {
  id: number;
  name: string;
  ageRequirement: string;
  livePrice: string;
  virtualPrice: string;
}

interface Category {
  id: number;
  name: string;
  subCategories: SubCategory[];
}

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  categories: Category[];
  onOpenTerms: () => void;
}

const RegistrationModal = ({
  isOpen,
  onClose,
  categories,
  onOpenTerms,
}: RegistrationModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showLoadingModal, setShowLoadingModal] = useState(false);
  const [showThankYouModal, setShowThankYouModal] = useState(false);
  const [referenceNumber, setReferenceNumber] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<RegistrationForm>({
    resolver: zodResolver(registrationSchema) as Resolver<RegistrationForm>,
    defaultValues: {
      registrant_status: "personal",
      registrant_whatsapp: "",
      song_duration: "",
      registrant_name: "",
      festival_type: "live",
      category_name: "",
      subcategory_name: "",
    },
  });

  const registrantStatus = watch("registrant_status") as
    | "personal"
    | "parents"
    | "teacher";
  const categoryName = watch("category_name");
  const subcategoryName = watch("subcategory_name");
  const selectedCategory = categories.find((cat) => cat.name === categoryName);
  const selectedSubcategory = selectedCategory?.subCategories.find((sub) => sub.name === subcategoryName);
  const festivalType = watch("festival_type") as "live" | "virtual";

  // Get the price based on selected category, subcategory, and festival type
  const getPrice = () => {
    if (!selectedSubcategory || !festivalType) return null;
    return festivalType === "live" ? selectedSubcategory.livePrice : selectedSubcategory.virtualPrice;
  };

  const currentPrice = getPrice();

  const onSubmit: SubmitHandler<RegistrationForm> = async (data) => {
    try {
      setIsSubmitting(true);
      setShowLoadingModal(true);

      const formData = new FormData();

      // Add all form fields to FormData
      Object.entries(data).forEach(([key, value]) => {
        if (key === "payment_receipt" || key === "scores_pdf") {
          // Get the first file from FileList
          const file = (value as FileList)[0];
          if (file) {
            formData.append(key, file);
          }
        } else if (
          key === "video_url" &&
          (!value || (value as string).trim() === "")
        ) {
          // Skip empty video URL when not provided
          return;
        } else {
          formData.append(key, value as string);
        }
      });

      // Generate reference number (4 chars from UUID + last 4 of phone)
      const phone = data.registrant_whatsapp.replace(/\D/g, "");
      const uuid = uuidv4().replace(/-/g, "");
      const refNumber = `${uuid.slice(0, 4)}-${phone.slice(-4)}`;

      if (data.registrant_status === "personal") {
        formData.set("registrant_name", data.participant_name);
      }

      // Add ref_code and submitted_at
      formData.append("ref_code", refNumber);
      formData.append("submitted_at", moment().format("YYYY-MM-DD HH:mm"));

      const response = await fetch(
        "https://n8n.kangritel.com/webhook/sivpc-reg",
        {
          method: "POST",
          headers: {
            Authorization: `Basic ${btoa(
              `${import.meta.env.VITE_WEBHOOK_USERNAME}:${
                import.meta.env.VITE_WEBHOOK_PASSWORD
              }`
            )}`,
          },
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      // Fire-and-forget webhook to trigger email based on submission
      try {
        await fetch("https://n8n.kangritel.com/webhook/sivpc-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            type: data.festival_type,
            email: data.registrant_email,
          }),
        });
      } catch (emailWebhookError) {
        console.error("Email webhook error:", emailWebhookError);
      }

      setReferenceNumber(refNumber);
      setShowLoadingModal(false);
      setShowThankYouModal(true);
    } catch (error) {
      console.error("Registration error:", error);
      setShowLoadingModal(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  const submitHandler = handleSubmit(onSubmit as SubmitHandler<RegistrationForm>);

  const handleThankYouClose = () => {
    setShowThankYouModal(false);
    onClose();
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} title="Event Registration">
        <form onSubmit={submitHandler} className="space-y-6">
          {/* Festival Type Selection - Always Visible */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Choose Festival Type</h3>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Festival Type
              </label>
              <select
                {...register("festival_type")}
                className="block w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:border-marigold focus:ring focus:ring-marigold focus:ring-opacity-50 text-gray-900 text-sm"
              >
                <option value="">Select festival type</option>
                <option value="live">Live Festival</option>
                <option value="virtual">Virtual Festival</option>
              </select>
              {errors.festival_type && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.festival_type.message}
                </p>
              )}
            </div>
            {festivalType && (
              <div className="bg-blue-50 p-3 rounded-md border border-blue-200">
                <p className="text-sm text-blue-800">
                  {festivalType === "live" 
                    ? "🎹 You've selected Live Festival - Perform in person at Voice of Singapore (VOS) on December 13th, 2025" 
                    : "💻 You've selected Virtual Festival - Submit a YouTube video link of your performance"
                  }
                </p>
              </div>
            )}
          </div>

          {/* Rest of the form - Only show after festival type is selected */}
          {festivalType && (
            <>
          {/* Registrant's Data */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Registrant's Data
            </h3>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Registrant Status
              </label>
              <select
                {...register("registrant_status")}
                className="block w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:border-marigold focus:ring focus:ring-marigold focus:ring-opacity-50 text-gray-900 text-sm"
              >
                <option value="personal">Personal</option>
                <option value="parents">Parents</option>
                <option value="teacher">Teacher</option>
              </select>
            </div>
            {registrantStatus !== "personal" && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  {...register("registrant_name")}
                  className="block w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:border-marigold focus:ring focus:ring-marigold focus:ring-opacity-50 text-gray-900 text-sm"
                />
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                WhatsApp Number
              </label>
              <div className="mt-1">
                <Controller
                  name="registrant_whatsapp"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <PhoneInput
                      country="sg"
                      preferredCountries={["sg", "my", "id"]}
                      enableSearch
                      inputClass="!w-full !py-2 !text-base !rounded-md !border-gray-300 focus:!border-marigold focus:!ring focus:!ring-marigold focus:!ring-opacity-50 text-gray-900"
                      buttonClass="!border-gray-300 !rounded-l-md hover:!bg-gray-50"
                      dropdownClass="!text-gray-900"
                      containerClass="!mb-0"
                      value={value}
                      onChange={(phone: string) => {
                        onChange(`+${phone}`);
                      }}
                      placeholder="Enter WhatsApp number"
                    />
                  )}
                />
                {errors.registrant_whatsapp && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.registrant_whatsapp.message}
                  </p>
                )}
                <p className="mt-1 text-xs text-gray-500">
                  Please enter your valid WhatsApp number.
                </p>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                {...register("registrant_email")}
                className="block w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:border-marigold focus:ring focus:ring-marigold focus:ring-opacity-50 text-gray-900 text-sm"
              />
              {errors.registrant_email && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.registrant_email.message}
                </p>
              )}
              <p className="mt-1 text-xs text-gray-500">
                Please enter your valid email address.
              </p>
            </div>
          </div>

          {/* Participant's Data */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Participant's Data
            </h3>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                {...register("participant_name")}
                className="block w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:border-marigold focus:ring focus:ring-marigold focus:ring-opacity-50 text-gray-900 text-sm"
              />
              {errors.participant_name && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.participant_name.message}
                </p>
              )}
            </div>
            <div className="flex gap-4">
              <div className="w-[40%]">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <select
                  {...register("category_name")}
                  className="block w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:border-marigold focus:ring focus:ring-marigold focus:ring-opacity-50 text-gray-900 text-sm"
                >
                  <option value="">Select a category</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.name}>
                      {category.name}
                    </option>
                  ))}
                </select>
                {errors.category_name && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.category_name.message}
                  </p>
                )}
              </div>
              {selectedCategory && selectedCategory.subCategories && (
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Division
                  </label>
                  <select
                    {...register("subcategory_name")}
                    className="block w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:border-marigold focus:ring focus:ring-marigold focus:ring-opacity-50 text-gray-900 text-sm"
                  >
                    <option value="">Select a division</option>
                    {selectedCategory.subCategories.map((sub) => (
                      <option
                        key={sub.id}
                        value={sub.name}
                      >{`${sub.name} (${sub.ageRequirement})`}</option>
                    ))}
                  </select>
                  {errors.subcategory_name && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.subcategory_name.message}
                    </p>
                  )}
                </div>
              )}
            </div>
            
            {/* Price Display */}
            {currentPrice && (
              <div className="bg-gradient-to-r from-[#f7f3eb] to-[#f0e8d5] p-4 rounded-lg border border-[#d9cdb8]">
                <div className="flex items-center justify-between">
                  <span className="text-[#857665] font-medium">Registration Fee:</span>
                  <span className="text-[#002349] text-xl font-bold">{currentPrice}</span>
                </div>
                <p className="text-[#857665] text-sm mt-1">
                  {festivalType === "live" ? "Live Festival" : "Virtual Festival"}
                </p>
              </div>
            )}
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Song Title
              </label>
              <input
                type="text"
                {...register("song_title")}
                className="block w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:border-marigold focus:ring focus:ring-marigold focus:ring-opacity-50 text-gray-900 text-sm"
              />
              {errors.song_title && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.song_title.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Song Duration
              </label>
              <input
                type="text"
                {...register("song_duration")}
                placeholder="e.g. 3:30"
                className="block w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:border-marigold focus:ring focus:ring-marigold focus:ring-opacity-50 text-gray-900 text-sm"
              />
              {errors.song_duration && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.song_duration.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Scores PDF
              </label>
              <input
                type="file"
                accept=".pdf"
                {...register("scores_pdf")}
                className="block w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:border-marigold focus:ring focus:ring-marigold focus:ring-opacity-50 text-gray-900 text-sm"
              />
              {errors.scores_pdf && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.scores_pdf.message?.toString()}
                </p>
              )}
              <p className="mt-1 text-xs text-gray-500">
                Upload your musical scores (PDF only, max 10MB)
              </p>
            </div>
            {festivalType === "virtual" && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Video URL
                </label>
                <input
                  type="url"
                  placeholder="https://www.youtube.com/..."
                  {...register("video_url")}
                  className="block w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:border-marigold focus:ring focus:ring-marigold focus:ring-opacity-50 text-gray-900 text-sm"
                />
                {errors.video_url && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.video_url.message}
                  </p>
                )}
                <p className="mt-1 text-xs text-gray-500">
                  Paste an accessible YouTube link to your performance.
                </p>
              </div>
            )}
          </div>

          {/* Payment Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Payment Information
            </h3>
            <p className="text-sm text-gray-500">
              All payment will be paid in SGD (Singapore Dollar).
            </p>

            <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
              <div>
                <p className="text-lg font-semibold text-gray-900">
                  Bank Transfer
                </p>
                <p className="text-base text-gray-900">UOB</p>
                <p className="text-base text-gray-900">7673001541</p>
                <p className="text-base text-gray-900">
                  JPIANO GROUP LIMITED LIABILITY PARTNERSHIP
                </p>
              </div>
              <div className="mt-4">
                <p className="text-lg font-semibold text-gray-900">Paynow</p>
                <p className="text-base text-gray-900">UEN: T24LL0557G</p>
              </div>
              <div className="mt-4">
                <img src="/qr.jpeg" alt="Paynow QR" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Bank Name
              </label>
              <input
                type="text"
                {...register("bank_name")}
                className="block w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:border-marigold focus:ring focus:ring-marigold focus:ring-opacity-50 text-gray-900 text-sm"
              />
              {errors.bank_name && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.bank_name.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Account Holder Name
              </label>
              <input
                type="text"
                {...register("account_holder_name")}
                className="block w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:border-marigold focus:ring focus:ring-marigold focus:ring-opacity-50 text-gray-900 text-sm"
              />
              {errors.account_holder_name && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.account_holder_name.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Payment Receipt
              </label>
              <input
                type="file"
                accept="image/*,.pdf"
                {...register("payment_receipt")}
                className="block w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:border-marigold focus:ring focus:ring-marigold focus:ring-opacity-50 text-gray-900 text-sm"
              />
              {errors.payment_receipt && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.payment_receipt.message?.toString()}
                </p>
              )}
              <p className="mt-1 text-xs text-gray-500">
                Upload your payment receipt (image or PDF)
              </p>
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="space-y-4">
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                {...register("terms_accepted")}
                className="mt-1 h-4 w-4 text-marigold border-gray-300 rounded focus:ring-marigold"
              />
              <label className="text-sm text-gray-700">
                I accept the
                <button
                  type="button"
                  onClick={onOpenTerms}
                  className="text-marigold hover:text-marigold/90 underline ml-1"
                >
                  Terms & Conditions
                </button>
                {errors.terms_accepted && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.terms_accepted.message}
                  </p>
                )}
              </label>
            </div>
          </div>
            </>
          )}

          <div className="flex justify-end gap-3 pt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-marigold"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting || !festivalType}
              className="px-6 py-2.5 text-base font-medium text-white bg-[#002349] rounded-lg hover:bg-[#002349]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#002349] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </Modal>
      <LoadingModal isOpen={showLoadingModal} />
      <ThankYouModal
        isOpen={showThankYouModal}
        onClose={handleThankYouClose}
        participantName={watch("participant_name")}
        referenceNumber={referenceNumber}
      />
    </>
  );
};

export default RegistrationModal;
