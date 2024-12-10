// Subject and Mode Types
export type Subject = 'Fiscalité internationales des entreprise' | 'Audit interne' | 'Management de la performance';
export type StudyModeType = 'quiz' | 'chat' | 'exercise';

// Card Interfaces
export interface SubjectCard {
  id: Subject;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface StudyModeCard {
  id: StudyModeType;
  title: string;
  description: string;
  icon: string;
  color: string;
}

// Quiz Interface
export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanations: {
    [key: string]: string;
  };
}

// Exercise Interfaces
export interface Exercise {
  id: number;
  title: string;
  difficulty: 'easy' | 'medium' | 'hard';
  estimatedTime: string;
  context: {
    background: string;
    additionalInfo?: string[];
  };
  steps: ExerciseStep[];
  conclusion?: string;
  calculations?: {
    variables: { [key: string]: number };
    formulas: { [key: string]: string };
  };
}

export interface ExerciseStep {
  id: number;
  question: string;
  hints?: string[];
  expectedAnswer: {
    type: 'multiple_choice';
    options: string[];
    value: number;
    explanation: string;
    calculation?: {
      formula: string;
      variables: string[];
      result: number;
      intermediateSteps?: {
        description: string;
        formula: string;
        result: number;
      }[];
    };
  };
  tools?: {
    calculator?: boolean;
    formulas?: string[];
    references?: string[];
    variables?: string[];
  };
} 