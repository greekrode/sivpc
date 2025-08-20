import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  MapPin,
  Megaphone,
  PartyPopper,
  Piano,
  Speaker,
  VideoIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import RegistrationModal from "./RegistrationModal";
import RulesModal from "./Rules/RulesModal";

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

interface EventCardProps {
  shouldOpenRegistration?: boolean;
  onRegistrationClosed?: () => void;
}

const EventCard = ({
  shouldOpenRegistration = false,
  onRegistrationClosed,
}: EventCardProps) => {
  const [showRegistration, setShowRegistration] = useState(false);
  const [showRules, setShowRules] = useState(false);

  // Handle auto-opening registration modal
  useEffect(() => {
    if (shouldOpenRegistration) {
      setShowRegistration(true);
    }
  }, [shouldOpenRegistration]);

  const handleRegistrationClose = () => {
    setShowRegistration(false);
    if (onRegistrationClosed) {
      onRegistrationClosed();
    }
  };

  const categories: Category[] = [
    {
      id: 1,
      name: "Baroque Category",
      subCategories: [
        { id: 1, name: "Petite", ageRequirement: "7 years old and below" },
        { id: 2, name: "Junior", ageRequirement: "8 - 10 years old" },
        { id: 3, name: "Senior", ageRequirement: "11 - 13 years old" },
        { id: 4, name: "Artist", ageRequirement: "14 years old and above" },
      ],
    },
    {
      id: 2,
      name: "Classical Category",
      subCategories: [
        { id: 5, name: "Petite", ageRequirement: "7 years old and below" },
        { id: 6, name: "Junior", ageRequirement: "8 - 10 years old" },
        { id: 7, name: "Senior", ageRequirement: "11 - 13 years old" },
        { id: 8, name: "Artist", ageRequirement: "14 years old and above" },
      ],
    },
    {
      id: 3,
      name: "Romantic Category",
      subCategories: [
        { id: 9, name: "Petite", ageRequirement: "7 years old and below" },
        { id: 10, name: "Junior", ageRequirement: "8 - 10 years old" },
        { id: 11, name: "Senior", ageRequirement: "11 - 13 years old" },
        { id: 12, name: "Artist", ageRequirement: "14 years old and above" },
      ],
    },
    {
      id: 4,
      name: "20th Century Category",
      subCategories: [
        { id: 13, name: "Petite", ageRequirement: "7 years old and below" },
        { id: 14, name: "Junior", ageRequirement: "8 - 10 years old" },
        { id: 15, name: "Senior", ageRequirement: "11 - 13 years old" },
        { id: 16, name: "Artist", ageRequirement: "14 years old and above" },
      ],
    },
    {
      id: 5,
      name: "Exam",
      subCategories: [
        {
          id: 17,
          name: "Initial Grade",
          ageRequirement: "7 years old and below",
        },
        { id: 18, name: "Grade 1-2", ageRequirement: "8 - 10 years old" },
        { id: 19, name: "Grade 3-4", ageRequirement: "11 - 13 years old" },
        { id: 20, name: "Grade 5-6", ageRequirement: "14 years old and above" },
        { id: 21, name: "Grade 7-8", ageRequirement: "14 years old and above" },
        { id: 22, name: "Diploma", ageRequirement: "14 years old and above" },
      ],
    },
    {
      id: 6,
      name: "Free Choice",
      subCategories: [
        { id: 23, name: "Group A", ageRequirement: "7 years old and below" },
        { id: 24, name: "Group B", ageRequirement: "8 - 10 years old" },
        { id: 25, name: "Group C", ageRequirement: "11 - 13 years old" },
        { id: 26, name: "Group D", ageRequirement: "14 years old and above" },
        { id: 27, name: "Group E", ageRequirement: "14 years old and above" },
      ],
    },
  ];

  return (
    <>
      <div className="space-y-8 bg-white backdrop-blur-sm p-8 rounded-md border border-[#d9cdb8] shadow-md">
        {/* Important Dates Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pb-8 border-b border-[#e8dfd1]"
        >
          <div className="mb-6">
            <h3 className="text-[#857665] text-lg uppercase tracking-wider font-medium">
              Important Dates
            </h3>
          </div>

          {/* Timeline Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Registration Deadline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col items-center text-center bg-gradient-to-br from-[#f7f3eb] to-[#f0e8d5] p-6 rounded-lg border border-[#e8dfd1] ring-2 ring-[#ffb703] ring-opacity-50"
            >
              <div className="flex items-center justify-center bg-gradient-to-br from-[#e8dfd1] to-[#d9cdb8] p-3 rounded-full mb-4">
                <Clock className="w-6 h-6 text-[#a38a5c]" />
              </div>
              <p className="text-[#857665] text-sm uppercase tracking-wider font-light mb-2">
                Registration Deadline
                <br></br>
                for Virtual and Live Festival
              </p>
              <p className="text-[#5e4b3b] text-xl font-light">
                30th November 2025
              </p>
            </motion.div>

            {/* Event Date */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col items-center text-center bg-gradient-to-br from-[#f7f3eb] to-[#f0e8d5] p-6 rounded-lg border border-[#e8dfd1]"
            >
              <div className="flex items-center justify-center bg-gradient-to-br from-[#ffb703] to-[#f9a825] p-3 rounded-full mb-4">
                <Megaphone className="w-6 h-6 text-white" />
              </div>
              <p className="text-[#857665] text-sm uppercase tracking-wider font-light mb-2">
                Virtual Festival Result Announcement
              </p>
              <p className="text-[#5e4b3b] text-xl font-medium">
                25th November 2025
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col items-center text-center bg-gradient-to-br from-[#f7f3eb] to-[#f0e8d5] p-6 rounded-lg border border-[#e8dfd1]"
            >
              <div className="flex items-center justify-center bg-gradient-to-br from-[#ffb703] to-[#f9a825] p-3 rounded-full mb-4">
                <PartyPopper className="w-6 h-6 text-white" />
              </div>
              <p className="text-[#857665] text-sm uppercase tracking-wider font-light mb-2">
                Live Festival
              </p>
              <p className="text-[#5e4b3b] text-xl font-light">
                30th November 2025
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col items-center text-center bg-gradient-to-br from-[#f7f3eb] to-[#f0e8d5] p-6 rounded-lg border border-[#e8dfd1]"
            >
              <div className="flex items-center justify-center bg-gradient-to-br from-[#ffb703] to-[#f9a825] p-3 rounded-full mb-4">
                <Piano className="w-6 h-6 text-white" />
              </div>
              <p className="text-[#857665] text-sm uppercase tracking-wider font-light mb-2">
                Prize Winner Concert
              </p>
              <p className="text-[#5e4b3b] text-xl font-medium">
                13th December 2025
              </p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-start md:items-center flex-col md:flex-row gap-4 pb-8 border-b border-[#e8dfd1]"
        >
          <div className="flex items-center justify-center bg-gradient-to-br from-[#e8dfd1] to-[#d9cdb8] p-4 rounded-full">
            <MapPin className="w-7 h-7 text-[#a38a5c]" />
          </div>
          <div>
            <p className="text-[#857665] text-base uppercase tracking-wider font-light">
              Live Venue
            </p>
            <p className="text-[#5e4b3b] text-xl font-light">
              <a
                href="https://maps.app.goo.gl/mvy9mYdfmvsWTZpPA"
                target="_blank"
              >
                Voice of Singapore (VOS)
              </a>
            </p>
          </div>
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-start md:items-center flex-col md:flex-row gap-4 pb-8"
        >
          <div className="flex items-center justify-center bg-gradient-to-br from-[#e8dfd1] to-[#d9cdb8] p-4 rounded-full">
            <VideoIcon className="w-7 h-7 text-[#a38a5c]" />
          </div>
          <div>
            <p className="text-[#857665] text-base uppercase tracking-wider font-light">
              Professional Video Recording and 3 Photos Fee
            </p>
            <p className="text-[#5e4b3b] text-xl font-light">
              S$50 / category
            </p>
          </div>
        </motion.div> */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="pt-4 mt-8 flex justify-center sm:justify-start"
        >
          <motion.button
            onClick={() => setShowRegistration(true)}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 0 15px rgba(165, 138, 92, 0.3)",
            }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3 sm:px-10 sm:py-5 bg-[#ffb703] text-black font-bold tracking-wider uppercase text-lg sm:text-xl md:text-2xl inline-flex items-center gap-3 rounded-xl transition-all duration-300"
          >
            <span>REGISTER NOW</span>
          </motion.button>
        </motion.div>
      </div>

      <RegistrationModal
        isOpen={showRegistration}
        onClose={handleRegistrationClose}
        categories={categories}
        onOpenTerms={() => setShowRules(true)}
      />

      <RulesModal isOpen={showRules} onClose={() => setShowRules(false)} />
    </>
  );
};

export default EventCard;
