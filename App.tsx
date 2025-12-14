import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, RefreshCcw } from 'lucide-react';
import ThemeToggle from './components/ThemeToggle';
import ProgressBar from './components/ProgressBar';

import { LeadInIntro, VocabCard } from './components/StageLeadIn';
import { RuleIntro, TimelineView, MistakeView } from './components/StageTimeMachine';
import { PoliceIntro, PoliceQuestion } from './components/StagePolice';
import { RoleplayIntro, RoleCard, TeacherTip } from './components/StageRoleplay';

import { VOCAB_DATA, POLICE_DATA, ROLES } from './constants';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDark, setIsDark] = useState(false);
  
  // Lifted state for Police section so answers persist during navigation
  const [policeAnswers, setPoliceAnswers] = useState<Record<number, string>>({});

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  // --- BUILD SLIDES ---
  const slides = [
    // Lead In
    { id: 'leadin-intro', content: <LeadInIntro /> },
    ...VOCAB_DATA.map((item, i) => ({ 
      id: `vocab-${i}`, content: <VocabCard item={item} /> 
    })),
    
    // Time Machine
    { id: 'rules-intro', content: <RuleIntro /> },
    { id: 'rules-timeline', content: <TimelineView /> },
    { id: 'rules-mistake', content: <MistakeView /> },

    // Police
    { id: 'police-intro', content: <PoliceIntro /> },
    ...POLICE_DATA.map((item, i) => ({
      id: `police-${i}`,
      content: (
        <PoliceQuestion 
          item={item} 
          value={policeAnswers[i] || ''}
          onChange={(val) => setPoliceAnswers(prev => ({ ...prev, [i]: val }))}
        />
      )
    })),

    // Roleplay
    { id: 'role-intro', content: <RoleplayIntro /> },
    ...ROLES.map((role, i) => ({
      id: `role-${i}`, content: <RoleCard role={role} />
    })),
    { id: 'role-tip', content: <TeacherTip /> }
  ];

  const nextSlide = () => setCurrentSlide(prev => Math.min(prev + 1, slides.length - 1));
  const prevSlide = () => setCurrentSlide(prev => Math.max(prev - 1, 0));

  return (
    <div className="h-screen w-full bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 transition-colors duration-500 overflow-hidden flex flex-col font-sans">
      
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 p-6 z-50 flex justify-between items-center pointer-events-none">
        <div className="pointer-events-auto">
          <ProgressBar current={currentSlide} total={slides.length} />
        </div>
        <div className="pointer-events-auto">
           <ThemeToggle isDark={isDark} toggle={() => setIsDark(!isDark)} />
        </div>
      </header>

      {/* Main Slide Area */}
      <main className="flex-1 relative flex items-center justify-center p-6 md:p-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -100, scale: 1.05 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-full flex flex-col justify-center"
          >
            {slides[currentSlide].content}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Navigation Controls */}
      <footer className="absolute bottom-0 left-0 right-0 p-8 z-50 flex justify-between items-end pointer-events-none">
        <button 
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={`pointer-events-auto p-4 rounded-full transition-all duration-300
            ${currentSlide === 0 ? 'opacity-0 translate-y-10' : 'bg-stone-200/50 dark:bg-stone-800/50 hover:bg-stone-300 dark:hover:bg-stone-700 backdrop-blur-sm shadow-lg'}`}
        >
          <ArrowLeft size={32} />
        </button>

        <div className="text-center text-sm font-bold uppercase tracking-widest opacity-30 pb-2">
          {currentSlide + 1} / {slides.length}
        </div>

        <button 
          onClick={currentSlide === slides.length - 1 ? () => setCurrentSlide(0) : nextSlide}
          className="pointer-events-auto p-6 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group"
        >
          {currentSlide === slides.length - 1 ? (
            <RefreshCcw size={40} className="group-hover:rotate-180 transition-transform duration-500" />
          ) : (
            <ArrowRight size={40} />
          )}
        </button>
      </footer>
    </div>
  );
}