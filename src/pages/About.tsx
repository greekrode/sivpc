import React from 'react';
import { Star, Award, Users, Music } from 'lucide-react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

const FeatureCard = ({ icon: Icon, title, description, index }: {
  icon: typeof Star;
  title: string;
  description: string;
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="card text-center group"
  >
    <motion.div
      whileHover={{ scale: 1.2, rotate: 360 }}
      transition={{ duration: 0.5 }}
    >
      <Icon className="w-12 h-12 text-[#957C3D] group-hover:text-[#D72638] transition-colors duration-300 mx-auto mb-4" />
    </motion.div>
    <motion.h3
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
      className="text-2xl font-bold mb-2"
    >
      {title}
    </motion.h3>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
      className="text-gray-400 text-lg"
    >
      {description}
    </motion.p>
  </motion.div>
);

const About = () => {
  return (
    <PageTransition>
      <div className="pt-20 bg-[#002349] bg-[url('https://images.unsplash.com/photo-1552422535-c45813c61732?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-fixed bg-cover bg-center bg-blend-overlay">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="section-title"
          >
            About SIVPC
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
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
                className="absolute inset-0 bg-gradient-to-br from-[#D72638]/30 to-[#957C3D]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"
              />
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                src="https://images.unsplash.com/photo-1552422535-c45813c61732?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Piano performance"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {[
                "The Singapore International Virtuoso Piano Competition (SIVPC) is a prestigious platform celebrating excellence in classical piano performance. Our competition attracts talented pianists from around the world, providing them with an opportunity to showcase their artistry and technical mastery.",
                "Founded with the vision of nurturing musical talent and promoting classical piano performance, SIVPC has become a significant event in the international classical music calendar.",
                "Our distinguished panel of judges consists of renowned pianists and educators from prestigious music institutions worldwide, ensuring the highest standards of adjudication."
              ].map((text, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                  className="text-gray-300 text-xl leading-relaxed"
                >
                  {text}
                </motion.p>
              ))}
            </motion.div>
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
        </div>
      </div>
    </PageTransition>
  );
}

export default About;