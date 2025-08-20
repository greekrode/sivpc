import { Star, Award, Users, Music } from "lucide-react";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import Footer from "../components/Footer";

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  index,
}: {
  icon: typeof Star;
  title: string;
  description: string;
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-white backdrop-blur-sm p-8 rounded-md border border-[#d9cdb8] shadow-md hover:shadow-lg transition-all duration-300"
  >
    <motion.div
      whileHover={{ scale: 1.2, rotate: 360 }}
      transition={{ duration: 0.5 }}
      className="mb-4"
    >
      <Icon className="w-12 h-12 text-[#c9a86b] group-hover:text-[#5e4b3b] transition-colors duration-300 mx-auto" />
    </motion.div>
    <motion.h3
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
      className="text-2xl font-bold mb-2 text-[#4A3B24] text-center"
    >
      {title}
    </motion.h3>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
      className="text-[#5e4b3b] text-lg text-center"
    >
      {description}
    </motion.p>
  </motion.div>
);

const About = () => {
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
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mb-16 relative"
          >
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#c9a86b] to-transparent absolute bottom-0"
            />
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-6xl font-light text-[#ffffff] tracking-wide mb-2 py-16"
            >
              About <span className="text-[#c9a86b] font-semibold">SIVPC</span>
            </motion.h1>
          </motion.div>

          <div className="space-y-24">
            {/* About Section */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="space-y-10"
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="relative group"
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 bg-gradient-to-br from-[#c9a86b]/30 to-[#5e4b3b]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-md"
                  />
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    src="https://images.unsplash.com/photo-1552422535-c45813c61732?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Piano performance"
                    className="rounded-md shadow-xl w-full"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="bg-white backdrop-blur-sm p-8 rounded-md border border-[#d9cdb8] shadow-md space-y-6"
                >
                  {[
                    "Where young virtuosos take the stage — Singapore International Virtuoso Piano Competition (SIVPC) is dedicated to fostering musical excellence at every stage of a pianist’s journey. From budding young talents to aspiring professionals, our festival provides a dynamic and inspiring platform that supports artistic growth, celebrates achievement, and connects musicians through the universal language of music.",
                    "While originally conceived as an international competition, we are proud to launch our inaugural edition as a festival — a vibrant and inclusive celebration of piano music that honours artistry, growth, and connection.",
                    "Founded on the belief that performance is an essential part of musical development, we offer a welcoming yet challenging environment where students can build confidence, gain valuable stage experience, and receive constructive feedback from esteemed professionals in the field.",
                    "Our carefully structured categories are tailored to suit a wide range of ages and proficiency levels — ensuring that every participant, whether a beginner or advanced performer, is encouraged, supported, and recognized for their efforts and progress.",
                    "With a strong emphasis on both musical integrity and personal growth, SIVPC Festival strives to inspire excellence, ignite passion, and cultivate a lifelong love for music.",
                    "Step into the spotlight — where young virtuosos take the stage.",
                  ].map((text, index) => (
                    <motion.p
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                      className="text-[#5e4b3b] text-lg leading-relaxed"
                    >
                      {text}
                    </motion.p>
                  ))}
                </motion.div>
              </div>
            </motion.section>

            {/* Features Section */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="space-y-10"
            >
              <div className="inline-block mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-[#c9a86b] mb-2">
                  Why Choose SIVPC
                </h2>
                <div className="h-[1px] w-full bg-gradient-to-r from-[#c9a86b] to-transparent" />
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                <FeatureCard
                  icon={Star}
                  title="Excellence"
                  description="Promoting the highest standards in piano performance"
                  index={0}
                />
                <FeatureCard
                  icon={Award}
                  title="Recognition"
                  description="Substantial prizes and performance opportunities"
                  index={1}
                />
                <FeatureCard
                  icon={Users}
                  title="Community"
                  description="Building a global network of musicians"
                  index={2}
                />
                <FeatureCard
                  icon={Music}
                  title="Artistry"
                  description="Celebrating musical interpretation and creativity"
                  index={3}
                />
              </div>
            </motion.section>
          </div>
        </div>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default About;
