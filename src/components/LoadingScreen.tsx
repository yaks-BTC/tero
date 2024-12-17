import React, { useState, useEffect } from 'react';
import { type } from '../utils/typewriter';
import { quotes } from '../data/quotes';
import { Skull } from 'lucide-react';

export default function LoadingScreen({ onLoadingComplete }: { onLoadingComplete: () => void }) {
  const [currentQuote, setCurrentQuote] = useState('');
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [glitchEffect, setGlitchEffect] = useState(false);
  
  useEffect(() => {
    let currentQuoteIndex = 0;
    
    const typeQuotes = async () => {
      while (loadingProgress < 100) {
        const quote = quotes[currentQuoteIndex % quotes.length];
        await type(quote, (text) => setCurrentQuote(text), 50);
        setGlitchEffect(true);
        await new Promise(resolve => setTimeout(resolve, 200));
        setGlitchEffect(false);
        await new Promise(resolve => setTimeout(resolve, 2000));
        currentQuoteIndex++;
        setLoadingProgress(prev => Math.min(prev + 15, 100));
      }
      setTimeout(onLoadingComplete, 1500);
    };
    
    typeQuotes();
  }, []);

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
      <div className="max-w-2xl px-6 text-center relative">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="scan-lines"></div>
          <div className="static-effect"></div>
        </div>
        
        <Skull className="w-16 h-16 text-red-600 mx-auto mb-8 animate-pulse" />
        
        <p className={`text-red-600 font-mono text-xl mb-12 min-h-[5rem] ${glitchEffect ? 'glitch' : ''}`}>
          {currentQuote}
        </p>
        
        <div className="relative w-full h-2 bg-gray-900 rounded-full overflow-hidden">
          <div className="loading-bar absolute top-0 left-0 h-full"
               style={{ width: `${loadingProgress}%` }} />
        </div>
        
        <div className="mt-4 flex items-center justify-center gap-2">
          <span className="text-red-600 font-mono">{loadingProgress}%</span>
          <span className="text-red-600 animate-pulse">▌</span>
        </div>
      </div>
    </div>
  );
}