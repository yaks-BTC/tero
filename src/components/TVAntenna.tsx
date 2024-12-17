import React from 'react';

export function TVAntenna() {
  return (
    <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
      <div className="w-1 h-20 bg-gray-700 relative">
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-700 rotate-45"></div>
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-700 -rotate-45"></div>
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gray-700 rotate-45"></div>
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gray-700 -rotate-45"></div>
      </div>
    </div>
  );
}