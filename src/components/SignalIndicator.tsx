import React from 'react';
import { Signal, SignalLow, SignalMedium, SignalHigh } from 'lucide-react';

interface SignalIndicatorProps {
  strength: number;
}

export function SignalIndicator({ strength }: SignalIndicatorProps) {
  const getSignalIcon = () => {
    if (strength > 75) return <SignalHigh className="text-green-500" />;
    if (strength > 50) return <SignalMedium className="text-yellow-500" />;
    if (strength > 25) return <SignalLow className="text-red-500" />;
    return <Signal className="text-red-900" />;
  };

  return (
    <div className="absolute -top-8 right-0 flex items-center gap-2">
      <span className="text-gray-500 font-mono text-sm">Signal Strength</span>
      {getSignalIcon()}
    </div>
  );
}