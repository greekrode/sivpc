import { motion } from "framer-motion";
import Categories from "../components/Categories/Categories";
import EventCard from "../components/EventCard";
import RulesCard from "../components/Rules/RulesCard";
import PageTransition from "../components/PageTransition";

const Events = () => {
  return (
    <PageTransition>
      <div className="pt-20 bg-[#002349] bg-[url('https://images.unsplash.com/photo-1552422535-c45813c61732?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-fixed bg-cover bg-center bg-blend-overlay">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="section-title"
          >
            Competition Details
          </motion.h2>

          <EventCard />

          <RulesCard />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="section-title text-3xl"
          >
            Categories
          </motion.h2>
          <Categories />
        </div>
      </div>
    </PageTransition>
  );
};

export default Events;
