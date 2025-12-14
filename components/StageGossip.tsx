import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Ear, ChevronDown } from 'lucide-react';
import { GOSSIP_DATA } from '../constants';

const StageGossip: React.FC = () => {
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});

  const toggleReveal = (idx: number) => {
    setRevealed(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <div className="space-y-8">
      <div className="bg-emerald-900/10 dark:bg-emerald-500/10 border border-emerald-900/20 dark:border-emerald-500/20 p-6 rounded-2xl flex flex-col md:flex-row items-center gap-6">
        <div className="p-4 bg-emerald-600 text-white rounded-full shrink-0">
          <Ear size={32} />
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-400">Mission: The Spy</h3>
          <p className="text-emerald-900/80 dark:text-emerald-200/80">
            You are hiding in the bushes. Listen to the conversation between Bilbo and Gandalf. Report back to your family exactly what happened.
          </p>
        </div>
      </div>

      {/* Video Player */}
      <div className="relative aspect-video bg-stone-900 rounded-2xl overflow-hidden shadow-2xl group border-4 border-stone-800 dark:border-stone-700">
        <iframe 
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/Q_cwRqXBR4Q" 
          title="The Hobbit - Good Morning Scene" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowFullScreen
        ></iframe>
      </div>

      <div className="space-y-4">
        {GOSSIP_DATA.map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <button
              onClick={() => toggleReveal(idx)}
              className="w-full p-5 flex justify-between items-center text-left hover:bg-stone-50 dark:hover:bg-stone-800/50 transition-colors"
            >
              <div className="flex-1 pr-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">{item.speaker} said:</span>
                </div>
                <p className="text-xl font-serif text-stone-800 dark:text-stone-200">"{item.direct}"</p>
              </div>
              <motion.div
                animate={{ rotate: revealed[idx] ? 180 : 0 }}
                className="text-stone-400"
              >
                <ChevronDown size={24} />
              </motion.div>
            </button>
            
            <AnimatePresence>
              {revealed[idx] && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="bg-emerald-50 dark:bg-emerald-900/20 border-t border-emerald-100 dark:border-emerald-900/30"
                >
                  <div className="px-5 py-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-200 text-emerald-800 dark:bg-emerald-800 dark:text-emerald-200 uppercase">
                        Reported Speech
                      </span>
                    </div>
                    <p className="text-lg text-emerald-900 dark:text-emerald-100 font-medium mb-2">{item.reported}</p>
                    <p className="text-xs text-stone-500 dark:text-stone-400 font-mono flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      Rule: {item.rule}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StageGossip;