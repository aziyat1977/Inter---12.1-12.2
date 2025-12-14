import React from 'react';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  return (
    <div className="flex items-center justify-center space-x-2 mb-8">
      {[...Array(total)].map((_, i) => (
        <motion.div
          key={i}
          initial={false}
          animate={{
            height: current === i ? 8 : 8,
            width: current === i ? 40 : 12,
            opacity: i <= current ? 1 : 0.3,
            backgroundColor: i <= current ? '#10b981' : '#78716c', // emerald-500 vs stone-500
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="rounded-full"
        />
      ))}
    </div>
  );
};

export default ProgressBar;