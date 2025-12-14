import React from 'react';
import { motion } from 'framer-motion';
import { Users, User, Glasses, Mic, HelpCircle } from 'lucide-react';
import { ROLES } from '../constants';

const icons = {
  sales: User,
  host: Glasses,
  spy: Mic
};

const StageRoleplay: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-stone-900 dark:text-stone-50 mb-4">Final Challenge: The Salesman</h2>
        <p className="text-stone-600 dark:text-stone-400">Get into groups of 3. Choose your character.</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        {ROLES.map((role, idx) => {
          const Icon = icons[role.iconType];
          return (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-stone-900 p-8 rounded-3xl border border-stone-200 dark:border-stone-800 shadow-xl flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 bg-stone-100 dark:bg-stone-800 rounded-2xl flex items-center justify-center mb-6 text-stone-700 dark:text-stone-300 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900/50 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors duration-300">
                <Icon size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-stone-900 dark:text-stone-50">{role.title}</h3>
              <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed">{role.desc}</p>
            </motion.div>
          );
        })}
      </div>

      <div className="max-w-2xl mx-auto bg-amber-50 dark:bg-amber-900/20 p-6 rounded-2xl border border-amber-200 dark:border-amber-900/40 flex gap-4 items-start">
        <HelpCircle className="text-amber-600 dark:text-amber-400 shrink-0 mt-1" />
        <div>
          <h4 className="font-bold text-amber-900 dark:text-amber-200 mb-2">Teacher's Tip</h4>
          <p className="text-amber-800 dark:text-amber-300/80 text-sm">
            Rotate roles every 3 minutes. <br/>
            The <strong>Spy</strong> must report back to the class using the target language: <br/>
            <span className="font-mono bg-amber-100 dark:bg-amber-900/50 px-1 rounded mt-1 inline-block">"He asked if..."</span> and <span className="font-mono bg-amber-100 dark:bg-amber-900/50 px-1 rounded mt-1 inline-block">"He said he would..."</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StageRoleplay;