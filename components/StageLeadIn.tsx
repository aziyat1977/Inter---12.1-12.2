import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Coffee } from 'lucide-react';
import { VocabItem } from '../types';

export const LeadInIntro: React.FC = () => (
  <div className="flex flex-col items-center justify-center h-full text-center space-y-12">
    <motion.div 
      initial={{ scale: 0 }} 
      animate={{ scale: 1 }} 
      className="p-8 bg-emerald-100 dark:bg-emerald-900 rounded-full text-emerald-800 dark:text-emerald-200"
    >
      <Coffee size={80} strokeWidth={1.5} />
    </motion.div>
    
    <h1 className="text-6xl md:text-8xl font-black text-stone-900 dark:text-white font-serif tracking-tight">
      The Unwanted Guest
    </h1>
    
    <p className="text-3xl md:text-5xl text-stone-600 dark:text-stone-300 font-medium leading-relaxed max-w-4xl">
      Imagine you are relaxing at home. Suddenly, an intense old man demands you leave for a year.
    </p>

    <p className="text-4xl md:text-6xl font-bold text-emerald-600 dark:text-emerald-400">
      How do you feel?
    </p>
  </div>
);

export const VocabCard: React.FC<{ item: VocabItem }> = ({ item }) => (
  <div className="flex flex-col items-center justify-center h-full text-center space-y-12">
    <div className="flex items-center gap-4 text-emerald-600 dark:text-emerald-400 opacity-80">
      <BookOpen size={48} />
      <span className="text-2xl font-bold uppercase tracking-widest">Vocabulary</span>
    </div>

    <h2 className="text-7xl md:text-9xl font-black text-stone-900 dark:text-white font-serif">
      {item.word}
    </h2>
    
    <div className="space-y-4">
      <p className="text-stone-400 dark:text-stone-500 text-xl font-bold uppercase tracking-widest">Means</p>
      <p className="text-4xl md:text-6xl text-emerald-700 dark:text-emerald-300 font-bold">
        {item.synonym}
      </p>
    </div>
    
    <div className="pt-12 border-t border-stone-200 dark:border-stone-800 w-full max-w-2xl">
      <p className="text-3xl md:text-5xl text-stone-500 dark:text-stone-400 italic font-serif leading-relaxed">
        "{item.context}"
      </p>
    </div>
  </div>
);