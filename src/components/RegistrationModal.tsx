import { zodResolver } from "@hookform/resolvers/zod";

import { Controller, useForm } from "react-hook-form";

import { useState } from "react";
import { z } from "zod";

import { motion } from "framer-motion";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import LoadingModal from "./LoadingModal";

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
          <div className="bg-[#002349] px-5 py-3 border-b border-gray-200">
            <h3 className="text-xl font-semibold text-[#957C3D]">{title}</h3>
          </div>
          <div className="p-5">{children}</div>
        </motion.div>
      </motion.div>
    )}
  </>
);

const registrationSchema = z.object({
  registrant_status: z.enum(["personal", "parents", "teacher"]),
  registrant_name: z.string().max(100, "Max 100 chars"),
  registrant_whatsapp: z.string().regex(/^\+[1-9]\d{1,14}$/, "Invalid phone"),
  registrant_email: z.string().email("Invalid email"),
  participant_name: z.string().min(3, "Min 3 chars").max(100, "Max 100 chars"),
  category_id: z.number().min(1, "Select category"),
  subcategory_id: z.number().min(1, "Select subcategory"),
  song_title: z.string().min(1, "Enter song title").max(150, "Max 150 chars"),
  song_duration: z.string().max(10, "Max 10 chars"),
  bank_name: z.string().min(1, "Enter bank name").max(100, "Max 100 chars"),
  bank_account_number: z
    .string()
    .regex(/^\d+$/, "Only numbers")
    .min(1, "Enter account number")
    .max(25, "Max 25 chars"),
  bank_account_name: z
    .string()
    .min(1, "Enter account name")
    .max(100, "Max 100 chars"),
  terms_accepted: z.literal(true, {
    errorMap: () => ({ message: "Accept terms" }),
  }),
});

type RegistrationForm = z.infer<typeof registrationSchema>;

interface SubCategory {
  id: number;
  name: string;
  ageRequirement: string;
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
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<RegistrationForm>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      registrant_status: "personal",
      registrant_whatsapp: "",
      song_duration: "",
      registrant_name: "",
    },
  });

  const registrantStatus = watch("registrant_status") as
    | "personal"
    | "parents"
    | "teacher";
  const categoryId = watch("category_id") as number;
  const selectedCategory = categories.find((cat) => cat.id === categoryId);

  const onSubmit = async (data: RegistrationForm) => {
    try {
      setIsSubmitting(true);
      setShowLoadingModal(true);
      
      // TODO: Replace with your actual API endpoint
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      // Registration successful
      setShowLoadingModal(false);
      onClose();
      
    } catch (error) {
      console.error('Registration error:', error);
      setShowLoadingModal(false);
      // TODO: Show error message to user
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} title="Event Registration">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
                      country="id"
                      preferredCountries={["id", "sg", "my"]}
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
                  {...register("category_id", {
                    setValueAs: (value) => (value ? parseInt(value) : ""),
                  })}
                  className="block w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:border-marigold focus:ring focus:ring-marigold focus:ring-opacity-50 text-gray-900 text-sm"
                >
                  <option value="">Select a category</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
                {errors.category_id && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.category_id.message}
                  </p>
                )}
              </div>
              {selectedCategory && selectedCategory.subCategories && (
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Subcategory
                  </label>
                  <select
                    {...register("subcategory_id", {
                      setValueAs: (value) => (value ? parseInt(value) : ""),
                    })}
                    className="block w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:border-marigold focus:ring focus:ring-marigold focus:ring-opacity-50 text-gray-900 text-sm"
                  >
                    <option value="">Select a subcategory</option>
                    {selectedCategory.subCategories.map((sub) => (
                      <option
                        key={sub.id}
                        value={sub.id}
                      >{`${sub.name} (${sub.ageRequirement})`}</option>
                    ))}
                  </select>
                  {errors.subcategory_id && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.subcategory_id.message}
                    </p>
                  )}
                </div>
              )}
            </div>
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
          </div>

          {/* Payment Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Payment Information
            </h3>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
              <p className="text-medium text-gray-900">Bank Transfer</p>
              <p className="text-medium text-gray-900">Paynow</p>
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
                Account Number
              </label>
              <input
                type="text"
                {...register("bank_account_number")}
                className="block w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:border-marigold focus:ring focus:ring-marigold focus:ring-opacity-50 text-gray-900 text-sm"
              />
              {errors.bank_account_number && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.bank_account_number.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Account Holder Name
              </label>
              <input
                type="text"
                {...register("bank_account_name")}
                className="block w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:border-marigold focus:ring focus:ring-marigold focus:ring-opacity-50 text-gray-900 text-sm"
              />
              {errors.bank_account_name && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.bank_account_name.message}
                </p>
              )}
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

          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 font-medium text-sm"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-4 py-2 bg-marigold text-white rounded-md hover:bg-marigold/90 disabled:opacity-50 disabled:cursor-not-allowed font-medium text-sm"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </Modal>
      <LoadingModal isOpen={showLoadingModal} />
    </>
  );
};

export default RegistrationModal;
