import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Coffee, Volume2, HelpCircle, Mic, MessageCircle, CheckCircle, XCircle } from 'lucide-react';
import { VocabItem, VocabQuizItem } from '../types';

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

    <div className="space-y-4">
      <h2 className="text-8xl md:text-9xl font-black text-stone-900 dark:text-white font-serif">
        {item.word}
      </h2>
      <div className="flex items-center justify-center gap-4 text-stone-500 dark:text-stone-400">
        <Volume2 size={40} className="text-emerald-500" />
        <span className="text-4xl font-mono tracking-widest">{item.pronunciation}</span>
      </div>
    </div>
    
    <div className="space-y-4">
      <p className="text-stone-400 dark:text-stone-500 text-xl font-bold uppercase tracking-widest">Means</p>
      <p className="text-5xl md:text-7xl text-emerald-700 dark:text-emerald-300 font-bold">
        {item.synonym}
      </p>
    </div>
    
    <div className="pt-12 border-t border-stone-200 dark:border-stone-800 w-full max-w-3xl">
      <p className="text-3xl md:text-5xl text-stone-500 dark:text-stone-400 italic font-serif leading-relaxed">
        "{item.context}"
      </p>
    </div>
  </div>
);

export const VocabQuiz: React.FC<{ quiz: VocabQuizItem }> = ({ quiz }) => {
  const [selected, setSelected] = useState<string | null>(null);
  const isCorrect = selected === quiz.answer;

  const parts = quiz.question.split("___");

  return (
    <div className="flex flex-col items-center justify-center h-full text-center space-y-12 max-w-5xl mx-auto">
      <div className="flex items-center gap-4 text-indigo-600 dark:text-indigo-400 opacity-80">
        <HelpCircle size={48} />
        <span className="text-2xl font-bold uppercase tracking-widest">Quick Check</span>
      </div>

      <div className="p-8 md:p-12 bg-stone-100 dark:bg-stone-800 rounded-[3rem] shadow-xl">
        <p className="text-4xl md:text-6xl text-stone-800 dark:text-stone-200 font-serif leading-tight">
          {parts[0]}
          <span className={`inline-block px-8 py-2 mx-2 rounded-xl border-b-4 transition-all duration-500
            ${selected 
              ? (isCorrect ? 'bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 border-emerald-500' 
                         : 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 border-red-500') 
              : 'bg-stone-200 dark:bg-stone-700 border-stone-400 w-32 md:w-48 align-middle h-12 md:h-20'}`}>
            {selected || ""}
          </span>
          {parts[1]}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {quiz.options.map((opt) => (
          <button
            key={opt}
            onClick={() => setSelected(opt)}
            className={`p-6 text-3xl font-bold rounded-2xl border-4 transition-all duration-300 transform active:scale-95
              ${selected === opt 
                ? (opt === quiz.answer 
                    ? 'bg-emerald-600 text-white border-emerald-800 scale-105' 
                    : 'bg-red-500 text-white border-red-700 opacity-50')
                : 'bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 border-stone-200 dark:border-stone-700 hover:border-emerald-500 hover:text-emerald-600'
              }`}
          >
            {opt}
          </button>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex items-center gap-4 text-3xl font-bold ${isCorrect ? 'text-emerald-600' : 'text-red-500'}`}
          >
            {isCorrect ? <CheckCircle size={40} /> : <XCircle size={40} />}
            {isCorrect ? "That's right!" : "Try again!"}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const SpeakingPrompt: React.FC<{ question: string }> = ({ question }) => (
  <div className="flex flex-col items-center justify-center h-full text-center space-y-16 max-w-6xl mx-auto">
    <div className="relative">
      <motion.div 
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute -inset-4 bg-orange-200 dark:bg-orange-900/30 rounded-full blur-xl"
      />
      <div className="relative p-10 bg-orange-500 text-white rounded-full shadow-2xl">
        <MessageCircle size={80} />
      </div>
      <div className="absolute -bottom-2 -right-2 bg-stone-900 text-white p-3 rounded-full border-4 border-stone-50">
        <Mic size={32} />
      </div>
    </div>

    <div className="space-y-6">
      <p className="text-2xl font-bold uppercase tracking-[0.2em] text-orange-600 dark:text-orange-400">Discussion</p>
      <h2 className="text-5xl md:text-7xl font-bold text-stone-900 dark:text-white leading-tight">
        "{question}"
      </h2>
    </div>

    <div className="flex gap-4 opacity-50">
      <div className="h-2 w-24 bg-stone-300 dark:bg-stone-700 rounded-full animate-pulse" />
      <div className="h-2 w-24 bg-stone-300 dark:bg-stone-700 rounded-full animate-pulse delay-100" />
      <div className="h-2 w-24 bg-stone-300 dark:bg-stone-700 rounded-full animate-pulse delay-200" />
    </div>
  </div>
);