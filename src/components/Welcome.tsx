import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { fadeIn } from '../styles/animations';

interface WelcomeProps {
  onStart: () => void;
}

export function Welcome({ onStart }: WelcomeProps) {
  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={fadeIn}
      className="min-h-screen bg-[#F5EFE6] flex items-center justify-center px-4"
    >
      <div className="max-w-2xl text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8 flex justify-center"
        >
          <GraduationCap className="h-24 w-24 text-[#D0B49F]" />
        </motion.div>
        
        <motion.h1 
          className="text-5xl font-bold text-[#4A4A4A] mb-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Bienvenue sur StudyPal
        </motion.h1>
        
        <motion.p 
          className="text-xl text-[#6B6B6B] mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Votre compagnon d'apprentissage intelligent pour maîtriser vos cours
        </motion.p>
        
        <motion.button
          onClick={onStart}
          className="bg-[#D0B49F] text-white px-8 py-4 rounded-lg text-lg font-semibold
                     hover:bg-[#B89F8D] transition-colors duration-300
                     shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Commencer l'apprentissage
        </motion.button>
      </div>
    </motion.div>
  );
}