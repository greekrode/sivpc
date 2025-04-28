import React, { useState } from "react";
import { ScrollText } from "lucide-react";
import { motion } from "framer-motion";
import RulesModal from "./RulesModal";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const RulesCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
              className="text-3xl font-bold text-[#4A3B24] flex items-center gap-3"
            >
              <ScrollText className="w-8 h-8 text-[#D72638]" />
              Rules & Regulations
            </motion.h3>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg text-[#5C4830] mb-8"
          >
            Please read our comprehensive competition rules and guidelines carefully before registering.
            These rules ensure fair competition and optimal conditions for all participants.
          </motion.p>
          <motion.button
            onClick={() => setIsModalOpen(true)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn-secondary w-full text-xl"
          >
            View Rules & Regulations
          </motion.button>
        </div>
      </motion.div>
      <RulesModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default RulesCard; 