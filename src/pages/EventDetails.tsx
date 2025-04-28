import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, Users, FileText, CheckCircle } from 'lucide-react';
import PageTransition from '../components/PageTransition';

interface Category {
  name: string;
  description: string;
  subcategories: {
    name: string;
    requirements: string[];
    fee: number;
  }[];
}

interface JuryMember {
  name: string;
  title: string;
  institution: string;
  image: string;
}

const categories: { [key: string]: Category[] } = {
  preliminary: [
    {
      name: "Junior Division",
      description: "For pianists aged 12-15, focusing on technical foundation and musical expression.",
      subcategories: [
        {
          name: "Classical Repertoire",
          requirements: [
            "One movement from a Classical sonata",
            "One étude by Chopin, Liszt, or Rachmaninoff",
            "Maximum duration: 15 minutes"
          ],
          fee: 150
        },
        {
          name: "Romantic Repertoire",
          requirements: [
            "One work by a Romantic composer",
            "One virtuosic étude",
            "Maximum duration: 15 minutes"
          ],
          fee: 150
        }
      ]
    },
    {
      name: "Senior Division",
      description: "For pianists aged 16-19, emphasizing advanced repertoire and artistic maturity.",
      subcategories: [
        {
          name: "Advanced Classical",
          requirements: [
            "Complete Classical sonata",
            "Two contrasting études",
            "Maximum duration: 25 minutes"
          ],
          fee: 200
        },
        {
          name: "Advanced Romantic",
          requirements: [
            "Major Romantic work",
            "One Chopin or Liszt étude",
            "Maximum duration: 25 minutes"
          ],
          fee: 200
        }
      ]
    }
  ],
  final: [
    {
      name: "Concerto Division",
      description: "For exceptional pianists demonstrating mastery of major concerto repertoire.",
      subcategories: [
        {
          name: "Classical Concerto",
          requirements: [
            "Complete Mozart or Beethoven concerto",
            "Cadenzas required where applicable",
            "Maximum duration: 40 minutes"
          ],
          fee: 300
        },
        {
          name: "Romantic Concerto",
          requirements: [
            "Complete Romantic concerto",
            "Original cadenzas where required",
            "Maximum duration: 45 minutes"
          ],
          fee: 300
        }
      ]
    }
  ]
};

const juryPanel: JuryMember[] = [
  {
    name: "Prof. Maria Schmidt",
    title: "Concert Pianist & Professor",
    institution: "Vienna Conservatory",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Dr. James Chen",
    title: "Head of Piano Department",
    institution: "Royal Academy of Music",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Ms. Sarah Thompson",
    title: "International Concert Artist",
    institution: "Juilliard School of Music",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
  }
];

