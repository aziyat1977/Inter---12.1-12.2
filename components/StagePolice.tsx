import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, CheckCircle, XCircle } from 'lucide-react';
import { POLICE_DATA } from '../constants';

const StagePolice: React.FC = () => {
  const [inputs, setInputs] = useState<Record<number, string>>({});
  const [results, setResults] = useState<Record<number, boolean | null>>({});

  const checkAnswer = (idx: number, correct: string) => {
    const val = (inputs[idx] || "").trim().toLowerCase();
    const isCorrect = val === correct.toLowerCase();
    setResults(prev => ({ ...prev, [idx]: isCorrect }));
  };

  return (
    <div className="space-y-8">
      <div className="bg-stone-800 dark:bg-stone-900 text-stone-50 p-6 rounded-2xl flex items-center gap-5 shadow-xl">
        <div className="bg-blue-500/20 p-3 rounded-full">
           <Shield className="w-8 h-8 text-blue-400" />
        </div>
        <div>
          <h3 className="font-bold text-xl">Official Police Statement</h3>
          <p className="text-stone-400">Officer: "Mr. Baggins, write down EXACTLY what the wizard said. Do not lie."</p>
        </div>
      </div>

      <div className="bg-white dark:bg-stone-900/50 border border-stone-200 dark:border-stone-800 p-8 rounded-2xl shadow-sm space-y-8 font-mono">
        {POLICE_DATA.map((item, idx) => {
          const status = results[idx]; // null, true, or false
          
          return (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col lg:flex-row lg:items-center gap-4 pb-6 border-b border-stone-100 dark:border-stone-800 last:border-0 last:pb-0"
            >
              <div className="lg:w-1/3 text-stone-500 dark:text-stone-400 text-sm italic border-l-2 border-stone-300 pl-3">
                {item.prompt}
              </div>
              
              <div className="flex-1 flex flex-wrap items-center gap-3 text-stone-800 dark:text-stone-200 text-lg">
                <span>{item.start}</span>
                
                <div className="relative group">
                  <input 
                    type="text" 
                    className={`bg-transparent border-b-2 outline-none px-2 py-1 w-48 text-center font-bold transition-all
                      ${status === true 
                        ? "border-green-500 text-green-600 dark:text-green-400" 
                        : status === false 
                          ? "border-red-500 text-red-600 dark:text-red-400" 
                          : "border-stone-300 dark:border-stone-600 focus:border-emerald-500 dark:focus:border-emerald-400"
                      }`}
                    placeholder="..."
                    autoComplete="off"
                    value={inputs[idx] || ""}
                    onChange={(e) => {
                        setInputs({...inputs, [idx]: e.target.value});
                        if (status !== null) setResults({...results, [idx]: null}); // Reset status on edit
                    }}
                    onBlur={() => checkAnswer(idx, item.answer)}
                  />
                  
                  <AnimatePresence>
                    {status === true && (
                      <motion.div 
                        initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
                        className="absolute -right-8 top-1.5 text-green-500"
                      >
                        <CheckCircle size={20} />
                      </motion.div>
                    )}
                    {status === false && (
                      <motion.div 
                        initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
                        className="absolute -right-8 top-1.5 text-red-500"
                      >
                        <XCircle size={20} />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Hint on hover if wrong */}
                  {status === false && (
                    <div className="absolute top-full left-0 mt-2 bg-red-100 dark:bg-red-900/50 text-red-800 dark:text-red-200 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                      Hint: {item.answer.charAt(0)}...
                    </div>
                  )}
                </div>
                
                <span>{item.end}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default StagePolice;