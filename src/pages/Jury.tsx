import React, { useState } from "react";
import { motion } from "framer-motion";
import { Users, Award, User } from "lucide-react";
import PageTransition from "../components/PageTransition";
import Footer from "../components/Footer";
import BiographyModal from "../components/BiographyModal";
import juryData from "../data/jury.json";
import { JuryMember } from "../types/jury";

const Jury: React.FC = () => {
  const virtualJury: JuryMember[] = juryData.virtual;
  const liveJury: JuryMember[] = juryData.live;
  const [selectedMember, setSelectedMember] = useState<JuryMember | null>(null);
  const [isBiographyModalOpen, setIsBiographyModalOpen] = useState(false);

  const handleOpenBiography = (member: JuryMember) => {
    setSelectedMember(member);
    setIsBiographyModalOpen(true);
  };

  const handleCloseBiography = () => {
    setIsBiographyModalOpen(false);
    setSelectedMember(null);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const JuryCard: React.FC<{ member: JuryMember; index: number }> = ({
    member,
  }) => (
    <motion.div
      variants={itemVariants}
      className="bg-white backdrop-blur-sm p-8 rounded-md border border-[#d9cdb8] shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-[#c9a86b] shadow-lg">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>
        <h3 className="text-2xl font-bold text-[#4A3B24] mb-2">
          {member.name}
        </h3>
        
        {/* Biography - Hidden on mobile, shown on larger screens */}
        <div
          className="text-[#5e4b3b] leading-relaxed hidden md:block"
          dangerouslySetInnerHTML={{ __html: member.bio }}
        />
        
        {/* Biography Button - Only shown on mobile */}
        <button
          onClick={() => handleOpenBiography(member)}
          className="md:hidden flex items-center gap-2 px-4 py-2 bg-[#c9a86b] text-white rounded-lg hover:bg-[#a38a5c] transition-colors duration-200"
        >
          <User className="w-4 h-4" />
          <span>Biography</span>
        </button>
      </div>
    </motion.div>
  );

  return (
    <PageTransition>
      <div className="min-h-screen relative">
        {/* Background */}
        <div
          className="fixed inset-0 bg-[#314e61] opacity-90"
          style={{
            filter: "blur(1px)",
            zIndex: -2,
          }}
        />

        {/* Main Content */}
        <div className="relative z-10 pt-24 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center mb-16"
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-[#c9a86b] rounded-full shadow-lg">
                  <Users className="w-12 h-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                Meet Our Jury
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                Our distinguished panel of experts who evaluate and recognize
                excellence in innovation and achievement.
              </p>
            </motion.div>

            {/* Virtual Jury Section */}
            <motion.section
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="mb-20"
            >
              <motion.div variants={itemVariants} className="text-center mb-12">
                <div className="flex justify-center items-center mb-4">
                  <Award className="w-8 h-8 text-[#c9a86b] mr-3" />
                  <h2 className="text-4xl font-bold text-white">
                    Virtual Jury
                  </h2>
                </div>
              </motion.div>

              <motion.div
                variants={containerVariants}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8"
              >
                {virtualJury.slice(0, 2).map((member, index) => (
                  <JuryCard key={member.id} member={member} index={index} />
                ))}
              </motion.div>
            </motion.section>

            {/* Live Jury Section */}
            <motion.section
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div variants={itemVariants} className="text-center mb-12">
                <div className="flex justify-center items-center mb-4">
                  <Users className="w-8 h-8 text-[#c9a86b] mr-3" />
                  <h2 className="text-4xl font-bold text-white">Live Jury</h2>
                </div>
              </motion.div>

              <motion.div
                variants={containerVariants}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8"
              >
                {liveJury.map((member, index) => (
                  <JuryCard key={member.id} member={member} index={index} />
                ))}
              </motion.div>
            </motion.section>
          </div>
        </div>

        <Footer />
      </div>
      
      {/* Biography Modal */}
      <BiographyModal
        isOpen={isBiographyModalOpen}
        onClose={handleCloseBiography}
        member={selectedMember}
      />
    </PageTransition>
  );
};

export default Jury;