const Modal = ({ isOpen, onClose, title, children }: {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          onClick={e => e.stopPropagation()}
          className="bg-[#002349] border border-[#957C3D]/20 p-6 rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold text-[#957C3D]">{title}</h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          {children}
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

const EventDetails = () => {
  const { round } = useParams<{ round: string }>();
  const [showTerms, setShowTerms] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('');

  const roundCategories = round ? categories[round] : [];

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
            {round === 'preliminary' ? 'Preliminary Round' : 'Final Round'} Details
          </motion.h2>

          {/* Categories Section */}
          <div className="mb-16">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-8 text-[#957C3D] flex items-center gap-2"
            >
              <Award className="w-8 h-8" />
              Categories
            </motion.h3>
            <div className="grid md:grid-cols-2 gap-8">
              {roundCategories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card"
                >
                  <h4 className="text-2xl font-bold mb-4 text-[#957C3D]">{category.name}</h4>
                  <p className="text-gray-300 mb-6 text-lg">{category.description}</p>
                  <div className="space-y-6">
                    {category.subcategories.map((sub, subIndex) => (
                      <div key={sub.name} className="border-t border-[#957C3D]/20 pt-4">
                        <h5 className="text-xl font-semibold mb-3 text-white">{sub.name}</h5>
                        <ul className="space-y-2 mb-4">
                          {sub.requirements.map((req, reqIndex) => (
                            <motion.li
                              key={reqIndex}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: 0.1 * reqIndex }}
                              className="flex items-start gap-2 text-gray-300"
                            >
                              <CheckCircle className="w-5 h-5 text-[#D72638] flex-shrink-0 mt-1" />
                              <span>{req}</span>
                            </motion.li>
                          ))}
                        </ul>
                        <p className="text-[#957C3D] font-semibold">
                          Registration Fee: ${sub.fee}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Jury Panel Section */}
          <div className="mb-16">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-8 text-[#957C3D] flex items-center gap-2"
            >
              <Users className="w-8 h-8" />
              Jury Panel
            </motion.h3>
            <div className="grid md:grid-cols-3 gap-8">
              {juryPanel.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card text-center"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h4 className="text-xl font-bold mb-2 text-[#957C3D]">{member.name}</h4>
                  <p className="text-white mb-1">{member.title}</p>
                  <p className="text-gray-400">{member.institution}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Registration Section */}
          <div className="text-center space-y-6">
            <motion.button
              onClick={() => setShowTerms(true)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary"
            >
              <FileText className="w-5 h-5 inline-block mr-2" />
              View Terms & Conditions
            </motion.button>
            <motion.button
              onClick={() => setShowRegistration(true)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-secondary block w-full max-w-md mx-auto"
            >
              Register Now
            </motion.button>
          </div>

          {/* Terms & Conditions Modal */}
          <Modal
            isOpen={showTerms}
            onClose={() => setShowTerms(false)}
            title="Terms & Conditions"
          >
            <div className="prose prose-invert max-w-none">
              <h4 className="text-xl font-bold mb-4 text-[#957C3D]">1. Eligibility</h4>
              <p className="mb-4 text-gray-300">Participants must meet the age requirements for their chosen category as of the competition date. Professional musicians and previous competition winners are not eligible to participate.</p>

              <h4 className="text-xl font-bold mb-4 text-[#957C3D]">2. Registration</h4>
              <p className="mb-4 text-gray-300">Registration fees are non-refundable. All required documents must be submitted by the registration deadline. Incomplete applications will not be considered.</p>

              <h4 className="text-xl font-bold mb-4 text-[#957C3D]">3. Performance Requirements</h4>
              <p className="mb-4 text-gray-300">All pieces must be performed from memory. Participants must adhere to the time limits specified for their category. The jury's decisions are final and cannot be appealed.</p>

              <h4 className="text-xl font-bold mb-4 text-[#957C3D]">4. Rights</h4>
              <p className="text-gray-300">The competition reserves the right to record, photograph, and broadcast all performances. Participants waive all rights and claims to such materials.</p>
            </div>
          </Modal>

          {/* Registration Modal */}
          <Modal
            isOpen={showRegistration}
            onClose={() => setShowRegistration(false)}
            title="Registration Form"
          >
            <form className="space-y-6">
              <div>
                <label className="block text-lg font-medium mb-2">Full Name</label>
                <input type="text" className="input-field" required />
              </div>
              <div>
                <label className="block text-lg font-medium mb-2">Email</label>
                <input type="email" className="input-field" required />
              </div>
              <div>
                <label className="block text-lg font-medium mb-2">Date of Birth</label>
                <input type="date" className="input-field" required />
              </div>
              <div>
                <label className="block text-lg font-medium mb-2">Category</label>
                <select
                  className="input-field"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  required
                >
                  <option value="">Select a category</option>
                  {roundCategories.map(cat => (
                    <option key={cat.name} value={cat.name}>{cat.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-lg font-medium mb-2">Subcategory</label>
                <select
                  className="input-field"
                  value={selectedSubcategory}
                  onChange={(e) => setSelectedSubcategory(e.target.value)}
                  required
                >
                  <option value="">Select a subcategory</option>
                  {roundCategories
                    .find(cat => cat.name === selectedCategory)
                    ?.subcategories.map(sub => (
                      <option key={sub.name} value={sub.name}>{sub.name}</option>
                    ))}
                </select>
              </div>
              <div>
                <label className="block text-lg font-medium mb-2">Repertoire</label>
                <textarea
                  className="input-field"
                  rows={4}
                  placeholder="List your chosen pieces and their composers"
                  required
                ></textarea>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="terms" className="w-4 h-4" required />
                <label htmlFor="terms" className="text-gray-300">
                  I agree to the terms and conditions
                </label>
              </div>
              <motion.button
                type="submit"
                className="btn-secondary w-full"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Submit Registration
              </motion.button>
            </form>
          </Modal>
        </div>
      </div>
    </PageTransition>
  );
};

export default EventDetails;