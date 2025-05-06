import { motion } from "framer-motion";
import { ArrowRight, Award, Calendar, Clock, MapPin } from "lucide-react";
import { useState } from "react";
import RegistrationModal from "./RegistrationModal";
import RulesModal from "./Rules/RulesModal";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

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
  const eventName = "Preliminary Round";
  const categories: Category[] = [
    {
      id: 1,
      name: "Baroque",
      subCategories: [
        { id: 1, name: "Petite", ageRequirement: "7 y.o. and below" },
        { id: 2, name: "Junior", ageRequirement: "8 - 10 y.o" },
        { id: 3, name: "Senior", ageRequirement: "11 - 13 y.o" },
        { id: 4, name: "Artist", ageRequirement: "14 y.o and above" },
      ],
    },
    {
      id: 2,
      name: "Classical",
      subCategories: [
        { id: 5, name: "Petite", ageRequirement: "7 y.o. and below" },
        { id: 6, name: "Junior", ageRequirement: "8 - 10 y.o" },
        { id: 7, name: "Senior", ageRequirement: "11 - 13 y.o" },
        { id: 8, name: "Artist", ageRequirement: "14 y.o and above" },
      ],
    },
    {
      id: 3,
      name: "Romantic",
      subCategories: [
        { id: 9, name: "Petite", ageRequirement: "7 y.o. and below" },
        { id: 10, name: "Junior", ageRequirement: "8 - 10 y.o" },
        { id: 11, name: "Senior", ageRequirement: "11 - 13 y.o" },
        { id: 12, name: "Artist", ageRequirement: "14 y.o and above" },
      ],
    },
    {
      id: 4,
      name: "20th Century",
      subCategories: [
        { id: 13, name: "Petite", ageRequirement: "7 y.o. and below" },
        { id: 14, name: "Junior", ageRequirement: "8 - 10 y.o" },
        { id: 15, name: "Senior", ageRequirement: "11 - 13 y.o" },
        { id: 16, name: "Artist", ageRequirement: "14 y.o and above" },
      ],
    },
    {
      id: 5,
      name: "Exam",
      subCategories: [
        { id: 17, name: "Initial Grade", ageRequirement: "7 y.o. and below" },
        { id: 18, name: "Grade 1-2", ageRequirement: "8 - 10 y.o" },
        { id: 19, name: "Grade 3-4", ageRequirement: "11 - 13 y.o" },
        { id: 20, name: "Grade 5-6", ageRequirement: "14 y.o and above" },
        { id: 21, name: "Grade 7-8", ageRequirement: "14 y.o and above" },
        { id: 22, name: "Diploma", ageRequirement: "14 y.o and above" },
      ],
    },
    {
      id: 6,
      name: "Open",
      subCategories: [
        { id: 23, name: "Group A", ageRequirement: "7 y.o. and below" },
        { id: 24, name: "Group B", ageRequirement: "8 - 10 y.o" },
        { id: 25, name: "Group C", ageRequirement: "11 - 13 y.o" },
        { id: 26, name: "Group D", ageRequirement: "14 y.o and above" },
        { id: 27, name: "Group E", ageRequirement: "14 y.o and above" },
        { id: 28, name: "Group F", ageRequirement: "14 y.o and above" },
        { id: 29, name: "Group G", ageRequirement: "14 y.o and above" },
      ],
    },
  ];

  return (
    <>
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8 }}
        className="bg-[#F5E6D3] p-10 rounded-none border border-[#957C3D]/20 backdrop-blur-sm hover:border-[#957C3D]/40 transition-all duration-500 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 group relative overflow-hidden mb-16"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 bg-gradient-to-br from-[#D72638]/5 to-transparent pointer-events-none"
        />
        <div className="relative">
          <div className="flex items-center justify-between mb-4">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-3xl font-bold text-[#4A3B24]"
            >
              {eventName}
            </motion.h3>
            <motion.div
              whileHover={{ rotate: 180, scale: 1.2 }}
              transition={{ duration: 0.3 }}
            >
              <Award className="w-8 h-8 text-[#957C3D]" />
            </motion.div>
          </div>
          <div className="space-y-4 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center space-x-3"
            >
              <Calendar className="w-6 h-6 text-[#D72638]" />
              <span className="text-lg">
                <span className="text-[#957C3D] font-semibold">Date:</span>{" "}
                <span className="text-[#4A3B24]">13th December 2025</span>
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center space-x-3"
            >
              <Clock className="w-6 h-6 text-[#D72638]" />
              <span className="text-lg">
                <span className="text-[#957C3D] font-semibold">
                  Registration Deadline:
                </span>{" "}
                <span className="text-[#4A3B24]">30th November 2025</span>
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex items-center space-x-3"
            >
              <Clock className="w-6 h-6 text-[#D72638]" />
              <span className="text-lg">
                <span className="text-[#957C3D] font-semibold">
                  Early Bird Deadline:
                </span>{" "}
                <span className="text-[#4A3B24]">30th October 2025</span>
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex items-center space-x-3"
            >
              <MapPin className="w-6 h-6 text-[#D72638]" />
              <span className="text-lg">
                <span className="text-[#957C3D] font-semibold">Venue:</span>{" "}
                <span className="text-[#4A3B24]">
                  {" "}
                  Voice of Singapore (VOS)
                </span>
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="flex items-center space-x-3"
            >
              <ArrowRight className="w-6 h-6 text-[#D72638]" />
              <span className="text-lg">
                <span className="text-[#957C3D] font-semibold">
                  Video Recording and 3 Photos Fee:
                </span>{" "}
                <span className="text-[#4A3B24]">S$50 / category</span>
              </span>
            </motion.div>
          </div>
          <motion.button
            onClick={() => setShowRegistration(true)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn-secondary w-full text-xl"
          >
            Register Now
          </motion.button>
        </div>
      </motion.div>
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
