import { motion } from "framer-motion";
import {
  Calendar,
  DollarSign,
  FileText,
  GraduationCap,
  Medal,
  Trophy,
} from "lucide-react";
import PageTransition from "../components/PageTransition";
import Footer from "../components/Footer";

const Awards = () => {
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
            Festival{" "}
            <span className="text-[#c9a86b] font-semibold">
              Awards and Recognition
            </span>
          </motion.h2>

          <div className="space-y-24">
            {/* Awards and Recognition Section */}
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
                    Trophies & Certificates
                  </h3>
                </div>
                <div className="h-[1px] w-full bg-gradient-to-r from-[#c9a86b] to-transparent" />
              </div>
              
              {/* Live Participants */}
              <div className="bg-white backdrop-blur-sm p-8 rounded-md border border-[#d9cdb8] shadow-md">
                <div className="flex items-center gap-3 mb-6">
                  <Trophy className="w-6 h-6 text-[#c9a86b]" />
                  <h4 className="text-2xl font-bold text-[#4A3B24]">Live Participants</h4>
                </div>
                <div className="relative space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Trophy className="w-5 h-5 text-[#c9a86b]" />
                        <h5 className="text-lg font-semibold text-[#4A3B24]">Trophies</h5>
                      </div>
                      <p className="text-[#5e4b3b]">Will receive a trophy based on their score.</p>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <FileText className="w-5 h-5 text-[#c9a86b]" />
                        <h5 className="text-lg font-semibold text-[#4A3B24]">Certificates</h5>
                      </div>
                      <p className="text-[#5e4b3b]">Will receive a printed Certificate.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Virtual Participants */}
              <div className="bg-white backdrop-blur-sm p-8 rounded-md border border-[#d9cdb8] shadow-md">
                <div className="flex items-center gap-3 mb-6">
                  <Trophy className="w-6 h-6 text-[#c9a86b]" />
                  <h4 className="text-2xl font-bold text-[#4A3B24]">Virtual Participants</h4>
                </div>
                <div className="relative space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Trophy className="w-5 h-5 text-[#c9a86b]" />
                        <h5 className="text-lg font-semibold text-[#4A3B24]">Trophies</h5>
                      </div>
                      <p className="text-[#5e4b3b]">Who achieve high scores will also receive a trophy if they are able to attend the prize winner concert.</p>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <FileText className="w-5 h-5 text-[#c9a86b]" />
                        <h5 className="text-lg font-semibold text-[#4A3B24]">Certificates</h5>
                      </div>
                      <p className="text-[#5e4b3b]">Will receive an E-Certificate.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Score Ranges */}
              <div className="bg-white backdrop-blur-sm p-8 rounded-md border border-[#d9cdb8] shadow-md">
                <h4 className="text-2xl font-bold text-[#4A3B24] mb-6">Award Categories</h4>
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
                  
                  <div className="border-t border-[#d9cdb8] pt-6 mt-8">
                    <p className="text-[#5e4b3b] text-lg">
                      All participants will be provided with a Digital Feedback Form.
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Special Awards Section */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="space-y-10"
            >
              <div className="inline-block">
                <div className="flex items-center gap-2 mb-2">
                  <Medal className="w-8 h-8 text-[#c9a86b]" />
                  <h3 className="text-3xl md:text-4xl font-bold text-[#c9a86b]">
                    Special Awards
                  </h3>
                </div>
                <div className="h-[1px] w-full bg-gradient-to-r from-[#c9a86b] to-transparent" />
              </div>
              <div className="bg-white backdrop-blur-sm p-8 rounded-md border border-[#d9cdb8] shadow-md">
                <div className="relative space-y-8">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <GraduationCap className="w-5 h-5 text-[#c9a86b] mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-lg font-bold text-[#4A3B24] mb-2">Free Masterclass Award</h4>
                        <p className="text-[#5e4b3b]">
                          Granted to selected outstanding participants, as determined by the jury, and conducted by distinguished jury members.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Trophy className="w-5 h-5 text-[#c9a86b] mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-lg font-bold text-[#4A3B24] mb-2">High Scorer Award</h4>
                        <p className="text-[#5e4b3b]">
                          Presented to the top participant in each category with a minimum of 92 marks.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <DollarSign className="w-5 h-5 text-[#c9a86b] mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-lg font-bold text-[#4A3B24] mb-2">Prizes</h4>
                        <p className="text-[#5e4b3b]">
                          A combined total of up to S$1,200 will be distributed, which includes free masterclasses, cash prizes and trophies for both live and virtual high scorers.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <FileText className="w-5 h-5 text-[#c9a86b] mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-lg font-bold text-[#4A3B24] mb-2">Outstanding Teaching Certificate</h4>
                        <p className="text-[#5e4b3b]">
                          Awarded to teachers whose students achieve the High Scorer Award in the festival.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t border-[#d9cdb8] pt-6">
                    <h4 className="text-lg font-bold text-[#4A3B24] mb-3">High-Scorer Awards Criteria</h4>
                    <div className="space-y-2 text-[#5e4b3b]">
                      <p><strong>Eligible Categories:</strong> Baroque, Classical, Romantic, 20th Century, Exam Category and Free Choice Category</p>
                      <p><strong>Criteria:</strong> Awarded to the highest-scoring participant in the category</p>
                      <p><strong>Minimum score:</strong> 92 marks</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Masterclass Section */}
            {/* <motion.section
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
 */}

            {/* Special Privileges */}
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
                    Special Privileges
                  </h3>
                </div>
                <div className="h-[1px] w-full bg-gradient-to-r from-[#c9a86b] to-transparent" />
              </div>
              <div className="bg-white backdrop-blur-sm p-8 rounded-md border border-[#d9cdb8] shadow-md">
                <div className="relative space-y-6">
                  <div className="space-y-4">
                    <p className="text-[#5e4b3b] text-lg">
                      • Selected High Scorer Award recipients and participants in the Virtual Festival will be invited to perform at the Prize Winner Concert.
                    </p>
                    <p className="text-[#5e4b3b] text-lg">
                      • Award recipients will receive a Free Pass to the upcoming competition without the requirement for pre-screening.
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

export default Awards;
