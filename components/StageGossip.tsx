import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Ear, ChevronDown, PlayCircle } from 'lucide-react';
import { GOSSIP_DATA } from '../constants';

const StageGossip: React.FC = () => {
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});

  const toggleReveal = (idx: number) => {
    setRevealed(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <div className="flex flex-col h-full w-full max-w-6xl mx-auto space-y-6 overflow-y-auto p-2">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 shrink-0">
        <div className="flex items-center gap-4 text-emerald-600 dark:text-emerald-400">
          <div className="p-4 bg-emerald-100 dark:bg-emerald-900 rounded-full">
            <Ear size={32} />
          </div>
          <div>
             <h2 className="text-3xl font-bold uppercase tracking-widest">The Gossip</h2>
             <p className="text-sm text-stone-500 dark:text-stone-400">Listen & Report</p>
          </div>
        </div>
        
        <div className="bg-stone-100 dark:bg-stone-800 px-6 py-3 rounded-xl border-l-4 border-emerald-500 text-sm max-w-md">
           <strong>Context:</strong> You are hiding in the bushes. Listen to the conversation between Bilbo and Gandalf.
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 h-full min-h-0">
        {/* Video Column */}
        <div className="flex flex-col justify-center">
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
            <div className="mt-4 text-center">
                <p className="text-stone-500 dark:text-stone-400 italic flex items-center justify-center gap-2">
                    <PlayCircle size={16} />
                    Watch the clip, then reveal what they said.
                </p>
            </div>
        </div>

        {/* Text/Reporting Column */}
        <div className="overflow-y-auto space-y-3 pr-2 pb-20">
            {GOSSIP_DATA.map((item, idx) => (
            <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
                <button
                onClick={() => toggleReveal(idx)}
                className="w-full p-4 flex justify-between items-center text-left hover:bg-stone-50 dark:hover:bg-stone-800/50 transition-colors group"
                >
                <div className="flex-1 pr-4">
                    <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">{item.speaker} said:</span>
                    </div>
                    <p className="text-lg font-serif text-stone-800 dark:text-stone-200 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                        "{item.direct}"
                    </p>
                </div>
                <motion.div
                    animate={{ rotate: revealed[idx] ? 180 : 0 }}
                    className="text-stone-300 group-hover:text-emerald-500"
                >
                    <ChevronDown size={20} />
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
                    <div className="px-5 py-3">
                        <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase">
                            Reported:
                        </span>
                        </div>
                        <p className="text-base text-emerald-900 dark:text-emerald-100 font-medium mb-2">{item.reported}</p>
                        <p className="text-xs text-stone-500 dark:text-stone-400 font-mono border-t border-emerald-200 dark:border-emerald-800/50 pt-2 mt-2">
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
    </div>
  );
};

export default StageGossip;