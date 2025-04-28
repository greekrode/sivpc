import React from "react";
import { Clock, Calendar, Award, ArrowRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const EventCard = () => {
  const navigate = useNavigate();

  return (
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
            Preliminary Round
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
              <span className="text-[#4A3B24]"> Voice of Singapore (VOS)</span>
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
          onClick={() => navigate("/register")}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="btn-secondary w-full text-xl"
        >
          Register Now
        </motion.button>
      </div>
    </motion.div>
  );
};

export default EventCard; 