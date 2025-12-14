import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, ArrowRight, BookOpen, Brain, PenTool, Check, X } from 'lucide-react';
import { QuizCategory, MasterTestQuestion, GapFillItem } from '../types';

export const QuizIntro: React.FC<{ category: QuizCategory }> = ({ category }) => (
  <div className="flex flex-col items-center justify-center h-full text-center space-y-12 max-w-5xl mx-auto">
    <div className="flex items-center gap-4 text-emerald-600 dark:text-emerald-400 opacity-80">
      <BookOpen size={48} />
      <span className="text-2xl font-bold uppercase tracking-widest">Master Practice</span>
    </div>

    <h2 className="text-6xl md:text-8xl font-black text-stone-900 dark:text-white font-serif leading-tight">
      {category.title}
    </h2>

    <div className="bg-stone-100 dark:bg-stone-800 p-8 rounded-3xl w-full text-left space-y-6 shadow-xl border-l-8 border-emerald-500">
      <div className="space-y-2">
        <p className="text-stone-500 dark:text-stone-400 font-bold uppercase tracking-widest text-sm">Context</p>
        <p className="text-3xl font-bold text-stone-900 dark:text-stone-100">"{category.context}"</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 pt-4">
        <div>
           <p className="text-stone-500 dark:text-stone-400 font-bold uppercase tracking-widest text-sm mb-2">Rule</p>
           <p className="text-xl text-emerald-700 dark:text-emerald-400 font-bold">{category.grammarInfo.rule}</p>
           <p className="text-lg text-stone-600 dark:text-stone-300 font-mono mt-1">{category.grammarInfo.form}</p>
        </div>
        <div>
           <p className="text-stone-500 dark:text-stone-400 font-bold uppercase tracking-widest text-sm mb-2">Example</p>
           <div className="space-y-1 text-lg">
             <p className="text-stone-500">"{category.grammarInfo.exampleDirect}"</p>
             <p className="font-bold text-emerald-600 dark:text-emerald-400">→ {category.grammarInfo.exampleReported}</p>
           </div>
        </div>
      </div>
    </div>
  </div>
);

