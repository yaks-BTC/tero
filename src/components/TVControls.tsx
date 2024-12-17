import React from 'react';
import { Volume2, Power, Settings } from 'lucide-react';

export function TVControls() {
  return (
    <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex items-center gap-6">
      <button className="tv-button">
        <Power className="w-6 h-6 text-red-500 hover:text-red-400 transition-colors" />
      </button>
      <button className="tv-button">
        <Volume2 className="w-6 h-6 text-gray-400 hover:text-gray-300 transition-colors" />
      </button>
      <button className="tv-button">
        <Settings className="w-6 h-6 text-gray-400 hover:text-gray-300 transition-colors animate-spin-slow" />
      </button>
    </div>
  );
}