import React from 'react';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  return (
    <div className="flex gap-1">
      {[...Array(total)].map((_, i) => (
        <motion.div
          key={i}
          initial={false}
          animate={{
            height: 6,
            width: current === i ? 24 : 6,
            opacity: i <= current ? 1 : 0.2,
            backgroundColor: i <= current ? '#10b981' : 'currentColor',
          }}
          className="rounded-full bg-stone-900 dark:bg-stone-100 transition-all duration-300"
        />
      ))}
    </div>
  );
};

export default ProgressBar;