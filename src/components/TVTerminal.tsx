import React from 'react';
import { Tv } from 'lucide-react';
import { SignalIndicator } from './SignalIndicator';
import { TVFrame } from './TVFrame';
import { BlackHoleEffect } from './effects/BlackHoleEffect';
import { AlienTransmission } from './transmissions/AlienTransmission';
import { TVControls } from './TVControls';
import { useTransmissionState } from '../hooks/useTransmissionState';

export default function TVTerminal() {
  const { signalStrength, transmission, distortionLevel } = useTransmissionState();

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <SignalIndicator strength={signalStrength} />
      
      <TVFrame>
        <div className="relative w-full h-[600px] overflow-hidden">
          <BlackHoleEffect distortionLevel={distortionLevel} />
          <AlienTransmission transmission={transmission} />
        </div>
      </TVFrame>
      
      <TVControls />
    </div>
  );
}