import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { examCategories, openCategories, periodCategories } from "./types";

const Categories = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navElement = document.getElementById('category-nav');
      if (navElement) {
        const rect = navElement.getBoundingClientRect();
        setIsSticky(rect.top <= 80); // 80px is the top offset (5rem = 80px)
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navElement = document.getElementById('category-nav');
      const navHeight = navElement ? navElement.offsetHeight : 0;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - 80 - navHeight - 20; // Navbar (80px) + sticky nav height + 20px buffer
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Navigation Links */}
      <motion.div
        id="category-nav"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`sticky top-20 z-40 flex flex-wrap justify-center gap-4 mb-12 py-4 transition-all duration-300 ${
          isSticky 
            ? 'bg-white/95 backdrop-blur-md -mx-8 px-8 border-b border-[#d9cdb8]/30' 
            : ''
        }`}
      >
        <button
          onClick={() => scrollToSection('period-section')}
          className="px-6 py-3 bg-gradient-to-r from-[#c9a86b]/10 to-[#987f51]/10 hover:from-[#c9a86b]/20 hover:to-[#987f51]/20 text-[#c9a86b] hover:text-[#987f51] text-lg font-medium rounded-full border border-[#c9a86b]/30 hover:border-[#987f51]/50 transition-all duration-300 hover:shadow-lg hover:scale-105 backdrop-blur-sm"
        >
          Period Categories
        </button>
        <button
          onClick={() => scrollToSection('exam-section')}
          className="px-6 py-3 bg-gradient-to-r from-[#c9a86b]/10 to-[#987f51]/10 hover:from-[#c9a86b]/20 hover:to-[#987f51]/20 text-[#c9a86b] hover:text-[#987f51] text-lg font-medium rounded-full border border-[#c9a86b]/30 hover:border-[#987f51]/50 transition-all duration-300 hover:shadow-lg hover:scale-105 backdrop-blur-sm"
        >
          Exam Categories
        </button>
        <button
          onClick={() => scrollToSection('age-section')}
          className="px-6 py-3 bg-gradient-to-r from-[#c9a86b]/10 to-[#987f51]/10 hover:from-[#c9a86b]/20 hover:to-[#987f51]/20 text-[#c9a86b] hover:text-[#987f51] text-lg font-medium rounded-full border border-[#c9a86b]/30 hover:border-[#987f51]/50 transition-all duration-300 hover:shadow-lg hover:scale-105 backdrop-blur-sm"
        >
          Age Groups
        </button>
      </motion.div>

      <div id="period-section" className="space-y-16 text-[#5e4b3b] bg-white backdrop-blur-sm p-8 rounded-md border border-[#d9cdb8] shadow-md">
        {/* Period Categories */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            {Object.entries(periodCategories).map(
              ([period, categories], index) => (
                <div key={period} className="space-y-6">
                  <motion.h4
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="inline-block text-3xl font-bold text-[#c9a86b] border-b border-[#c9a86b]/30 pb-2"
                  >
                    {period}
                  </motion.h4>

                  <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                    {categories.map((category, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 + 0.2 }}
                        className="space-y-4"
                      >
                        <h5 className="text-2xl font-light text-[#987f51]">
                          {category.title}
                        </h5>
                        <div className="space-y-4">
                          {category.items.map((item, itemIdx) => (
                            <div
                              key={itemIdx}
                              className="flex justify-between items-start  pb-3"
                            >
                              <div>
                                <p className="text-[#524031] text-xl">
                                  {item.name}
                                </p>
                                <p className="text-[#857665] text-base">
                                  {item.duration}
                                </p>
                              </div>
                              <p className="text-[#000] font-light text-xl md:text-2xl">
                                {item.price}
                              </p>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )
            )}

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-[#f5f0e6]/50 p-5 border-l-2 border-[#c9a86b]/50"
            >
              <p className="text-[#6b5a47] text-base font-light leading-relaxed italic">
                *no more than one piece for each selected category
                <br />
                *participants must submit the sheet music in PDF format online
                through the registration form
              </p>
            </motion.div>
          </motion.div>
        </section>
      </div>

      <div id="exam-section" className="space-y-16 text-[#5e4b3b] bg-white backdrop-blur-sm p-8 rounded-md border border-[#d9cdb8] shadow-md">
        {/* Exam Categories */}
        <section>
          <motion.h4
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-3xl font-bold text-[#c9a86b] border-b border-[#c9a86b]/30 pb-2 mb-8"
          >
            ABRSM, Trinity, Rockschool, LCM syllabus
          </motion.h4>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {examCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex justify-between items-start border-b border-[#e8dfd1] pb-4"
              >
                <div>
                  <p className="text-[#5e4b3b] text-xl">{category.name}</p>
                  <p className="text-[#857665] text-base">
                    {category.ageGroup}
                  </p>
                </div>
                <p className="text-[#000] font-light text-xl md:text-2xl">
                  {category.price}
                </p>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-[#f5f0e6]/50 p-5 border-l-2 border-[#c9a86b]/50 mt-8"
            >
              <p className="text-[#6b5a47] text-base font-light leading-relaxed italic">
                *no more than one piece/one movement for each category
                <br />
                *participants must submit the sheet music in PDF format online
                through the registration form
              </p>
            </motion.div>
          </motion.div>
        </section>
      </div>

      <div id="age-section" className="space-y-16 text-[#5e4b3b] bg-white backdrop-blur-sm p-8 rounded-md border border-[#d9cdb8] shadow-md">
        {/* Open Categories */}
        <section>
          <motion.h4
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-3xl font-bold text-[#c9a86b] border-b border-[#c9a86b]/30 pb-2 mb-8"
          >
            Age Groups
          </motion.h4>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
              {openCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex justify-between items-start border-b border-[#e8dfd1] pb-4"
                >
                  <div>
                    <p className="text-[#5e4b3b] text-xl">{category.group}</p>
                    <p className="text-[#6b5a47] text-base">{category.age}</p>
                    <p className="text-[#857665] text-base">
                      {category.duration}
                    </p>
                  </div>
                  <p className="text-[#000] font-light text-xl md:text-2xl">
                    {category.price}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-[#f5f0e6]/50 p-5 border-l-2 border-[#c9a86b]/50 mt-8"
            >
              <p className="text-[#6b5a47] text-base font-light leading-relaxed italic">
                *no more than two pieces for each category
                <br />
                *participants must submit the sheet music in PDF format online
                through the registration form
              </p>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default Categories;
