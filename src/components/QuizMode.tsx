import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, AlertCircle } from 'lucide-react';
import { fadeIn } from '../styles/animations';
import { mockQuestions } from '../data/mockQuestions';
import { colors } from '../styles/colors';

interface QuizModeProps {
  subject: string;
  onBack: () => void;
}

export function QuizMode({ subject, onBack }: QuizModeProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const questions = mockQuestions[subject] || [];
  const currentQ = questions[currentQuestion];

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setShowExplanation(true);
    
    if (answerIndex === currentQ.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(curr => curr + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setShowResult(true);
    }
  };

  const getOptionLetter = (index: number) => String.fromCharCode(65 + index);

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.background.primary }}>
      <div className="max-w-4xl mx-auto py-12 px-4">
        <button
          onClick={onBack}
          className="mb-8 text-[#4A4A4A] hover:text-[#2A2A2A] transition-colors"
        >
          ← Retour
        </button>

        <AnimatePresence mode="wait">
          {!showResult ? (
            <motion.div
              key={currentQuestion}
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white rounded-xl shadow-xl p-8"
            >
              <div className="mb-8">
                <div className="text-sm mb-2" style={{ color: colors.text.secondary }}>
                  Question {currentQuestion + 1} sur {questions.length}
                </div>
                <h2 className="text-2xl font-semibold" style={{ color: colors.text.primary }}>
                  {currentQ.question}
                </h2>
              </div>

              <div className="space-y-4">
                {currentQ.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    disabled={selectedAnswer !== null}
                    className={`w-full p-4 rounded-lg text-left transition-all transform hover:-translate-y-1 
                      ${selectedAnswer === null 
                        ? 'hover:bg-[#E8DFD8]' 
                        : selectedAnswer === index
                          ? index === currentQ.correctAnswer
                            ? 'bg-[#9CB4AC] text-white'
                            : 'bg-[#E6B8B8] text-white'
                          : index === currentQ.correctAnswer
                            ? 'bg-[#9CB4AC] text-white'
                            : ''
                      }`}
                    style={{
                      backgroundColor: selectedAnswer === null ? colors.background.secondary : undefined
                    }}
                  >
                    <div className="flex items-center">
                      <span className="flex-grow">{option}</span>
                      {selectedAnswer !== null && index === currentQ.correctAnswer && (
                        <Check className="h-5 w-5 text-white" />
                      )}
                      {selectedAnswer === index && index !== currentQ.correctAnswer && (
                        <X className="h-5 w-5 text-white" />
                      )}
                    </div>
                  </button>
                ))}
              </div>

              {showExplanation && selectedAnswer !== null && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 p-4 rounded-lg"
                  style={{ 
                    backgroundColor: selectedAnswer === currentQ.correctAnswer ? '#F0F7F4' : '#FDF2F2',
                    border: `1px solid ${selectedAnswer === currentQ.correctAnswer ? '#9CB4AC' : '#E6B8B8'}`
                  }}
                >
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 mt-1 flex-shrink-0" style={{ 
                      color: selectedAnswer === currentQ.correctAnswer ? '#9CB4AC' : '#E6B8B8' 
                    }} />
                    <div>
                      <p className="font-medium mb-2" style={{ 
                        color: selectedAnswer === currentQ.correctAnswer ? '#2D3F38' : '#7F1D1D' 
                      }}>
                        {currentQ.explanations[getOptionLetter(selectedAnswer)]}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {selectedAnswer !== null && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-6 flex justify-end"
                >
                  <button
                    onClick={handleNext}
                    className="px-6 py-3 rounded-lg text-white transition-colors"
                    style={{ 
                      backgroundColor: colors.interactive.primary,
                      hover: { backgroundColor: colors.interactive.hover }
                    }}
                  >
                    {currentQuestion < questions.length - 1 ? 'Question suivante' : 'Voir les résultats'}
                  </button>
                </motion.div>
              )}
            </motion.div>
          ) : (
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="bg-white rounded-xl shadow-xl p-8 text-center"
            >
              <h2 className="text-3xl font-bold mb-4" style={{ color: colors.text.primary }}>
                Quiz terminé !
              </h2>
              <p className="text-xl mb-8" style={{ color: colors.text.secondary }}>
                Votre score : {score} sur {questions.length}
              </p>
              <button
                onClick={onBack}
                className="px-6 py-3 rounded-lg text-white transition-colors"
                style={{ 
                  backgroundColor: colors.interactive.primary,
                  hover: { backgroundColor: colors.interactive.hover }
                }}
              >
                Retour au menu
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}