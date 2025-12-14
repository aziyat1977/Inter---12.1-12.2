import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Check, X } from 'lucide-react';
import { PoliceItem } from '../types';

export const PoliceIntro: React.FC = () => (
  <div className="flex flex-col items-center justify-center h-full text-center space-y-12">
    <div className="p-10 bg-blue-600 rounded-3xl shadow-2xl text-white">
      <Shield size={100} />
    </div>
    <h1 className="text-6xl md:text-8xl font-black text-stone-900 dark:text-white font-serif">
      Police Report
    </h1>
    <p className="text-3xl md:text-5xl text-stone-600 dark:text-stone-300 max-w-4xl leading-relaxed">
      Officer: "Mr. Baggins, write down <span className="font-bold text-stone-900 dark:text-white">EXACTLY</span> what the wizard said."
    </p>
  </div>
);

interface PoliceQuestionProps {
  item: PoliceItem;
  value: string;
  onChange: (val: string) => void;
}

export const PoliceQuestion: React.FC<PoliceQuestionProps> = ({ item, value, onChange }) => {
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const check = () => {
    const correct = item.answer.toLowerCase();
    const userVal = value.trim().toLowerCase();
    setIsCorrect(userVal === correct);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full w-full max-w-6xl mx-auto space-y-16">
      {/* Context/Prompt */}
      <div className="w-full p-10 bg-stone-200 dark:bg-stone-800 rounded-3xl border-l-8 border-stone-400 dark:border-stone-600">
        <p className="text-3xl md:text-4xl font-serif italic text-stone-600 dark:text-stone-400 mb-4">Original Quote:</p>
        <p className="text-4xl md:text-6xl font-bold text-stone-900 dark:text-stone-100">"{item.prompt}"</p>
      </div>

      {/* Input Area */}
      <div className="text-center space-y-8">
        <div className="text-3xl md:text-5xl text-stone-800 dark:text-stone-200 flex flex-wrap justify-center items-center gap-x-4 gap-y-8 leading-normal">
          <span>{item.start}</span>
          
          <div className="relative inline-block">
            <input
              type="text"
              value={value}
              onChange={(e) => {
                onChange(e.target.value);
                setIsCorrect(null);
              }}
              onKeyDown={(e) => e.key === 'Enter' && check()}
              onBlur={check}
              autoComplete="off"
              className={`min-w-[300px] text-center border-b-4 bg-transparent outline-none px-4 pb-2 transition-colors font-bold
                ${isCorrect === true ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400' :
                  isCorrect === false ? 'border-red-500 text-red-600 dark:text-red-400' :
                  'border-stone-400 dark:border-stone-600 focus:border-stone-900 dark:focus:border-stone-100'
                }`}
            />
            
            <AnimatePresence>
              {isCorrect === true && (
                <motion.div 
                  initial={{ scale: 0, rotate: -45 }} 
                  animate={{ scale: 1, rotate: 0 }} 
                  className="absolute -right-16 top-1 text-emerald-500"
                >
                  <Check size={48} strokeWidth={4} />
                </motion.div>
              )}
               {isCorrect === false && (
                <motion.div 
                  initial={{ scale: 0, rotate: 45 }} 
                  animate={{ scale: 1, rotate: 0 }} 
                  className="absolute -right-16 top-1 text-red-500"
                >
                  <X size={48} strokeWidth={4} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <span>{item.end}</span>
        </div>

        {/* Feedback Hint */}
        <AnimatePresence>
          {isCorrect === false && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-2xl text-red-500 font-bold bg-red-100 dark:bg-red-900/40 px-6 py-2 rounded-full inline-block"
            >
              Answer: {item.answer}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};