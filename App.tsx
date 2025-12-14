import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, ArrowRight, CheckCircle } from 'lucide-react';

import ThemeToggle from './components/ThemeToggle';
import ProgressBar from './components/ProgressBar';
import StageLeadIn from './components/StageLeadIn';
import StageGossip from './components/StageGossip';
import StageTimeMachine from './components/StageTimeMachine';
import StagePolice from './components/StagePolice';
import StageRoleplay from './components/StageRoleplay';

export default function App() {
  const [stage, setStage] = useState(0);
  const [isDark, setIsDark] = useState(false);

  // Handle Dark Mode Class
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const stages = [
    { component: <StageLeadIn />, title: "Lead In" },
    { component: <StageGossip />, title: "Gossip" },
    { component: <StageTimeMachine />, title: "The Rules" },
    { component: <StagePolice />, title: "Police Report" },
    { component: <StageRoleplay />, title: "Roleplay" },
  ];

  const nextStage = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setStage(p => Math.min(p + 1, stages.length - 1));
  };
  
  const prevStage = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setStage(p => Math.max(p - 1, 0));
  };

  const isLastStage = stage === stages.length - 1;

  return (
    <div className="min-h-screen transition-colors duration-300 bg-stone-50 dark:bg-stone-950 flex flex-col">
      
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-stone-900/80 backdrop-blur-md border-b border-stone-200 dark:border-stone-800 h-16">
        <div className="max-w-5xl mx-auto px-4 h-full flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-emerald-600 p-1.5 rounded-lg text-white">
              <BookOpen size={20} />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-sm font-bold text-stone-900 dark:text-stone-100">CELTA Lesson</h1>
              <p className="text-xs text-stone-500 dark:text-stone-400">Reported Speech (B1+)</p>
            </div>
          </div>
          <ThemeToggle isDark={isDark} toggle={() => setIsDark(!isDark)} />
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-24 pb-12 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          
          <ProgressBar current={stage} total={stages.length} />

          {/* Stage Title Wrapper */}
          <div className="text-center mb-8">
            <span className="inline-block py-1 px-3 rounded-full bg-stone-200 dark:bg-stone-800 text-xs font-bold uppercase tracking-widest text-stone-500 dark:text-stone-400">
              Phase {stage + 1} of {stages.length}
            </span>
          </div>

          {/* Animated Page Transition Wrapper */}
          <AnimatePresence mode="wait">
            <motion.div
              key={stage}
              initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -20, filter: 'blur(5px)' }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="w-full"
            >
              {stages[stage].component}
            </motion.div>
          </AnimatePresence>

        </div>
      </main>

      {/* Footer / Control Bar */}
      <div className="sticky bottom-0 left-0 right-0 bg-white dark:bg-stone-900 border-t border-stone-200 dark:border-stone-800 p-4 z-40">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <button 
            onClick={prevStage}
            disabled={stage === 0}
            className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all
              ${stage === 0 
                ? "opacity-0 pointer-events-none" 
                : "text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800"
              }`}
          >
            Back
          </button>

          <button 
            onClick={nextStage}
            disabled={isLastStage}
            className={`flex items-center gap-2 px-8 py-3 rounded-xl font-bold shadow-lg shadow-emerald-500/20 dark:shadow-emerald-900/40 transition-all active:scale-95
              ${isLastStage 
                ? "bg-stone-200 dark:bg-stone-800 text-stone-400 cursor-default" 
                : "bg-emerald-600 hover:bg-emerald-700 text-white"
              }`}
          >
            {isLastStage ? (
              <span className="flex items-center gap-2">Completed <CheckCircle size={18}/></span>
            ) : (
              <span className="flex items-center gap-2">Next Stage <ArrowRight size={18} /></span>
            )}
          </button>
        </div>
      </div>

    </div>
  );
}