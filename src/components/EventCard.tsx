import { motion } from "framer-motion";
import { Clock, MapPin, Megaphone, PartyPopper, Piano } from "lucide-react";
import { useEffect, useState } from "react";
import RegistrationModal from "./RegistrationModal";
import RulesModal from "./Rules/RulesModal";
import {
  periodCategories,
  examCategories,
  freeChoiceCategories,
} from "./Categories/types";

interface SubCategory {
  id: number;
  name: string;
  ageRequirement: string;
  livePrice: string;
  virtualPrice: string;
}

interface Category {
  id: number;
  name: string;
  subCategories: SubCategory[];
}

interface EventCardProps {
  shouldOpenRegistration?: boolean;
  onRegistrationClosed?: () => void;
}

const EventCard = ({
  shouldOpenRegistration = false,
  onRegistrationClosed,
}: EventCardProps) => {
  const [showRegistration, setShowRegistration] = useState(false);
  const [showRules, setShowRules] = useState(false);

  // Handle auto-opening registration modal
  useEffect(() => {
    if (shouldOpenRegistration) {
      setShowRegistration(true);
    }
  }, [shouldOpenRegistration]);

  const handleRegistrationClose = () => {
    setShowRegistration(false);
    if (onRegistrationClosed) {
      onRegistrationClosed();
    }
  };

  // Transform categories from types.ts to the format expected by RegistrationModal
  const transformCategories = (): Category[] => {
    const categories: Category[] = [];
    let categoryId = 1;
    let subCategoryId = 1;

    // Add period categories (Baroque, Classical, Romantic, 20th Century)
    Object.entries(periodCategories).forEach(([categoryName, categoryData]) => {
      const subCategories: SubCategory[] = categoryData.categories.map(
        (subCat) => ({
          id: subCategoryId++,
          name: subCat.title,
          ageRequirement: subCat.items[0].name, // Use the first item's name as age requirement
          livePrice: subCat.items[0].live_price,
          virtualPrice: subCat.items[0].virtual_price,
        })
      );

      categories.push({
        id: categoryId++,
        name: categoryName,
        subCategories,
      });
    });

    // Add exam categories
    const examSubCategories: SubCategory[] = examCategories.map((exam) => ({
      id: subCategoryId++,
      name: exam.name,
      ageRequirement: exam.ageGroup,
      livePrice: exam.live_price,
      virtualPrice: exam.virtual_price,
    }));

    categories.push({
      id: categoryId++,
      name: "Exam",
      subCategories: examSubCategories,
    });

    // Add open categories (Free Choice)
    const openSubCategories: SubCategory[] = freeChoiceCategories.map(
      (open) => ({
        id: subCategoryId++,
        name: open.group,
        ageRequirement: open.age,
        livePrice: open.live_price,
        virtualPrice: open.virtual_price,
      })
    );

    categories.push({
      id: categoryId++,
      name: "Free Choice",
      subCategories: openSubCategories,
    });

    return categories;
  };

  const categories = transformCategories();

  return (
    <>
      <div className="space-y-8 bg-white backdrop-blur-sm p-8 rounded-md border border-[#d9cdb8] shadow-md">
        {/* Important Dates Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pb-8 border-b border-[#e8dfd1]"
        >
          <div className="mb-6">
            <h3 className="text-[#857665] text-lg uppercase tracking-wider font-medium">
              Important Dates
            </h3>
          </div>

          {/* Timeline Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Registration Deadline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col items-center text-center bg-gradient-to-br from-[#f7f3eb] to-[#f0e8d5] p-6 rounded-lg border border-[#e8dfd1] ring-2 ring-[#ffb703] ring-opacity-50"
            >
              <div className="flex items-center justify-center bg-gradient-to-br from-[#e8dfd1] to-[#d9cdb8] p-3 rounded-full mb-4">
                <Clock className="w-6 h-6 text-[#a38a5c]" />
              </div>
              <p className="text-[#857665] text-sm uppercase tracking-wider font-light mb-2">
                Registration Deadline
                <br></br>
                for Virtual and Live Festival
              </p>
              <p className="text-[#5e4b3b] text-xl font-medium">
                15th November 2025
              </p>
            </motion.div>

            {/* Event Date */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col items-center text-center bg-gradient-to-br from-[#f7f3eb] to-[#f0e8d5] p-6 rounded-lg border border-[#e8dfd1]"
            >
              <div className="flex items-center justify-center bg-gradient-to-br from-[#ffb703] to-[#f9a825] p-3 rounded-full mb-4">
                <Megaphone className="w-6 h-6 text-white" />
              </div>
              <p className="text-[#857665] text-sm uppercase tracking-wider font-light mb-2">
                Virtual Festival Result Announcement
              </p>
              <p className="text-[#5e4b3b] text-xl font-medium">
                3rd December 2025
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col items-center text-center bg-gradient-to-br from-[#f7f3eb] to-[#f0e8d5] p-6 rounded-lg border border-[#e8dfd1]"
            >
              <div className="flex items-center justify-center bg-gradient-to-br from-[#ffb703] to-[#f9a825] p-3 rounded-full mb-4">
                <PartyPopper className="w-6 h-6 text-white" />
              </div>
              <p className="text-[#857665] text-sm uppercase tracking-wider font-light mb-2">
                Live Festival
              </p>
              <p className="text-[#5e4b3b] text-xl font-medium">
                13th December 2025
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col items-center text-center bg-gradient-to-br from-[#f7f3eb] to-[#f0e8d5] p-6 rounded-lg border border-[#e8dfd1]"
            >
              <div className="flex items-center justify-center bg-gradient-to-br from-[#ffb703] to-[#f9a825] p-3 rounded-full mb-4">
                <Piano className="w-6 h-6 text-white" />
              </div>
              <p className="text-[#857665] text-sm uppercase tracking-wider font-light mb-2">
                Prize Winner Concert
              </p>
              <p className="text-[#5e4b3b] text-xl font-medium">
                13th December 2025
              </p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-start md:items-center flex-col md:flex-row gap-4 pb-8 border-b border-[#e8dfd1]"
        >
          <div className="flex items-center justify-center bg-gradient-to-br from-[#e8dfd1] to-[#d9cdb8] p-4 rounded-full">
            <MapPin className="w-7 h-7 text-[#a38a5c]" />
          </div>
          <div>
            <p className="text-[#857665] text-base uppercase tracking-wider font-light">
              Live Venue
            </p>
            <p className="text-[#5e4b3b] text-xl font-light">
              <a
                href="https://maps.app.goo.gl/mvy9mYdfmvsWTZpPA"
                target="_blank"
              >
                Voice of Singapore (VOS)
              </a>
            </p>
          </div>
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-start md:items-center flex-col md:flex-row gap-4 pb-8"
        >
          <div className="flex items-center justify-center bg-gradient-to-br from-[#e8dfd1] to-[#d9cdb8] p-4 rounded-full">
            <VideoIcon className="w-7 h-7 text-[#a38a5c]" />
          </div>
          <div>
            <p className="text-[#857665] text-base uppercase tracking-wider font-light">
              Professional Video Recording and 3 Photos Fee
            </p>
            <p className="text-[#5e4b3b] text-xl font-light">
              S$50 / category
            </p>
          </div>
        </motion.div> */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="pt-4 mt-8 flex justify-center sm:justify-start"
        >
          <motion.button
            onClick={() => setShowRegistration(true)}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 0 15px rgba(165, 138, 92, 0.3)",
            }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3 sm:px-10 sm:py-5 bg-[#ffb703] text-black font-bold tracking-wider uppercase text-lg sm:text-xl md:text-2xl inline-flex items-center gap-3 rounded-xl transition-all duration-300"
          >
            <span>REGISTER NOW</span>
          </motion.button>
        </motion.div>
      </div>

      <RegistrationModal
        isOpen={showRegistration}
        onClose={handleRegistrationClose}
        categories={categories}
        onOpenTerms={() => setShowRules(true)}
      />

      <RulesModal isOpen={showRules} onClose={() => setShowRules(false)} />
    </>
  );
};

export default EventCard;
