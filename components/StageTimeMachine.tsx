import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ArrowLeft, AlertTriangle } from 'lucide-react';

const StageTimeMachine: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-16 h-16 bg-stone-900 dark:bg-stone-100 rounded-2xl rotate-3 mx-auto flex items-center justify-center text-stone-100 dark:text-stone-900 mb-4 shadow-xl"
        >
          <Clock size={32} />
        </motion.div>
        <h2 className="text-3xl font-bold text-stone-900 dark:text-stone-50">The Backshift Rule</h2>
        <p className="text-stone-600 dark:text-stone-400 max-w-lg mx-auto">
          English grammar is dramatic. When we report what someone said in the past, we must step back in time.
        </p>
      </div>

      <div className="relative bg-stone-900 dark:bg-black rounded-3xl p-8 md:p-12 overflow-hidden shadow-2xl border border-stone-800">
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-20" 
             style={{ backgroundImage: 'linear-gradient(stone 1px, transparent 1px), linear-gradient(90deg, stone 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>

        {/* Timeline Line */}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-stone-700/50 -translate-y-1/2 z-0"></div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center items-center">
          
          {/* Past Perfect */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-3 opacity-60"
          >
            <h3 className="text-stone-400 text-xs font-bold uppercase tracking-[0.2em]">Deep Past</h3>
            <div className="bg-stone-800/80 backdrop-blur border border-stone-700 p-4 rounded-xl">
              <span className="block text-stone-300 font-serif text-lg">Past Perfect</span>
              <span className="text-stone-500 text-sm">had done</span>
            </div>
          </motion.div>

          {/* Past Simple (Target) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="space-y-4"
          >
             <div className="flex justify-center items-center gap-2 text-emerald-400 font-bold uppercase text-xs tracking-widest">
               <ArrowLeft size={14} /> One Step Back
             </div>
            <div className="bg-emerald-600 p-6 rounded-2xl border-4 border-emerald-500/30 text-white shadow-[0_0_30px_rgba(16,185,129,0.3)] transform scale-105">
              <span className="block font-serif text-2xl font-bold">Past Simple</span>
              <span className="text-emerald-100 text-sm mt-1 block">did / was / knew</span>
            </div>
          </motion.div>

          {/* Present Simple (Source) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-3 opacity-60"
          >
            <h3 className="text-stone-400 text-xs font-bold uppercase tracking-[0.2em]">The Present</h3>
            <div className="bg-stone-800/80 backdrop-blur border border-stone-700 p-4 rounded-xl">
              <span className="block text-stone-300 font-serif text-lg">Present Simple</span>
              <span className="text-stone-500 text-sm">do / is / know</span>
            </div>
          </motion.div>

        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-2xl border border-red-100 dark:border-red-900/50 flex gap-4">
          <AlertTriangle className="text-red-500 shrink-0" />
          <div>
            <h4 className="font-bold text-red-800 dark:text-red-300 mb-1">Common Mistake</h4>
            <p className="text-red-700/80 dark:text-red-400/80 text-sm">
              "He said he <span className="underline decoration-wavy decoration-red-400">is</span> looking."
            </p>
            <p className="text-xs text-red-600/60 dark:text-red-500/60 mt-2">Do not keep the tense the same.</p>
          </div>
        </div>
        
        <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-2xl border border-emerald-100 dark:border-emerald-900/50 flex gap-4">
          <Clock className="text-emerald-500 shrink-0" />
          <div>
            <h4 className="font-bold text-emerald-800 dark:text-emerald-300 mb-1">Correct Usage</h4>
            <p className="text-emerald-700/80 dark:text-emerald-400/80 text-sm">
              "He said he <span className="font-bold bg-emerald-200 dark:bg-emerald-800 px-1 rounded">was</span> looking."
            </p>
            <p className="text-xs text-emerald-600/60 dark:text-emerald-500/60 mt-2">Move the verb one step into the past.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StageTimeMachine;