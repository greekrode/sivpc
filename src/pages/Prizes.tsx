import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, GraduationCap, DollarSign, Calendar, Medal, Award, Star, AlignCenterVertical as Certificate } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const Prizes = () => {
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
            Competition Prizes
          </motion.h2>

          {/* Trophies Section */}
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-8"
            >
              <Trophy className="w-8 h-8 text-[#957C3D]" />
              <h3 className="text-3xl font-bold text-[#957C3D]">Trophies</h3>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-[#F5E6D3] p-10 rounded-none border border-[#957C3D]/20 hover:border-[#957C3D]/40 transition-all duration-500 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 group relative overflow-hidden"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-gradient-to-br from-[#D72638]/5 to-transparent pointer-events-none"
              />
              <div className="relative space-y-6">
                {[
                  { icon: Medal, name: 'Gold', range: '85 - 100', color: 'text-yellow-600' },
                  { icon: Award, name: 'Silver', range: '75 - 84', color: 'text-gray-400' },
                  { icon: Star, name: 'Bronze', range: '65 - 74', color: 'text-amber-700' },
                  { icon: Certificate, name: 'Certificate of Participation', range: 'below 65', color: 'text-[#957C3D]' }
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
                      className={`p-4 rounded-full bg-white/30 backdrop-blur-sm ${trophy.color}`}
                    >
                      <trophy.icon className="w-8 h-8" />
                    </motion.div>
                    <div>
                      <h4 className="text-2xl font-bold text-[#4A3B24]">{trophy.name}</h4>
                      <p className="text-[#5C4830] text-lg">Score Range: {trophy.range}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Masterclass Section */}
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-8"
            >
              <GraduationCap className="w-8 h-8 text-[#957C3D]" />
              <h3 className="text-3xl font-bold text-[#957C3D]">Masterclass</h3>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-[#F5E6D3] p-10 rounded-none border border-[#957C3D]/20 hover:border-[#957C3D]/40 transition-all duration-500 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 group relative overflow-hidden"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-gradient-to-br from-[#D72638]/5 to-transparent pointer-events-none"
              />
              <p className="text-[#4A3B24] text-xl">
                Selected participants will be invited to participate in free masterclasses with our renowned judges
              </p>
            </motion.div>
          </div>

          {/* Cash Prize Section */}
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-8"
            >
              <DollarSign className="w-8 h-8 text-[#957C3D]" />
              <h3 className="text-3xl font-bold text-[#957C3D]">Cash Prize</h3>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-[#F5E6D3] p-10 rounded-none border border-[#957C3D]/20 hover:border-[#957C3D]/40 transition-all duration-500 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 group relative overflow-hidden"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-gradient-to-br from-[#D72638]/5 to-transparent pointer-events-none"
              />
              <div className="relative space-y-6">
                <p className="text-[#4A3B24] text-xl font-semibold">
                  A total cash prize of up to SGD 2,000.00 will be shared among:
                </p>
                <ul className="space-y-3 text-[#4A3B24] text-lg">
                  <li>• Outstanding Performer Award</li>
                  <li>• Best Baroque Award</li>
                  <li>• Best Classical Award</li>
                  <li>• Best Romantic Award</li>
                  <li>• Best 20th Century Award</li>
                  <li>• Outstanding Performer Award* from Exam Category</li>
                  <li>• Outstanding Performer Award* from Open Category</li>
                </ul>
                <p className="text-[#5C4830] text-sm italic">
                  *Outstanding Performer Award (95 marks and above)
                </p>
              </div>
            </motion.div>
          </div>

          {/* Additional Benefits */}
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-8"
            >
              <Calendar className="w-8 h-8 text-[#957C3D]" />
              <h3 className="text-3xl font-bold text-[#957C3D]">Additional Benefits</h3>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-[#F5E6D3] p-10 rounded-none border border-[#957C3D]/20 hover:border-[#957C3D]/40 transition-all duration-500 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 group relative overflow-hidden"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-gradient-to-br from-[#D72638]/5 to-transparent pointer-events-none"
              />
              <div className="relative space-y-6">
                <div className="space-y-3">
                  <p className="text-[#4A3B24] text-xl">
                    Free Pass to the upcoming Competition without pre-screening*
                  </p>
                  <p className="text-[#5C4830] text-sm italic">
                    *ONLY eligible for all GOLD winners
                  </p>
                </div>
                <div className="border-t border-[#957C3D]/20 pt-6">
                  <p className="text-[#4A3B24] text-lg">
                    Details will be announced through website and email by October 2025
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Prizes;