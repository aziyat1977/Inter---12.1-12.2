import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Book, Clock, Shield, Users, Home, GraduationCap } from 'lucide-react';

interface NavigationMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onJumpTo: (index: number) => void;
  sections: { title: string; index: number; icon: React.ReactNode }[];
  currentIndex: number;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({ isOpen, onClose, onJumpTo, sections, currentIndex }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-stone-950/80 backdrop-blur-sm z-[60]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 left-0 bottom-0 w-full max-w-md bg-stone-100 dark:bg-stone-900 z-[70] shadow-2xl flex flex-col p-8 border-r border-stone-200 dark:border-stone-800"
          >
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl font-black text-stone-900 dark:text-white font-serif">Menu</h2>
              <button 
                onClick={onClose}
                className="p-2 rounded-full hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors"
              >
                <X size={32} />
              </button>
            </div>

            <nav className="flex-1 space-y-4">
              {sections.map((section, i) => (
                <motion.button
                  key={section.title}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => {
                    onJumpTo(section.index);
                    onClose();
                  }}
                  className={`w-full flex items-center gap-6 p-6 rounded-2xl transition-all duration-300 group
                    ${currentIndex >= section.index && (sections[i+1] ? currentIndex < sections[i+1].index : true)
                      ? 'bg-emerald-600 text-white shadow-lg scale-105' 
                      : 'hover:bg-stone-200 dark:hover:bg-stone-800 text-stone-600 dark:text-stone-400'
                    }`}
                >
                  <div className={`
                    p-3 rounded-xl transition-colors
                    ${currentIndex >= section.index && (sections[i+1] ? currentIndex < sections[i+1].index : true)
                      ? 'bg-emerald-500/30'
                      : 'bg-stone-300/50 dark:bg-stone-800'
                    }
                  `}>
                    {section.icon}
                  </div>
                  <span className="text-2xl font-bold tracking-tight">{section.title}</span>
                </motion.button>
              ))}
            </nav>

            <div className="mt-auto pt-8 border-t border-stone-200 dark:border-stone-800 text-center">
              <p className="text-stone-400 text-sm uppercase tracking-widest font-bold">The Unwanted Guest</p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default NavigationMenu;