import { Brain, MessageSquare, Dumbbell } from 'lucide-react';
import { StudyModeCard } from '../types';

export const studyModes: StudyModeCard[] = [
  {
    id: 'quiz',
    title: 'Mode Quiz',
    description: 'Testez vos connaissances avec des quiz interactifs',
    icon: 'Brain',
    color: 'from-pink-500 to-rose-500'
  },
  {
    id: 'chat',
    title: 'Mode Discussion',
    description: 'Apprenez à travers des conversations interactives',
    icon: 'MessageSquare',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    id: 'exercise',
    title: 'Mode Exercices',
    description: 'Appliquez vos connaissances avec des exercices pratiques',
    icon: 'Dumbbell',
    color: 'from-amber-500 to-orange-500'
  }
];

export const modeIcons = {
  Brain,
  MessageSquare,
  Dumbbell
};