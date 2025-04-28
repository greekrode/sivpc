import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

const Home = () => {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <div 
        className="min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed relative"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 35, 73, 0.7), rgba(0, 35, 73, 0.7)), url("https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")'
        }}
      >
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-[#D72638]/10 to-[#957C3D]/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
        <motion.div 
          className="relative text-center px-4 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight bg-gradient-to-r from-[#D72638] via-[#957C3D] to-[#D4AF37] bg-clip-text text-transparent tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            Singapore International Virtuoso Piano Competition
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-lg md:text-2xl mb-12 text-gray-300 tracking-wide font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            Celebrating Excellence in Classical Piano Performance
          </motion.p>
          <motion.button 
            onClick={() => navigate('/events')}
            className="btn-primary text-sm tracking-widest"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.7 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Competition Details
          </motion.button>
        </motion.div>
      </div>
    </PageTransition>
  );
}

export default Home;