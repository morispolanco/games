import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const InterstitialAd = ({ show, onClose }) => {
  const [timeLeft, setTimeLeft] = useState(5);

  useEffect(() => {
    let timer;
    if (show && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [show, timeLeft]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center p-4">
      <div className="absolute top-4 right-4 flex items-center gap-4">
        <span className="text-zinc-500 text-xs uppercase tracking-widest">Advertisement</span>
        {timeLeft > 0 ? (
          <span className="text-zinc-400 bg-zinc-900 px-3 py-1 rounded-sm text-sm">{timeLeft}s</span>
        ) : (
          <button 
            onClick={onClose}
            className="text-zinc-400 bg-zinc-800 hover:bg-zinc-700 p-2 rounded-sm transition-colors"
          >
            <X size={16} />
          </button>
        )}
      </div>
      
      <div className="w-full max-w-md aspect-video bg-zinc-900 border border-zinc-800 flex items-center justify-center relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80 z-10"></div>
        <div className="text-center z-20">
          <p className="text-amber-500 font-mono text-xl tracking-widest mb-2 font-bold">[ TRANSMISIÓN PATROCINADA ]</p>
          <p className="text-zinc-400 text-sm">Adquiriendo autorización temporal...</p>
        </div>
      </div>
    </div>
  );
};

export default InterstitialAd;
