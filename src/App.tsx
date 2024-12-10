import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Welcome } from './components/Welcome';
import { SubjectSelection } from './components/SubjectSelection';
import { ModeSelection } from './components/ModeSelection';
import { QuizMode } from './components/QuizMode';
import { ChatMode } from './components/ChatMode';
import { ExerciseMode } from './components/ExerciseMode';
import { Subject, StudyModeType } from './types';

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [selectedMode, setSelectedMode] = useState<StudyModeType | null>(null);

  const handleStart = () => {
    setShowWelcome(false);
  };

  const handleReset = () => {
    setSelectedSubject(null);
    setSelectedMode(null);
  };

  if (showWelcome) {
    return <Welcome onStart={handleStart} />;
  }

  if (!selectedSubject) {
    return <SubjectSelection onSelectSubject={setSelectedSubject} />;
  }

  if (!selectedMode) {
    return (
      <ModeSelection
        subject={selectedSubject}
        onSelectMode={setSelectedMode}
        onBack={handleReset}
      />
    );
  }

  switch (selectedMode) {
    case 'quiz':
      return <QuizMode subject={selectedSubject} onBack={() => setSelectedMode(null)} />;
    case 'chat':
      return <ChatMode subject={selectedSubject} onBack={() => setSelectedMode(null)} />;
    case 'exercise':
      return <ExerciseMode subject={selectedSubject} onBack={() => setSelectedMode(null)} />;
    default:
      return null;
  }
}

export default App;