export const MasterTestRunner: React.FC<{ questions: MasterTestQuestion[], title: string }> = ({ questions, title }) => {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [isFinished, setIsFinished] = useState(false);

  const question = questions[currentQ];
  const isCorrect = selected === question?.answer;

  const handleSelect = (opt: string) => {
    if (selected) return;
    setSelected(opt);
    if (opt === question.answer) setScore(s => s + 1);
  };

  const next = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(c => c + 1);
      setSelected(null);
    } else {
      setIsFinished(true);
    }
  };

  if (isFinished) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center space-y-8">
        <div className="p-8 bg-emerald-100 dark:bg-emerald-900 rounded-full text-emerald-700 dark:text-emerald-300 mb-4">
          <Brain size={80} />
        </div>
        <h2 className="text-6xl font-black text-stone-900 dark:text-white">Test Complete!</h2>
        <p className="text-4xl text-stone-600 dark:text-stone-300">
          You scored <span className="font-bold text-emerald-600">{score}</span> / {questions.length}
        </p>
        <button 
          onClick={() => { setIsFinished(false); setCurrentQ(0); setScore(0); setSelected(null); }}
          className="px-8 py-4 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full max-w-5xl mx-auto w-full justify-center">
      <div className="flex justify-between items-end mb-8 border-b-2 border-stone-200 dark:border-stone-800 pb-4">
        <div>
          <h3 className="text-2xl font-bold text-stone-400 uppercase tracking-widest mb-1">{title}</h3>
          <p className="text-sm text-stone-500">Select the correct reported form.</p>
        </div>
        <div className="text-4xl font-black text-emerald-600 dark:text-emerald-400">
          {currentQ + 1}<span className="text-xl text-stone-400 font-medium">/{questions.length}</span>
        </div>
      </div>

      <div className="bg-white dark:bg-stone-900 p-8 md:p-12 rounded-[3rem] shadow-2xl mb-8 min-h-[200px] flex items-center justify-center text-center">
        <p className="text-3xl md:text-4xl font-serif text-stone-800 dark:text-stone-100 font-medium leading-relaxed">
          {question.question.split('_____').map((part, i, arr) => (
            <React.Fragment key={i}>
              {part}
              {i < arr.length - 1 && (
                <span className={`inline-block px-4 py-1 mx-2 min-w-[100px] border-b-4 text-center font-bold transition-colors
                  ${selected 
                    ? (isCorrect ? 'border-emerald-500 text-emerald-600 bg-emerald-50 dark:bg-emerald-900/30' : 'border-red-500 text-red-600 bg-red-50 dark:bg-red-900/30')
                    : 'border-stone-300 bg-stone-100 dark:bg-stone-800'
                  }`}>
                  {selected || "____"}
                </span>
              )}
            </React.Fragment>
          ))}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {question.options.map((opt) => (
          <button
            key={opt}
            onClick={() => handleSelect(opt)}
            disabled={!!selected}
            className={`p-6 text-xl font-bold rounded-2xl border-2 transition-all duration-200 text-left flex justify-between items-center
              ${selected === opt
                ? (opt === question.answer ? 'bg-emerald-600 border-emerald-600 text-white' : 'bg-red-500 border-red-500 text-white')
                : selected && opt === question.answer
                  ? 'bg-emerald-100 dark:bg-emerald-900/30 border-emerald-500 text-emerald-700 dark:text-emerald-300' // Show correct answer if wrong selected
                  : 'bg-stone-50 dark:bg-stone-800 border-stone-200 dark:border-stone-700 hover:border-emerald-400 dark:hover:border-emerald-500 hover:shadow-md'
              }
            `}
          >
            {opt}
            {selected === opt && (opt === question.answer ? <CheckCircle /> : <XCircle />)}
          </button>
        ))}
      </div>

      <div className="h-16 flex justify-end">
        <AnimatePresence>
          {selected && (
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={next}
              className="px-8 py-3 bg-stone-900 dark:bg-white text-white dark:text-stone-900 rounded-xl font-bold hover:scale-105 transition-transform flex items-center gap-2 shadow-xl"
            >
              {currentQ < questions.length - 1 ? "Next Question" : "Finish Test"} <ArrowRight size={20} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export const GapFillSession: React.FC<{ title: string, items: GapFillItem[] }> = ({ title, items }) => {
  const [inputs, setInputs] = useState<Record<number, string>>({});
  const [results, setResults] = useState<Record<number, boolean | null>>({});

  const check = (idx: number) => {
    const correct = items[idx].answer.toLowerCase().replace(/\s+/g, ' ').trim();
    const userVal = (inputs[idx] || "").toLowerCase().replace(/\s+/g, ' ').trim();
    setResults(prev => ({ ...prev, [idx]: userVal === correct }));
  };

  return (
    <div className="flex flex-col h-full w-full max-w-5xl mx-auto space-y-8">
       <div className="flex items-center gap-4 text-emerald-600 dark:text-emerald-400 opacity-80 mb-4">
        <PenTool size={32} />
        <span className="text-xl font-bold uppercase tracking-widest">{title}</span>
      </div>

      <div className="space-y-6 overflow-y-auto max-h-[60vh] pr-4">
        {items.map((item, i) => (
          <div key={i} className="bg-white dark:bg-stone-900 p-6 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-sm flex flex-col md:flex-row md:items-center gap-4">
             <div className="md:w-1/3 text-stone-500 dark:text-stone-400 text-sm font-serif italic border-l-4 border-stone-300 pl-3">
               "{item.direct}"
             </div>
             
             <div className="flex-1 flex flex-wrap items-center gap-2 text-lg md:text-xl font-medium text-stone-800 dark:text-stone-200">
               <span>{item.start}</span>
               
               <div className="relative group">
                 <input 
                    type="text" 
                    value={inputs[i] || ""}
                    onChange={(e) => {
                      setInputs(prev => ({...prev, [i]: e.target.value}));
                      setResults(prev => ({...prev, [i]: null}));
                    }}
                    onBlur={() => check(i)}
                    onKeyDown={(e) => e.key === 'Enter' && check(i)}
                    className={`min-w-[120px] max-w-[200px] border-b-2 bg-transparent text-center px-1 font-bold outline-none transition-colors
                      ${results[i] === true 
                        ? 'border-emerald-500 text-emerald-600' 
                        : results[i] === false 
                          ? 'border-red-500 text-red-600' 
                          : 'border-stone-300 dark:border-stone-600 focus:border-emerald-500'}`}
                 />
                  {results[i] === true && <div className="absolute -right-6 top-1 text-emerald-500"><Check size={20}/></div>}
                  {results[i] === false && (
                    <div className="absolute z-10 top-full left-0 mt-2 bg-red-100 text-red-800 text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap">
                      Answer: {item.answer}
                    </div>
                  )}
               </div>

               <span>{item.end || "."}</span>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};