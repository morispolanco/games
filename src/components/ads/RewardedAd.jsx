import React, { useState } from 'react';
import { Play, X } from 'lucide-react';

const RewardedAd = ({ onReward, onClose, text = "Watch to Unlock" }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
    // Simulate ad playback
    setTimeout(() => {
      setIsPlaying(false);
      onReward();
    }, 3000);
  };

  return (
    <>
      <button 
        onClick={handlePlay}
        className="flex items-center gap-2 bg-amber-900/40 hover:bg-amber-900/60 border border-amber-700/50 text-amber-200 px-4 py-2 rounded-sm transition-all"
      >
        <Play size={16} />
        <span className="font-mono text-sm tracking-widest">{text}</span>
      </button>

      {isPlaying && (
        <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center">
          <div className="absolute top-4 right-4 text-zinc-500 text-xs">Advertisement</div>
          <div className="w-16 h-16 border-4 border-amber-600 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-zinc-400 font-mono animate-pulse">Decrypting secure channel...</p>
        </div>
      )}
    </>
  );
};

export default RewardedAd;
