import React from 'react';

interface BlackHoleEffectProps {
  distortionLevel: number;
}

export function BlackHoleEffect({ distortionLevel }: BlackHoleEffectProps) {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div 
        className="relative w-64 h-64 rounded-full bg-black shadow-[0_0_100px_20px_rgba(0,0,0,0.9)]"
        style={{
          background: `radial-gradient(circle at center, 
            rgba(0,0,0,1) 0%, 
            rgba(20,0,30,0.8) 50%, 
            rgba(50,0,80,0.4) 70%, 
            transparent 100%)`
        }}
      >
        <div className="absolute inset-0 animate-spin-slow"
             style={{ animationDuration: `${20 - distortionLevel * 10}s` }}>
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-full h-0.5 bg-purple-500/20 origin-center"
              style={{
                transform: `rotate(${i * 30}deg) scaleX(${1 + distortionLevel * 0.5})`,
                filter: `blur(${distortionLevel * 2}px)`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}