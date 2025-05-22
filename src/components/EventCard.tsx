import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  BirdIcon,
  Calendar,
  Clock,
  MapPin,
  VideoIcon,
} from "lucide-react";
import { useState } from "react";
import RegistrationModal from "./RegistrationModal";
import RulesModal from "./Rules/RulesModal";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";

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

const EventCard = () => {
  const [showRegistration, setShowRegistration] = useState(false);
  const [showRules, setShowRules] = useState(false);
  const categories: Category[] = [
    {
      id: 1,
      name: "Baroque",
      subCategories: [
        { id: 1, name: "Petite", ageRequirement: "7 years old and below" },
        { id: 2, name: "Junior", ageRequirement: "8 - 10 years old" },
        { id: 3, name: "Senior", ageRequirement: "11 - 13 years old" },
        { id: 4, name: "Artist", ageRequirement: "14 years old and above" },
      ],
    },
    {
      id: 2,
      name: "Classical",
      subCategories: [
        { id: 5, name: "Petite", ageRequirement: "7 years old and below" },
        { id: 6, name: "Junior", ageRequirement: "8 - 10 years old" },
        { id: 7, name: "Senior", ageRequirement: "11 - 13 years old" },
        { id: 8, name: "Artist", ageRequirement: "14 years old and above" },
      ],
    },
    {
      id: 3,
      name: "Romantic",
      subCategories: [
        { id: 9, name: "Petite", ageRequirement: "7 years old and below" },
        { id: 10, name: "Junior", ageRequirement: "8 - 10 years old" },
        { id: 11, name: "Senior", ageRequirement: "11 - 13 years old" },
        { id: 12, name: "Artist", ageRequirement: "14 years old and above" },
      ],
    },
    {
      id: 4,
      name: "20th Century",
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
      name: "Open",
      subCategories: [
        { id: 23, name: "Group A", ageRequirement: "7 years old and below" },
        { id: 24, name: "Group B", ageRequirement: "8 - 10 years old" },
        { id: 25, name: "Group C", ageRequirement: "11 - 13 years old" },
        { id: 26, name: "Group D", ageRequirement: "14 years old and above" },
        { id: 27, name: "Group E", ageRequirement: "14 years old and above" },
        { id: 28, name: "Group F", ageRequirement: "14 years old and above" },
        { id: 29, name: "Group G", ageRequirement: "14 years old and above" },
      ],
    },
  ];

  return (
    <>
      <div className="space-y-8 bg-white backdrop-blur-sm p-8 rounded-md border border-[#d9cdb8] shadow-md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-start md:items-center flex-col md:flex-row gap-4 pb-8 border-b border-[#e8dfd1]"
        >
          <div className="flex items-center justify-center bg-gradient-to-br from-[#e8dfd1] to-[#d9cdb8] p-4 rounded-full">
            <Calendar className="w-7 h-7 text-[#a38a5c]" />
          </div>
          <div>
            <p className="text-[#857665] text-base uppercase tracking-wider font-light">
              Date
            </p>
            <p className="text-[#5e4b3b] text-2xl font-light tracking-wide">
              13th December 2025
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex items-start md:items-center flex-col md:flex-row gap-4 pb-8 border-b border-[#e8dfd1]"
        >
          <div className="flex items-center justify-center bg-gradient-to-br from-[#e8dfd1] to-[#d9cdb8] p-4 rounded-full">
            <Clock className="w-7 h-7 text-[#a38a5c]" />
          </div>
          <div>
            <p className="text-[#857665] text-base uppercase tracking-wider font-light">
              Registration Deadline
            </p>
            <p className="text-[#5e4b3b] text-2xl font-light">
              30th November 2025
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-start md:items-center flex-col md:flex-row gap-4 pb-8 border-b border-[#e8dfd1]"
        >
          <div className="flex items-center justify-center bg-gradient-to-br from-[#e8dfd1] to-[#d9cdb8] p-4 rounded-full">
            <BirdIcon className="w-7 h-7 text-[#a38a5c]" />
          </div>
          <div>
            <p className="text-[#857665] text-base uppercase tracking-wider font-light">
              Early Bird Deadline
            </p>
            <p className="text-[#5e4b3b] text-2xl font-light">
              30th October 2025
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-start md:items-center flex-col md:flex-row gap-4 pb-8 border-b border-[#e8dfd1]"
        >
          <div className="flex items-center justify-center bg-gradient-to-br from-[#e8dfd1] to-[#d9cdb8] p-4 rounded-full">
            <MapPin className="w-7 h-7 text-[#a38a5c]" />
          </div>
          <div>
            <p className="text-[#857665] text-base uppercase tracking-wider font-light">
              Venue
            </p>
            <p className="text-[#5e4b3b] text-2xl font-light">
              Voice of Singapore (VOS)
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-start md:items-center flex-col md:flex-row gap-4 pb-8"
        >
          <div className="flex items-center justify-center bg-gradient-to-br from-[#e8dfd1] to-[#d9cdb8] p-4 rounded-full">
            <VideoIcon className="w-7 h-7 text-[#a38a5c]" />
          </div>
          <div>
            <p className="text-[#857665] text-base uppercase tracking-wider font-light">
              Video Recording and 3 Photos Fee
            </p>
            <p className="text-[#5e4b3b] text-2xl font-light">
              S$50 / category
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="pt-4 mt-8"
        >
          <motion.button
            onClick={() => setShowRegistration(true)}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 0 15px rgba(165, 138, 92, 0.3)",
            }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-5 bg-[#ffb703] text-black font-bold tracking-wider uppercase text-base inline-flex items-center gap-3 rounded-md transition-all duration-300"
          >
            <span>REGISTER NOW</span>
          </motion.button>
        </motion.div>
      </div>

      <RegistrationModal
        isOpen={showRegistration}
        onClose={() => setShowRegistration(false)}
        categories={categories}
        onOpenTerms={() => setShowRules(true)}
      />

      <RulesModal isOpen={showRules} onClose={() => setShowRules(false)} />
    </>
  );
};

export default EventCard;
