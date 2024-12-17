import React from 'react';

interface NoiseDisplayProps {
  noise: string[];
}

export function NoiseDisplay({ noise }: NoiseDisplayProps) {
  return (
    <div className="terminal-content font-mono">
      {noise.map((line, i) => (
        <div key={i} className="opacity-60 text-sm leading-loose tracking-wide">
          {line.split('').map((char, j) => (
            <span 
              key={j}
              className={`${char === '1' ? 'text-green-500' : 'text-green-900'} 
                         ${Math.random() > 0.98 ? 'glitch' : ''}`}
            >
              {char}
            </span>
          ))}
        </div>
      ))}
      <div className="cursor text-green-500 mt-2">_</div>
    </div>
  );
}