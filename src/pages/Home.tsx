import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";

const Home = () => {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <div
        className="min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed relative overflow-hidden"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 35, 73, 0.7), rgba(0, 35, 73, 0.7)), url("https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
        }}
      >
        {/* Background gradients for better contrast */}
        <motion.div
          className="absolute top-0 left-0 w-full h-1/4 bg-gradient-to-b from-[#001a36] to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1.5 }}
        />

        <motion.div
          className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-[#001a36] to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1.5 }}
        />

        {/* Main background gradient */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#D72638]/10 to-[#957C3D]/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />

        <div className="relative flex flex-col items-center justify-center px-4 max-w-6xl mx-auto z-10">
          {/* Main content */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <span className="block mb-2 text-white">
                Singapore International Virtuoso
              </span>
              <span className="bg-gradient-to-r from-[#ffb703] to-[#ffd700] bg-clip-text text-transparent">
                Piano Competition
              </span>
            </motion.h1>
          </motion.div>

          <motion.div
            className="relative mb-16 max-w-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <motion.div
              className="h-[1px] w-24 bg-[#ffb703] absolute -top-4 left-1/2 transform -translate-x-1/2"
              initial={{ width: 0 }}
              animate={{ width: 100 }}
              transition={{ duration: 1, delay: 1.6 }}
            />
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 tracking-wide font-light italic">
              Celebrating Excellence in Classical Piano Performance
            </p>
            <motion.div
              className="h-[1px] w-24 bg-[#ffb703] absolute -bottom-4 left-1/2 transform -translate-x-1/2"
              initial={{ width: 0 }}
              animate={{ width: 100 }}
              transition={{ duration: 1, delay: 1.6 }}
            />
          </motion.div>

          <motion.button
            onClick={() => navigate("/events")}
            className="px-8 py-4 bg-[#ffb703] text-[#002349] font-medium tracking-widest uppercase text-sm rounded-sm hover:bg-[#ffd700] transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.7 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Competition Details
          </motion.button>
        </div>
      </div>
    </PageTransition>
  );
};

export default Home;
