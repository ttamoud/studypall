import React from 'react';
import { motion } from 'framer-motion';
import { Clock, BarChart2 } from 'lucide-react';
import { Exercise } from '../types';
import { fadeIn } from '../styles/animations';
import { colors } from '../styles/colors';

interface ExerciseCardProps {
  exercise: Exercise;
  onClick: () => void;
}

export function ExerciseCard({ exercise, onClick }: ExerciseCardProps) {
  const getDifficultyColor = (difficulty: Exercise['difficulty']) => {
    switch (difficulty) {
      case 'easy':
        return 'bg-emerald-100 text-emerald-800';
      case 'medium':
        return 'bg-amber-100 text-amber-800';
      case 'hard':
        return 'bg-rose-100 text-rose-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <motion.button
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="w-full text-left"
    >
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-semibold" style={{ color: colors.text.primary }}>
              {exercise.title}
            </h3>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(exercise.difficulty)}`}>
              {exercise.difficulty.charAt(0).toUpperCase() + exercise.difficulty.slice(1)}
            </span>
          </div>
          
          <p className="mb-4 line-clamp-2" style={{ color: colors.text.secondary }}>
            {exercise.context.background}
          </p>
          
          <div className="flex items-center gap-4" style={{ color: colors.text.secondary }}>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span className="text-sm">{exercise.estimatedTime}</span>
            </div>
            <div className="flex items-center gap-1">
              <BarChart2 className="w-4 h-4" />
              <span className="text-sm">{exercise.steps.length} étapes</span>
            </div>
          </div>
        </div>
      </div>
    </motion.button>
  );
} 