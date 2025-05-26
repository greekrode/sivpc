import { motion } from "framer-motion";
import { examCategories, openCategories, periodCategories } from "./types";

const Categories = () => {
  return (
    <>
      <div className="space-y-16 text-[#5e4b3b] bg-white backdrop-blur-sm p-8 rounded-md border border-[#d9cdb8] shadow-md">
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
                              className="flex justify-between items-start border-b border-[#e8dfd1] pb-3"
                            >
                              <div>
                                <p className="text-[#524031] text-xl">
                                  {item.name}
                                </p>
                                <p className="text-[#857665] text-base">
                                  {item.duration}
                                </p>
                              </div>
                              <p className="text-[#c9a86b] font-light text-2xl">
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

      <div className="space-y-16 text-[#5e4b3b] bg-white backdrop-blur-sm p-8 rounded-md border border-[#d9cdb8] shadow-md">
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
                <p className="text-[#c9a86b] font-light text-2xl">
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

      <div className="space-y-16 text-[#5e4b3b] bg-white backdrop-blur-sm p-8 rounded-md border border-[#d9cdb8] shadow-md">
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
                  <p className="text-[#c9a86b] font-light text-2xl">
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
