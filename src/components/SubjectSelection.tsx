import React from 'react';
import { ArrowRight, Calculator, BookOpen, PieChart } from 'lucide-react';
import { Subject } from '../types';
import { subjects } from '../data/subjects';
import { colors } from '../styles/colors';

const IconComponent = {
  Calculator,
  BookOpen,
  PieChart
};

interface SubjectSelectionProps {
  onSelectSubject: (subject: Subject) => void;
}

export function SubjectSelection({ onSelectSubject }: SubjectSelectionProps) {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: colors.background.primary }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4" style={{ color: colors.text.primary }}>
            Bienvenue sur StudyPal
          </h1>
          <p className="text-xl" style={{ color: colors.text.secondary }}>
            Choisissez votre matière pour commencer votre parcours d'apprentissage
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {subjects.map((subject) => {
            const Icon = IconComponent[subject.icon as keyof typeof IconComponent];
            return (
              <button
                key={subject.id}
                onClick={() => onSelectSubject(subject.id)}
                className="relative overflow-hidden rounded-xl p-1 transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{ 
                  background: `linear-gradient(to right, ${colors.interactive.primary}, ${colors.interactive.hover})`,
                }}
              >
                <div className="relative h-full rounded-lg bg-white p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Icon className="h-8 w-8" style={{ color: colors.text.primary }} />
                    <ArrowRight className="h-5 w-5" style={{ color: colors.text.secondary }} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: colors.text.primary }}>
                    {subject.title}
                  </h3>
                  <p style={{ color: colors.text.secondary }}>
                    {subject.description}
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