import React, { useState, useEffect } from 'react';
import { IntentCapture } from './pages/IntentCapture';
import { DesignSystem } from './pages/DesignSystem';
import { ClarifyingQuestions } from './pages/ClarifyingQuestions';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', onLocationChange);
    return () => window.removeEventListener('popstate', onLocationChange);
  }, []);

  return (
    <div className="w-full h-screen">
      {currentPath === '/design-system' ? (
        <DesignSystem />
      ) : currentPath === '/clarifying-questions' ? (
        <ClarifyingQuestions />
      ) : (
        <IntentCapture />
      )}
    </div>
  );
}

export default App;
