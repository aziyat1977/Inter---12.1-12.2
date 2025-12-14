import React from 'react';
import { User, Glasses, Mic, HelpCircle, Users } from 'lucide-react';
import { RoleItem } from '../types';
import { motion } from 'framer-motion';

const icons = {
  sales: User,
  host: Glasses,
  spy: Mic
};

export const RoleplayIntro: React.FC = () => (
  <div className="flex flex-col items-center justify-center h-full text-center space-y-12">
    <div className="p-10 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full">
      <Users size={100} />
    </div>
    <h1 className="text-6xl md:text-8xl font-black text-stone-900 dark:text-white font-serif">
      Final Challenge
    </h1>
    <p className="text-4xl md:text-6xl text-stone-600 dark:text-stone-300 font-medium">
      Get into groups of 3.
    </p>
  </div>
);

export const RoleCard: React.FC<{ role: RoleItem }> = ({ role }) => {
  const Icon = icons[role.iconType];
  return (
    <div className="flex flex-col items-center justify-center h-full text-center space-y-10 max-w-4xl mx-auto">
      <div className="p-8 bg-stone-100 dark:bg-stone-800 rounded-3xl shadow-xl">
        <Icon size={80} className="text-stone-800 dark:text-stone-200" />
      </div>
      <h2 className="text-6xl md:text-8xl font-bold text-stone-900 dark:text-white font-serif">
        {role.title}
      </h2>
      <div className="bg-white dark:bg-stone-900 p-10 rounded-3xl border-2 border-stone-200 dark:border-stone-700 shadow-2xl">
        <p className="text-3xl md:text-5xl text-stone-600 dark:text-stone-300 leading-relaxed">
          {role.desc}
        </p>
      </div>
    </div>
  );
};

export const TeacherTip: React.FC = () => (
  <div className="flex flex-col items-center justify-center h-full text-center space-y-12 max-w-5xl mx-auto">
    <div className="flex items-center gap-6 text-amber-600 dark:text-amber-400">
      <HelpCircle size={80} />
      <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-widest">Teacher's Tip</h2>
    </div>
    
    <div className="bg-amber-50 dark:bg-amber-900/20 p-12 rounded-[3rem] border-4 border-amber-200 dark:border-amber-800 space-y-8">
      <p className="text-3xl md:text-5xl text-stone-800 dark:text-amber-100 leading-relaxed">
        The <strong className="text-amber-700 dark:text-amber-400">Spy</strong> must report back using:
      </p>
      <div className="flex flex-col gap-6">
        <div className="bg-white dark:bg-stone-900 p-6 rounded-2xl shadow-lg transform -rotate-1">
          <code className="text-4xl md:text-6xl font-mono text-emerald-600 dark:text-emerald-400 font-bold">"He asked if..."</code>
        </div>
        <div className="bg-white dark:bg-stone-900 p-6 rounded-2xl shadow-lg transform rotate-1">
          <code className="text-4xl md:text-6xl font-mono text-emerald-600 dark:text-emerald-400 font-bold">"He said he would..."</code>
        </div>
      </div>
    </div>
  </div>
);