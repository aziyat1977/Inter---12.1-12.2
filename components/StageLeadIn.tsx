import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Coffee } from 'lucide-react';
import { VOCAB_DATA } from '../constants';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

const StageLeadIn: React.FC = () => {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      <div className="text-center space-y-6 max-w-2xl mx-auto">
        <motion.div 
          variants={itemVariants}
          className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto text-emerald-700 dark:text-emerald-400"
        >
          <Coffee size={40} />
        </motion.div>
        
        <motion.h2 variants={itemVariants} className="text-4xl font-bold text-stone-900 dark:text-stone-50 font-serif">
          The Unwanted Guest
        </motion.h2>
        
        <motion.p variants={itemVariants} className="text-xl text-stone-600 dark:text-stone-400 leading-relaxed">
          Imagine you are relaxing at home with tea and a good book. Suddenly, an intense old man arrives and demands you leave your comfortable house for a year. <br/><span className="font-semibold text-emerald-600 dark:text-emerald-400">How do you feel?</span>
        </motion.p>
      </div>

      <motion.div 
        variants={containerVariants}
        className="grid md:grid-cols-3 gap-6 mt-12"
      >
        {VOCAB_DATA.map((item, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            whileHover={{ y: -8 }}
            className="bg-white dark:bg-stone-900 p-8 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-xl shadow-stone-200/50 dark:shadow-none hover:border-emerald-500 dark:hover:border-emerald-600 transition-colors group"
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-bold text-stone-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                {item.word}
              </h3>
              <BookOpen size={20} className="text-stone-300 dark:text-stone-600" />
            </div>
            
            <p className="text-emerald-600 dark:text-emerald-400 font-semibold mb-3 flex items-center">
              <span className="text-xs uppercase tracking-wide text-stone-400 dark:text-stone-500 mr-2">Synonym:</span>
              {item.synonym}
            </p>
            
            <p className="text-stone-500 dark:text-stone-400 italic text-sm border-t border-stone-100 dark:border-stone-800 pt-3">
              "{item.context}"
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default StageLeadIn;