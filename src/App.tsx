import React, { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import TVTerminal from './components/TVTerminal';

function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="min-h-screen bg-black">
      {isLoading ? (
        <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
      ) : (
        <div className="min-h-screen bg-black flex items-center justify-center p-4">
          <TVTerminal />
        </div>
      )}
    </div>
  );
}

export default App;