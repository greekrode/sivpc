import React, { useState } from "react";
import { FileText } from "lucide-react";
import { motion } from "framer-motion";
import RulesModal from "./RulesModal";

const RulesCard = () => {
  const [showRules, setShowRules] = useState(false);

  return (
    <>
      <div className="bg-white backdrop-blur-sm p-8 rounded-md border border-[#d9cdb8] shadow-md text-[#5e4b3b]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <p className="text-[#6b5a47] text-xl font-light leading-relaxed mb-8">
            Please read our comprehensive competition rules and guidelines
            carefully before registering. These rules ensure fair competition
            and optimal conditions for all participants.
          </p>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex gap-5 items-start"
            >
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#e8dfd1] to-[#d9cdb8] flex items-center justify-center flex-shrink-0">
                <span className="text-[#a38a5c] font-bold text-lg">1</span>
              </div>
              <div>
                <h3 className="text-2xl font-light text-[#c9a86b] mb-3">
                  Eligibility
                </h3>
                <p className="text-[#6b5a47] text-lg font-light leading-relaxed">
                  Open to pianists of all nationalities. Age restrictions apply
                  for specific categories.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex gap-5 items-start"
            >
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#e8dfd1] to-[#d9cdb8] flex items-center justify-center flex-shrink-0">
                <span className="text-[#a38a5c] font-bold text-lg">2</span>
              </div>
              <div>
                <h3 className="text-2xl font-light text-[#c9a86b] mb-3">
                  Repertoire
                </h3>
                <p className="text-[#6b5a47] text-lg font-light leading-relaxed">
                  All performances must adhere to the specified requirements for
                  each category.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex gap-5 items-start"
            >
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#e8dfd1] to-[#d9cdb8] flex items-center justify-center flex-shrink-0">
                <span className="text-[#a38a5c] font-bold text-lg">3</span>
              </div>
              <div>
                <h3 className="text-2xl font-light text-[#c9a86b] mb-3">
                  Judging
                </h3>
                <p className="text-[#6b5a47] text-lg font-light leading-relaxed">
                  A panel of distinguished international pianists and pedagogues
                  will evaluate performances.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12"
          >
            <motion.button
              onClick={() => setShowRules(true)}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 15px rgba(165, 138, 92, 0.2)",
              }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-10 py-4 border border-[#c9a86b] text-[#c9a86b] font-light tracking-wider hover:bg-[#c9a86b]/10 transition-all duration-300 text-lg"
            >
              <FileText className="w-6 h-6" />
              <span>VIEW COMPETITION RULES & GUIDELINES</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <RulesModal isOpen={showRules} onClose={() => setShowRules(false)} />
    </>
  );
};

export default RulesCard;
