import React from 'react';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  value: number;
  max: number;
  label: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ value, max, label }) => {
  const percentage = (value / max) * 100;

  return (
    <div className="w-full">
      <div className="flex justify-between mb-2">
        <span className="text-gray-600 font-poppins">{label}</span>
        <span className="text-green-600 font-poppins">{percentage.toFixed(0)}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-4">
        <motion.div
          className="bg-green-600 h-4 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1 }}
        />
      </div>
    </div>
  );
};