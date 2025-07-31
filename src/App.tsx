import React, { useState, useEffect } from 'react';
import IntroScreen from './components/IntroScreen';
import NewspaperStack from './components/NewspaperStack';
import BackgroundEffects from './components/BackgroundEffects';

export type AppState = 'intro' | 'newspapers';

function App() {
  const [currentState, setCurrentState] = useState<AppState>('intro');

  const handleIntroComplete = () => {
    setCurrentState('newspapers');
  };

  return (
    <div className="min-h-screen bg-black overflow-hidden relative">
      <BackgroundEffects />
      
      {currentState === 'intro' && (
        <IntroScreen onComplete={handleIntroComplete} />
      )}
      
      {currentState === 'newspapers' && (
        <NewspaperStack />
      )}
    </div>
  );
}

export default App;