import { motion } from "framer-motion";
import {
  Calendar,
  DollarSign,
  GraduationCap,
  Medal,
  Trophy,
} from "lucide-react";
import PageTransition from "../components/PageTransition";
import Footer from "../components/Footer";

const Prizes = () => {
  return (
    <PageTransition>
      {/* Blurred, fixed background overlay */}
      <div
        className="fixed inset-0 z-0 pt-20"
        style={{
          background: "#314e61",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
          filter: "blur(5px)",
        }}
      />

      {/* Main content - not fixed, so it scrolls normally */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-light text-[#ffffff] tracking-wide mb-2 py-16"
          >
            Competition{" "}
            <span className="text-[#c9a86b] font-semibold">Prizes</span>
          </motion.h2>

          <div className="space-y-24">
            {/* Trophies Section */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="space-y-10"
            >
              <div className="inline-block">
                <div className="flex items-center gap-2 mb-2">
                  <Trophy className="w-8 h-8 text-[#c9a86b]" />
                  <h3 className="text-3xl md:text-4xl font-bold text-[#c9a86b]">
                    Trophies
                  </h3>
                </div>
                <div className="h-[1px] w-full bg-gradient-to-r from-[#c9a86b] to-transparent" />
              </div>
              <div className="bg-white backdrop-blur-sm p-8 rounded-md border border-[#d9cdb8] shadow-md">
                <div className="relative space-y-6">
                  {[
                    {
                      name: "Gold",
                      range: "85 - 100",
                      color: "text-yellow-600",
                    },
                    {
                      name: "Silver",
                      range: "75 - 84",
                      color: "text-gray-400",
                    },
                    {
                      name: "Bronze",
                      range: "65 - 74",
                      color: "text-amber-700",
                    },
                    {
                      name: "Certificate of Participation",
                      range: "below 65",
                      color: "text-[#957C3D]",
                    },
                  ].map((trophy, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center gap-6 group"
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className={`p-2 rounded-full bg-white/30 backdrop-blur-sm ${trophy.color}`}
                      >
                        <Medal className="w-5 h-5" />
                      </motion.div>
                      <div>
                        <h4 className="text-2xl font-bold text-[#4A3B24]">
                          {trophy.name}
                        </h4>
                        <p className="text-[#5e4b3b] text-lg">
                          Score Range: {trophy.range}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* Cash Prize Section */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="space-y-10"
            >
              <div className="inline-block">
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="w-8 h-8 text-[#c9a86b]" />
                  <h3 className="text-3xl md:text-4xl font-bold text-[#c9a86b]">
                    Cash Prize
                  </h3>
                </div>
                <div className="h-[1px] w-full bg-gradient-to-r from-[#c9a86b] to-transparent" />
              </div>
              <div className="bg-white backdrop-blur-sm p-8 rounded-md border border-[#d9cdb8] shadow-md">
                <div className="relative space-y-6">
                  <p className="text-[#5e4b3b] text-xl font-semibold">
                    A total cash prize of up to SGD 2,000.00 will be shared
                    among:
                  </p>
                  <ul className="space-y-3 text-[#5e4b3b] text-lg">
                    <li>• Best Baroque Award</li>
                    <li>• Best Classical Award</li>
                    <li>• Best Romantic Award</li>
                    <li>• Best 20th Century Award</li>
                    <li>• Outstanding Performer Award* from Exam Category</li>
                    <li>• Outstanding Performer Award* from Open Category</li>
                  </ul>
                  <p className="text-[#857665] text-sm italic">
                    *Outstanding Performer Award (95 marks and above)
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Masterclass Section */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="space-y-10"
            >
              <div className="inline-block">
                <div className="flex items-center gap-2 mb-2">
                  <GraduationCap className="w-8 h-8 text-[#c9a86b]" />
                  <h3 className="text-3xl md:text-4xl font-bold text-[#c9a86b]">
                    Masterclass
                  </h3>
                </div>
                <div className="h-[1px] w-full bg-gradient-to-r from-[#c9a86b] to-transparent" />
              </div>
              <div className="bg-white backdrop-blur-sm p-8 rounded-md border border-[#d9cdb8] shadow-md">
                <p className="text-[#5e4b3b] text-xl">
                  Selected participants will be invited to participate in free
                  masterclasses with our renowned judges
                </p>
              </div>
            </motion.section>


            {/* Additional Benefits */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="space-y-10"
            >
              <div className="inline-block">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-8 h-8 text-[#c9a86b]" />
                  <h3 className="text-3xl md:text-4xl font-bold text-[#c9a86b]">
                    Additional Benefits
                  </h3>
                </div>
                <div className="h-[1px] w-full bg-gradient-to-r from-[#c9a86b] to-transparent" />
              </div>
              <div className="bg-white backdrop-blur-sm p-8 rounded-md border border-[#d9cdb8] shadow-md">
                <div className="relative space-y-6">
                  <div className="space-y-3">
                    <p className="text-[#5e4b3b] text-xl">
                      Free Pass to the upcoming Competition without
                      pre-screening*
                    </p>
                    <p className="text-[#857665] text-sm italic">
                      *ONLY eligible for all GOLD winners
                    </p>
                  </div>
                  <div className="border-t border-[#d9cdb8] pt-6">
                    <p className="text-[#5e4b3b] text-lg">
                      Details will be announced through website and email by
                      October 2025
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>
          </div>
        </div>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Prizes;
