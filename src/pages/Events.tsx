import { motion } from "framer-motion";
import Categories from "../components/Categories/Categories";
import EventCard from "../components/EventCard";
import RulesCard from "../components/Rules/RulesCard";
import PageTransition from "../components/PageTransition";
import Footer from "../components/Footer";

const Events = () => {
  return (
    <PageTransition>
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
              Competition{" "}
              <span className="text-[#c9a86b] font-semibold">Details</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-[#ffffff] font-light text-xl md:text-2xl max-w-3xl leading-relaxed"
            >
              Experience the excellence and artistry of international piano
              virtuosos competing in our prestigious event.
            </motion.p>
          </motion.div>

          {/* Event Content */}
          <div className="space-y-24">
            {/* Event Section */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="space-y-10"
            >
              <div className="inline-block">
                <h2 className="text-3xl md:text-4xl font-bold text-[#c9a86b] mb-2">
                  Preliminary Round
                </h2>
                <div className="h-[1px] w-full bg-gradient-to-r from-[#c9a86b] to-transparent" />
              </div>
              <EventCard />
            </motion.section>

            {/* Rules Section */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="space-y-10"
            >
              <div className="inline-block">
                <h2 className="text-3xl md:text-4xl font-bold text-[#c9a86b] mb-2">
                  Rules & Guidelines
                </h2>
                <div className="h-[1px] w-full bg-gradient-to-r from-[#c9a86b] to-transparent" />
              </div>
              <RulesCard />
            </motion.section>

            {/* Categories Section */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="space-y-10 mb-12"
            >
              <div className="inline-block">
                <h2 className="text-3xl md:text-4xl font-bold text-[#c9a86b] mb-2">
                  Competition Categories
                </h2>
                <div className="h-[1px] w-full bg-gradient-to-r from-[#c9a86b] to-transparent" />
              </div>
              <Categories />
            </motion.section>
          </div>
        </div>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Events;
