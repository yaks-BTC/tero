import React from 'react';

interface AlienMessageProps {
  message: string;
  delay: number;
}

export function AlienMessage({ message, delay }: AlienMessageProps) {
  return (
    <div 
      className="alien-message"
      style={{
        animationDelay: `${delay}s`,
        opacity: 0
      }}
    >
      {message}
    </div>
  );
}