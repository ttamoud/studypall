import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Lightbulb, CheckCircle2, AlertCircle, Clock, BarChart2, Calculator } from 'lucide-react';
import { Exercise, ExerciseStep } from '../types';
import { exercises } from '../data/exercises';
import { ExerciseCard } from './ExerciseCard';
import { colors } from '../styles/colors';
import { fadeIn, slideIn } from '../styles/animations';

interface ExerciseModeProps {
  subject: string;
  onBack: () => void;
}

export function ExerciseMode({ subject, onBack }: ExerciseModeProps) {
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [showHints, setShowHints] = useState(false);
  const [answer, setAnswer] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showCalculator, setShowCalculator] = useState(false);

  const subjectExercises = exercises[subject] || [];
  const currentStepData = selectedExercise?.steps[currentStep];

  const handleExerciseSelect = (exercise: Exercise) => {
    setSelectedExercise(exercise);
    setCurrentStep(0);
    setAnswer(null);
    setShowExplanation(false);
    setShowCalculator(false);
  };

  const handleSubmitAnswer = () => {
    if (!currentStepData || answer === null) return;

    const isAnswerCorrect = Number(answer) === currentStepData.expectedAnswer.value;
    setIsCorrect(isAnswerCorrect);
    setShowExplanation(true);
  };

  const handleNext = () => {
    if (!selectedExercise) return;

    if (currentStep < selectedExercise.steps.length - 1) {
      setCurrentStep(curr => curr + 1);
      setAnswer(null);
      setShowExplanation(false);
      setShowHints(false);
      setShowCalculator(false);
    }
  };

  const renderCalculationSteps = (calculation: NonNullable<ExerciseStep['expectedAnswer']['calculation']>) => {
    return (
      <div className="mt-4 p-4 bg-gray-50 rounded-lg">
        <h4 className="font-medium mb-2">Détail du calcul :</h4>
        <div className="space-y-3">
          {calculation.intermediateSteps?.map((step, index) => (
            <div key={index} className="flex flex-col">
              <span className="text-sm text-gray-600">{step.description}</span>
              <div className="flex items-center gap-2">
                <span className="font-mono bg-white px-2 py-1 rounded border">
                  {step.formula} = {step.result.toLocaleString('fr-FR')}€
                </span>
              </div>
            </div>
          ))}
          <div className="pt-2 border-t">
            <span className="font-medium">Résultat final : </span>
            <span className="font-mono bg-white px-2 py-1 rounded border">
              {calculation.result.toLocaleString('fr-FR')}€
            </span>
          </div>
        </div>
      </div>
    );
  };

  if (!selectedExercise) {
    return (
      <div className="min-h-screen py-12 px-4" style={{ backgroundColor: colors.background.primary }}>
        <div className="max-w-4xl mx-auto">
          <button
            onClick={onBack}
            className="mb-8 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Retour
          </button>

          <h1 className="text-3xl font-bold mb-8" style={{ color: colors.text.primary }}>
            Exercices Pratiques
          </h1>

          <div className="grid gap-6 md:grid-cols-2">
            {subjectExercises.map((exercise) => (
              <ExerciseCard
                key={exercise.id}
                exercise={exercise}
                onClick={() => handleExerciseSelect(exercise)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4" style={{ backgroundColor: colors.background.primary }}>
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => setSelectedExercise(null)}
          className="mb-8 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Retour aux exercices
        </button>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="p-8 border-b border-gray-100">
            <h2 className="text-2xl font-bold mb-2" style={{ color: colors.text.primary }}>
              {selectedExercise.title}
            </h2>
            <div className="flex items-center gap-4 text-sm" style={{ color: colors.text.secondary }}>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{selectedExercise.estimatedTime}</span>
              </div>
              <div className="flex items-center gap-1">
                <BarChart2 className="w-4 h-4" />
                <span>{selectedExercise.steps.length} étapes</span>
              </div>
            </div>
          </div>

          <div className="p-8 bg-gray-50">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-lg font-semibold mb-4" style={{ color: colors.text.primary }}>
                Contexte
              </h3>
              <div className="prose prose-gray max-w-none">
                <p className="text-base leading-relaxed mb-6" style={{ color: colors.text.primary }}>
                  {selectedExercise.context.background}
                </p>
                
                {selectedExercise.context.additionalInfo && (
                  <div className="mt-6">
                    <h4 className="text-md font-medium mb-3" style={{ color: colors.text.primary }}>
                      Informations complémentaires :
                    </h4>
                    <ul className="space-y-2 list-disc pl-5">
                      {selectedExercise.context.additionalInfo.map((info, index) => (
                        <li 
                          key={index}
                          className="text-base leading-relaxed"
                          style={{ color: colors.text.secondary }}
                        >
                          {info}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {currentStepData && (
            <motion.div
              key={currentStep}
              variants={slideIn}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white rounded-xl shadow-lg p-8 mt-6"
            >
              <div className="mb-8">
                <div className="text-sm mb-2" style={{ color: colors.text.secondary }}>
                  Question {currentStep + 1} sur {selectedExercise.steps.length}
                </div>
                <h3 className="text-xl font-semibold" style={{ color: colors.text.primary }}>
                  {currentStepData.question}
                </h3>
              </div>

              {currentStepData.tools?.calculator && (
                <div className="mb-6">
                  <button
                    onClick={() => setShowCalculator(!showCalculator)}
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <Calculator className="w-5 h-5" />
                    {showCalculator ? 'Masquer les valeurs et formules' : 'Afficher les valeurs et formules'}
                  </button>

                  {showCalculator && (
                    <motion.div
                      variants={fadeIn}
                      initial="hidden"
                      animate="visible"
                      className="mt-4 p-4 bg-gray-50 rounded-lg"
                    >
                      <h4 className="font-medium mb-2">Variables disponibles :</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {currentStepData.tools.variables?.map((variable) => (
                          <div key={variable} className="flex items-center gap-2">
                            <span className="font-mono">{variable}</span>
                            <span>=</span>
                            <span className="font-mono bg-white px-2 py-1 rounded border">
                              {selectedExercise?.calculations?.variables[variable].toLocaleString('fr-FR')}€
                            </span>
                          </div>
                        ))}
                      </div>

                      {currentStepData.tools.formulas && (
                        <div className="mt-4">
                          <h4 className="font-medium mb-2">Formules :</h4>
                          <div className="space-y-2">
                            {currentStepData.tools.formulas.map((formula, index) => (
                              <div key={index} className="font-mono bg-white px-2 py-1 rounded border">
                                {formula}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}
                </div>
              )}

              <div className="space-y-4">
                {currentStepData.expectedAnswer.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => setAnswer(index.toString())}
                    disabled={showExplanation}
                    className={`w-full p-4 rounded-lg text-left transition-all transform hover:-translate-y-1 
                      ${answer === index.toString()
                        ? showExplanation
                          ? index === currentStepData.expectedAnswer.value
                            ? 'bg-emerald-100 text-emerald-900'
                            : 'bg-rose-100 text-rose-900'
                          : 'bg-blue-100 text-blue-900'
                        : 'hover:bg-gray-100'
                      }`}
                  >
                    {option}
                  </button>
                ))}
              </div>

              {currentStepData.hints && (
                <div className="mb-6 mt-6">
                  <button
                    onClick={() => setShowHints(!showHints)}
                    className="flex items-center gap-2 text-amber-600 hover:text-amber-700 transition-colors"
                  >
                    <Lightbulb className="w-5 h-5" />
                    {showHints ? 'Masquer les indices' : 'Voir les indices'}
                  </button>
                  
                  {showHints && (
                    <motion.ul
                      variants={fadeIn}
                      initial="hidden"
                      animate="visible"
                      className="mt-4 space-y-2 text-amber-700 bg-amber-50 rounded-lg p-4"
                    >
                      {currentStepData.hints.map((hint, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Lightbulb className="w-5 h-5 flex-shrink-0 mt-0.5" />
                          <span>{hint}</span>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </div>
              )}

              {!showExplanation ? (
                <button
                  onClick={handleSubmitAnswer}
                  disabled={answer === null}
                  className="w-full py-3 px-6 rounded-lg bg-blue-600 text-white font-semibold mt-6
                    hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Valider la réponse
                </button>
              ) : (
                <motion.div
                  variants={fadeIn}
                  initial="hidden"
                  animate="visible"
                  className="space-y-6 mt-6"
                >
                  <div className={`p-4 rounded-lg flex items-start gap-3 
                    ${isCorrect ? 'bg-emerald-50 text-emerald-900' : 'bg-rose-50 text-rose-900'}`}
                  >
                    {isCorrect ? (
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    )}
                    <div>
                      <p className="font-medium mb-2">
                        {isCorrect ? 'Bonne réponse !' : 'Ce n\'est pas la bonne réponse.'}
                      </p>
                      <p className="text-sm">{currentStepData.expectedAnswer.explanation}</p>
                    </div>
                  </div>

                  {currentStepData.expectedAnswer.calculation && (
                    renderCalculationSteps(currentStepData.expectedAnswer.calculation)
                  )}

                  {currentStep < selectedExercise.steps.length - 1 && (
                    <button
                      onClick={handleNext}
                      className="w-full py-3 px-6 rounded-lg bg-blue-600 text-white font-semibold
                        hover:bg-blue-700 transition-colors"
                    >
                      Question suivante
                    </button>
                  )}
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
} 