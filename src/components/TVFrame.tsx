import React from 'react';
import { TVAntenna } from './TVAntenna';
import { ScreenEffects } from './effects/ScreenEffects';

export function TVFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-900 p-8 rounded-lg shadow-2xl border-t-8 border-gray-800 relative">
      <TVAntenna />
      
      <div className="bg-black p-6 rounded-lg relative overflow-hidden tv-screen">
        <ScreenEffects />
        {children}
      </div>
    </div>
  );
}