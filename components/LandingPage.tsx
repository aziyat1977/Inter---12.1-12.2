import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center space-y-12 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"
      />

      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="p-12 bg-stone-900 dark:bg-stone-100 text-stone-100 dark:text-stone-900 rounded-[3rem] shadow-2xl z-10"
      >
        <BookOpen size={120} strokeWidth={1} />
      </motion.div>

      <div className="z-10 space-y-6">
        <motion.h1 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, type: "spring" }}
          className="text-7xl md:text-9xl font-black text-stone-900 dark:text-white font-serif tracking-tighter"
        >
          The Unwanted<br/>Guest
        </motion.h1>

        <motion.p 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-2xl md:text-4xl text-stone-500 dark:text-stone-400 font-light tracking-widest uppercase"
        >
          A Lesson on Reported Speech
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 text-stone-400 animate-bounce"
      >
        <p className="text-sm font-bold uppercase tracking-widest">Open Menu or Click Next to Begin</p>
      </motion.div>
    </div>
  );
};

export default LandingPage;