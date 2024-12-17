import { useState, useEffect } from 'react';
import { generateAlienMessage } from '../utils/alienMessageGenerator';

export function useTransmissionState() {
  const [signalStrength, setSignalStrength] = useState(0);
  const [transmission, setTransmission] = useState('');
  const [distortionLevel, setDistortionLevel] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const newStrength = Math.random() * 100;
      setSignalStrength(newStrength);
      setDistortionLevel(1 - (newStrength / 100));

      if (newStrength > 30) {
        setTransmission(generateAlienMessage());
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return { signalStrength, transmission, distortionLevel };
}