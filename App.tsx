import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Menu, Home, BookOpen, Clock, Shield, Users, RefreshCcw } from 'lucide-react';
import ThemeToggle from './components/ThemeToggle';
import ProgressBar from './components/ProgressBar';
import LandingPage from './components/LandingPage';
import NavigationMenu from './components/NavigationMenu';

import { LeadInIntro, VocabCard, VocabQuiz, SpeakingPrompt } from './components/StageLeadIn';
import { RuleIntro, TimelineView, MistakeView } from './components/StageTimeMachine';
import { PoliceIntro, PoliceQuestion } from './components/StagePolice';
import { RoleplayIntro, RoleCard, TeacherTip } from './components/StageRoleplay';

import { VOCAB_DATA, POLICE_DATA, ROLES } from './constants';

// --- ANIMATION VARIANTS (200% Impact) ---
const pageVariants = {
  initial: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    scale: 0.5,
    opacity: 0,
    rotateY: direction > 0 ? 45 : -45,
    zIndex: 0
  }),
  animate: {
    x: 0,
    scale: 1,
    opacity: 1,
    rotateY: 0,
    zIndex: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      mass: 1,
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  },
  exit: (direction: number) => ({
    x: direction < 0 ? '100%' : '-100%',
    scale: 0.5,
    opacity: 0,
    rotateY: direction < 0 ? 45 : -45,
    zIndex: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20
    }
  })
};

const contentVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { type: "spring", stiffness: 50 }
  }
};

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [policeAnswers, setPoliceAnswers] = useState<Record<number, string>>({});

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  // --- CONTENT MAPPING ---
  // We wrap content in a motion.div to ensure internal stagger effects work
  const wrap = (Component: React.ReactNode) => (
    <motion.div 
      variants={contentVariants} 
      initial="hidden" 
      animate="visible"
      className="w-full h-full"
    >
      {Component}
    </motion.div>
  );

  // Generate Vocab Slides (Card -> Quiz 1 -> Quiz 2 -> Speaking 1 -> Speaking 2 -> Speaking 3)
  const vocabSlides = VOCAB_DATA.flatMap((item, i) => [
    { id: `vocab-card-${i}`, content: wrap(<VocabCard item={item} />) },
    { id: `vocab-quiz-${i}-1`, content: wrap(<VocabQuiz quiz={item.quizzes[0]} />) },
    { id: `vocab-quiz-${i}-2`, content: wrap(<VocabQuiz quiz={item.quizzes[1]} />) },
    { id: `vocab-speak-${i}-1`, content: wrap(<SpeakingPrompt question={item.speakingQuestions[0]} />) },
    { id: `vocab-speak-${i}-2`, content: wrap(<SpeakingPrompt question={item.speakingQuestions[1]} />) },
    { id: `vocab-speak-${i}-3`, content: wrap(<SpeakingPrompt question={item.speakingQuestions[2]} />) },
  ]);

  const slides = [
    { id: 'landing', content: <LandingPage /> }, // 0
    { id: 'leadin-intro', content: wrap(<LeadInIntro />) }, // 1
    ...vocabSlides, // 2 to 19 (3 words * 6 slides each = 18 slides)
    { id: 'rules-intro', content: wrap(<RuleIntro />) }, // 20
    { id: 'rules-timeline', content: wrap(<TimelineView />) }, // 21
    { id: 'rules-mistake', content: wrap(<MistakeView />) }, // 22
    { id: 'police-intro', content: wrap(<PoliceIntro />) }, // 23
    ...POLICE_DATA.map((item, i) => ({
      id: `police-${i}`,
      content: wrap(
        <PoliceQuestion 
          item={item} 
          value={policeAnswers[i] || ''}
          onChange={(val) => setPoliceAnswers(prev => ({ ...prev, [i]: val }))}
        />
      )
    })),
    { id: 'role-intro', content: wrap(<RoleplayIntro />) }, // 30
    ...ROLES.map((role, i) => ({ id: `role-${i}`, content: wrap(<RoleCard role={role} />) })),
    { id: 'role-tip', content: wrap(<TeacherTip />) }
  ];

  // --- MENU SECTIONS ---
  // Recalculated indices based on the expanded vocab section
  const sections = [
    { title: 'Home', index: 0, icon: <Home size={24} /> },
    { title: 'Lead In', index: 1, icon: <BookOpen size={24} /> },
    { title: 'Vocabulary', index: 2, icon: <BookOpen size={24} /> },
    { title: 'The Rules', index: 20, icon: <Clock size={24} /> },
    { title: 'Police Report', index: 23, icon: <Shield size={24} /> },
    { title: 'Roleplay', index: 30, icon: <Users size={24} /> },
  ];

  const changeSlide = (newIndex: number) => {
    setDirection(newIndex > currentSlide ? 1 : -1);
    setCurrentSlide(newIndex);
  };

  const nextSlide = () => changeSlide(Math.min(currentSlide + 1, slides.length - 1));
  const prevSlide = () => changeSlide(Math.max(currentSlide - 1, 0));

  return (
    <div className="h-screen w-full bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 transition-colors duration-500 overflow-hidden flex flex-col font-sans perspective-1000">
      
      {/* Top Bar */}
      <header className="absolute top-0 left-0 right-0 p-6 z-50 flex justify-between items-center pointer-events-none">
        <div className="pointer-events-auto flex items-center gap-4">
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="p-3 bg-stone-200 dark:bg-stone-800 rounded-full hover:scale-110 transition-transform shadow-lg"
          >
            <Menu size={24} />
          </button>
          <div className="hidden md:block">
            <ProgressBar current={currentSlide} total={slides.length} />
          </div>
        </div>
        <div className="pointer-events-auto">
           <ThemeToggle isDark={isDark} toggle={() => setIsDark(!isDark)} />
        </div>
      </header>

      <NavigationMenu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)}
        onJumpTo={(idx) => changeSlide(idx)}
        sections={sections}
        currentIndex={currentSlide}
      />

      {/* Main Slide Stage */}
      <main className="flex-1 relative flex items-center justify-center p-6 md:p-12 perspective-[2000px]">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute inset-0 p-6 md:p-12 flex flex-col justify-center items-center w-full h-full backface-hidden"
          >
            {slides[currentSlide].content}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer Navigation */}
      <footer className="absolute bottom-0 left-0 right-0 p-8 z-40 flex justify-between items-end pointer-events-none">
        <button 
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={`pointer-events-auto p-4 rounded-full transition-all duration-300 transform hover:scale-110 active:scale-95
            ${currentSlide === 0 ? 'opacity-0 translate-y-10' : 'bg-stone-200/50 dark:bg-stone-800/50 hover:bg-stone-300 dark:hover:bg-stone-700 backdrop-blur-sm shadow-xl'}`}
        >
          <ArrowLeft size={32} />
        </button>

        {currentSlide !== 0 && (
          <div className="text-center text-xs font-black uppercase tracking-[0.3em] opacity-30 pb-4">
            {currentSlide} / {slides.length - 1}
          </div>
        )}

        <button 
          onClick={currentSlide === slides.length - 1 ? () => changeSlide(0) : nextSlide}
          className="pointer-events-auto p-6 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-2xl hover:scale-110 active:scale-90 transition-all duration-300 group"
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