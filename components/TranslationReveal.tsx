
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe } from 'lucide-react';
import { TranslationSet } from '../types';

interface TranslationRevealProps {
  translations: TranslationSet;
  className?: string;
  variant?: 'light' | 'dark'; // Styling variant
}

const TranslationReveal: React.FC<TranslationRevealProps> = ({ translations, className = "", variant = 'light' }) => {
  const [activeLang, setActiveLang] = useState<'ru' | 'uz' | null>(null);

  const toggle = (lang: 'ru' | 'uz') => {
    setActiveLang(current => current === lang ? null : lang);
  };

  const btnBase = "px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider transition-all border-2";
  const btnActive = "bg-emerald-600 text-white border-emerald-600 shadow-md";
  const btnInactive = variant === 'light' 
    ? "bg-white text-stone-500 border-stone-200 hover:border-emerald-400" 
    : "bg-stone-800 text-stone-400 border-stone-700 hover:border-emerald-500";

  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      <div className="flex gap-2">
        <button 
          onClick={() => toggle('ru')}
          className={`${btnBase} ${activeLang === 'ru' ? btnActive : btnInactive}`}
        >
          Ru
        </button>
        <button 
          onClick={() => toggle('uz')}
          className={`${btnBase} ${activeLang === 'uz' ? btnActive : btnInactive}`}
        >
          Uz
        </button>
      </div>

      <AnimatePresence mode="wait">
        {activeLang && (
          <motion.div
            key={activeLang}
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            className={`overflow-hidden text-center px-4 py-2 rounded-xl text-sm font-medium
              ${variant === 'light' 
                ? 'bg-emerald-50 text-emerald-900 border border-emerald-100' 
                : 'bg-emerald-900/40 text-emerald-100 border border-emerald-800'
              }`}
          >
            <div className="flex items-center justify-center gap-2 mb-1 opacity-50">
              <Globe size={12} />
              <span className="text-[10px] uppercase tracking-widest">{activeLang === 'ru' ? 'Russian' : 'Uzbek'}</span>
            </div>
            {activeLang === 'ru' ? translations.ru : translations.uz}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TranslationReveal;
