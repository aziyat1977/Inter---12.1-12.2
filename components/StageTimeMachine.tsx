import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ArrowLeft, ArrowRight, AlertTriangle, ArrowDown } from 'lucide-react';
import { GrammarExampleItem } from '../types';

export const RuleIntro: React.FC = () => (
  <div className="flex flex-col items-center justify-center h-full text-center space-y-10">
    <motion.div 
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="text-stone-900 dark:text-stone-100"
    >
      <Clock size={120} strokeWidth={1} />
    </motion.div>
    <h2 className="text-6xl md:text-8xl font-bold text-stone-900 dark:text-white font-serif">The Backshift Rule</h2>
    <p className="text-3xl md:text-5xl text-stone-600 dark:text-stone-300 max-w-5xl leading-tight">
      English grammar is dramatic. When we report the past, we must <span className="text-emerald-600 dark:text-emerald-400 font-bold underline decoration-4 underline-offset-8">step back in time</span>.
    </p>
  </div>
);

export const TimelineView: React.FC = () => (
  <div className="flex flex-col items-center justify-center h-full w-full">
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 w-full max-w-7xl">
      
      {/* Present */}
      <div className="flex-1 p-12 rounded-3xl bg-stone-200 dark:bg-stone-800 opacity-50 text-center space-y-6">
        <h3 className="text-3xl font-bold uppercase tracking-widest text-stone-500 dark:text-stone-400">The Present</h3>
        <p className="text-5xl md:text-6xl font-serif text-stone-400 dark:text-stone-500">do / is</p>
      </div>

      <div className="flex flex-col items-center gap-4 text-emerald-500 animate-pulse">
        <ArrowLeft size={64} />
        <span className="text-2xl font-bold uppercase tracking-widest whitespace-nowrap">One Step Back</span>
      </div>

      {/* Past */}
      <div className="flex-1 p-16 rounded-3xl bg-emerald-600 text-white shadow-2xl text-center space-y-6 transform scale-110">
        <h3 className="text-3xl font-bold uppercase tracking-widest text-emerald-200">The Past</h3>
        <p className="text-6xl md:text-8xl font-serif font-bold">did / was</p>
      </div>

    </div>
  </div>
);

export const MistakeView: React.FC = () => (
  <div className="flex flex-col items-center justify-center h-full space-y-12 w-full max-w-6xl mx-auto">
    <div className="w-full bg-red-100 dark:bg-red-900/30 p-12 rounded-3xl border-4 border-red-200 dark:border-red-800 flex flex-col items-center text-center gap-6">
      <div className="flex items-center gap-4 text-red-600 dark:text-red-400">
        <AlertTriangle size={64} />
        <span className="text-4xl font-bold uppercase">Don't do this</span>
      </div>
      <p className="text-4xl md:text-6xl text-stone-800 dark:text-stone-200">
        "He said he <span className="underline decoration-wavy decoration-red-500 font-bold">is</span> looking."
      </p>
    </div>

    <ArrowRight size={64} className="text-stone-400 rotate-90 md:rotate-0" />

    <div className="w-full bg-emerald-100 dark:bg-emerald-900/30 p-12 rounded-3xl border-4 border-emerald-200 dark:border-emerald-800 flex flex-col items-center text-center gap-6">
      <div className="flex items-center gap-4 text-emerald-600 dark:text-emerald-400">
        <div className="bg-emerald-500 text-white rounded-full p-2">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
        </div>
        <span className="text-4xl font-bold uppercase">Do this</span>
      </div>
      <p className="text-4xl md:text-6xl text-stone-800 dark:text-stone-200">
        "He said he <span className="bg-emerald-500 text-white px-4 py-1 rounded-xl font-bold shadow-lg">was</span> looking."
      </p>
    </div>
  </div>
);

export const GrammarRuleTitle: React.FC<{ rule: string }> = ({ rule }) => {
  const parts = rule.split('→');
  return (
    <div className="flex flex-col items-center justify-center h-full w-full space-y-12">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 text-center">
        <h2 className="text-5xl md:text-7xl font-bold text-stone-500 dark:text-stone-400 font-serif">
          {parts[0]}
        </h2>
        
        <motion.div 
          animate={{ x: [0, 20, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-emerald-500"
        >
          <ArrowRight size={80} className="rotate-90 md:rotate-0" />
        </motion.div>

        <h2 className="text-6xl md:text-8xl font-black text-emerald-600 dark:text-emerald-400 font-serif">
          {parts[1]}
        </h2>
      </div>
      
      <p className="text-2xl font-bold uppercase tracking-[0.3em] text-stone-400 dark:text-stone-600">Grammar Focus</p>
    </div>
  );
};

export const GrammarExample: React.FC<{ example: GrammarExampleItem }> = ({ example }) => (
  <div className="flex flex-col items-center justify-center h-full w-full max-w-7xl mx-auto space-y-12">
    {/* Direct Speech */}
    <div className="w-full transform -rotate-1">
      <div className="bg-white dark:bg-stone-800 p-10 rounded-t-[3rem] rounded-br-[3rem] rounded-bl-none shadow-xl border-l-8 border-stone-300 dark:border-stone-600 relative">
        <span className="absolute -top-6 left-10 bg-stone-300 dark:bg-stone-600 text-stone-800 dark:text-white px-6 py-2 rounded-full font-bold uppercase tracking-widest text-sm">
          Direct Speech
        </span>
        <p className="text-5xl md:text-7xl font-serif text-stone-800 dark:text-stone-200">
          "{example.direct}"
        </p>
      </div>
    </div>

    {/* Arrow */}
    <div className="text-emerald-500 animate-bounce">
      <ArrowDown size={64} />
    </div>

    {/* Reported Speech */}
    <div className="w-full transform rotate-1">
      <div className="bg-emerald-100 dark:bg-emerald-900/30 p-10 rounded-b-[3rem] rounded-tl-[3rem] rounded-tr-none shadow-xl border-r-8 border-emerald-500 relative">
         <span className="absolute -top-6 right-10 bg-emerald-500 text-white px-6 py-2 rounded-full font-bold uppercase tracking-widest text-sm">
          Reported Speech
        </span>
        <p className="text-5xl md:text-7xl font-serif font-bold text-emerald-800 dark:text-emerald-200">
          {example.reported}
        </p>
      </div>
    </div>
  </div>
);