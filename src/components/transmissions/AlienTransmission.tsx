import React, { useEffect, useState } from 'react';
import { AlienMessage } from './AlienMessage';
import { useAlienLanguage } from '../../hooks/useAlienLanguage';

interface AlienTransmissionProps {
  transmission: string;
}

export function AlienTransmission({ transmission }: AlienTransmissionProps) {
  const { translateToAlien } = useAlienLanguage();
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    if (transmission) {
      setMessages(prev => [...prev, translateToAlien(transmission)].slice(-5));
    }
  }, [transmission]);

  return (
    <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
      {messages.map((msg, i) => (
        <AlienMessage key={i} message={msg} delay={i * 0.2} />
      ))}
    </div>
  );
}