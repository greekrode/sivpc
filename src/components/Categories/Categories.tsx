import { motion } from "framer-motion";
import { ArrowRight, Music } from "lucide-react";
import { examCategories, openCategories, periodCategories } from "./types";

const Categories = () => {
  return (
    <>
      {/* Period Categories */}
      <div className="mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 mb-8"
        >
          <Music className="w-6 h-6 text-[#D72638]" />
          <h3 className="text-3xl font-bold text-[#957C3D]">
            Period Categories
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(periodCategories).map(
            ([period, categories], index) => (
              <motion.div
                key={period}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#F5E6D3] p-10 rounded-none border border-[#957C3D]/20 hover:border-[#957C3D]/40 transition-all duration-500 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 group relative overflow-hidden"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 bg-gradient-to-br from-[#D72638]/5 to-transparent pointer-events-none"
                />
                <div className="relative">
                  <h4 className="text-2xl font-bold mb-6 text-[#4A3B24] flex items-center gap-2">
                    <ArrowRight className="w-5 h-5 text-[#D72638]" />
                    {period}
                  </h4>
                  <div className="space-y-4">
                    {categories.map((category, idx) => (
                      <div
                        key={idx}
                        className="border-t border-[#957C3D]/20 pt-4"
                      >
                        <h5 className="text-xl font-semibold mb-2 text-[#5C4830]">
                          {category.title}
                        </h5>
                        {category.items.map((item, itemIdx) => (
                          <div
                            key={itemIdx}
                            className="text-[#4A3B24] flex justify-between items-center"
                          >
                            <div>
                              <p>{item.name}</p>
                              <p className="text-sm">{item.duration}</p>
                            </div>
                            <p className="text-[#D72638] font-semibold">
                              {item.price}
                            </p>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          )}
        </div>
        <p className="text-[#4A3B24] mt-4 text-sm bg-[#F5E6D3] p-4 border border-[#957C3D]/20 italic">
          *no more than one piece for each selected category
          <br />
          *participants must submit the sheet music in PDF format online through
          the registration form
        </p>
      </div>

      {/* Exam Categories */}
      <div className="mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 mb-8"
        >
          <Music className="w-6 h-6 text-[#D72638]" />
          <h3 className="text-3xl font-bold text-[#957C3D]">Exam Categories</h3>
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
          <div className="relative">
            <h4 className="text-2xl font-bold mb-6 text-[#4A3B24] flex items-center gap-2">
              <ArrowRight className="w-5 h-5 text-[#D72638]" />
              ABRSM, Trinity, Rockschool, LCM syllabus
            </h4>
            <div className="space-y-4">
              {examCategories.map((category, index) => (
                <div key={index} className="border-t border-[#957C3D]/20 pt-4">
                  <div className="text-[#4A3B24] flex justify-between items-center">
                    <div>
                      <p className="text-xl font-semibold text-[#5C4830]">
                        {category.name}
                      </p>
                      <p className="text-sm">{category.ageGroup}</p>
                    </div>
                    <p className="text-[#D72638] font-semibold">
                      {category.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[#4A3B24] mt-8 text-sm">
              *no more than one piece/one movement for each category
              <br />
              *participants must submit the sheet music in PDF format online
              through the registration form
            </p>
          </div>
        </motion.div>
      </div>

      {/* Open Categories */}
      <div className="mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 mb-8"
        >
          <Music className="w-6 h-6 text-[#D72638]" />
          <h3 className="text-3xl font-bold text-[#957C3D]">Open Categories</h3>
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
          <div className="relative">
            <h4 className="text-2xl font-bold mb-6 text-[#4A3B24] flex items-center gap-2">
              <ArrowRight className="w-5 h-5 text-[#D72638]" />
              Age Groups
            </h4>
            <div className="space-y-4">
              {openCategories.map((category, index) => (
                <div key={index} className="border-t border-[#957C3D]/20 pt-4">
                  <div className="text-[#4A3B24] flex justify-between items-center">
                    <div>
                      <p className="text-xl font-semibold text-[#5C4830]">
                        {category.group}
                      </p>
                      <p>{category.age}</p>
                      <p className="text-sm">{category.duration}</p>
                    </div>
                    <p className="text-[#D72638] font-semibold">
                      {category.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[#4A3B24] mt-8 text-sm">
              *no more than two pieces for each category
              <br />
              *participants must submit the sheet music in PDF format online
              through the registration form
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Categories;
