import React from 'react';
import { Subject, StudyModeType } from '../types';
import { studyModes, modeIcons } from '../data/studyModes';
import { colors } from '../styles/colors';

interface ModeSelectionProps {
  subject: Subject;
  onSelectMode: (mode: StudyModeType) => void;
  onBack: () => void;
}

export function ModeSelection({ subject, onSelectMode, onBack }: ModeSelectionProps) {
  console.log('Current subject:', subject);
  console.log('Is Management?', subject === 'Management de la performance');
  console.log('Raw subject:', JSON.stringify(subject));

  const filteredModes = studyModes.filter(mode => {
    // For both Audit interne and Management de la performance, only show quiz and exercise
    if (subject === 'Audit interne' || subject === 'Management de la performance') {
      const isQuizOrExercise = mode.id === 'quiz' || mode.id === 'exercise';
      console.log(`Mode ${mode.id} included? ${isQuizOrExercise}`);
      return isQuizOrExercise;
    }
    return true;
  });

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: colors.background.primary }}>
      <div className="max-w-4xl mx-auto">
        <button
          onClick={onBack}
          className="mb-8 flex items-center transition-colors"
          style={{ color: colors.text.primary }}
        >
          ← Retour aux matières
        </button>
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4" style={{ color: colors.text.primary }}>
            Choisissez Votre Mode d'Étude
          </h1>
          <p className="text-xl" style={{ color: colors.text.secondary }}>
            Matière sélectionnée : {subject}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredModes.map(({ id, title, description, icon }) => {
            const Icon = modeIcons[icon as keyof typeof modeIcons];
            return (
              <button
                key={id}
                onClick={() => onSelectMode(id)}
                className="relative overflow-hidden rounded-xl p-1 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{ 
                  background: `linear-gradient(to right, ${colors.interactive.primary}, ${colors.interactive.hover})`,
                }}
              >
                <div className="relative h-full rounded-lg bg-white p-6">
                  <div className="flex justify-center mb-4">
                    <Icon className="h-12 w-12" style={{ color: colors.text.primary }} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: colors.text.primary }}>
                    {title}
                  </h3>
                  <p style={{ color: colors.text.secondary }}>
                    {description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}