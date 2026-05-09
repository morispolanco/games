import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FileLock2, ArrowLeft, Lock, CheckCircle } from 'lucide-react';
import RewardedAd from '../components/ads/RewardedAd';

const Archive = () => {
  const navigate = useNavigate();
  const [isAuthorized, setIsAuthorized] = useState(false);

  const cases = [
    { id: 'MK-ULTRA', status: 'desclasificado', title: 'Proyecto Control Mental', date: '1964' },
    { id: 'ZODIAC-8', status: 'clasificado', title: 'Mensaje No Resuelto', date: '1969' },
    { id: 'VOYNICH', status: 'clasificado', title: 'Manuscrito Ilegible', date: '1420' },
    { id: 'TUNGUSKA', status: isAuthorized ? 'desclasificado' : 'bloqueado', title: 'Evento Sísmico Anómalo', date: '1908' },
    { id: 'AREA-51', status: isAuthorized ? 'desclasificado' : 'bloqueado', title: 'Protocolo de Exclusión Aérea', date: '1955' },
  ];

  return (
    <div className="flex-1 flex flex-col w-full max-w-4xl mx-auto animate-in fade-in">
      <div className="flex items-center gap-4 border-b border-zinc-800 pb-4 mb-8">
        <button 
          onClick={() => navigate('/')}
          className="text-zinc-500 hover:text-zinc-300 transition-colors"
        >
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-2xl font-bold flex items-center gap-3 uppercase tracking-widest text-zinc-100">
          <FileLock2 size={28} className="text-amber-700" />
          Bóveda Central
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cases.map((c) => (
          <div 
            key={c.id} 
            className={`p-5 border flex flex-col gap-2 transition-all ${c.status === 'desclasificado' ? 'bg-zinc-900/60 border-zinc-700 hover:border-amber-500/50 cursor-pointer' : c.status === 'clasificado' ? 'bg-zinc-950 border-zinc-800/50 cursor-pointer hover:border-zinc-600' : 'bg-black border-zinc-900 opacity-50 cursor-not-allowed'}`}
          >
            <div className="flex justify-between items-start">
              <span className="text-xs font-mono text-zinc-500">{c.id}</span>
              <span className={`text-[10px] uppercase px-2 py-0.5 font-bold ${c.status === 'desclasificado' ? 'bg-green-900/30 text-green-500' : c.status === 'clasificado' ? 'bg-amber-900/30 text-amber-500' : 'bg-red-900/30 text-red-500'}`}>
                {c.status}
              </span>
            </div>
            <h3 className="text-lg font-bold text-zinc-200">{c.title}</h3>
            <div className="flex justify-between items-center mt-2">
              <span className="text-sm text-zinc-600">Origen: {c.date}</span>
              {c.status === 'bloqueado' && <Lock size={16} className="text-zinc-700" />}
              {c.status === 'desclasificado' && isAuthorized && (c.id === 'TUNGUSKA' || c.id === 'AREA-51') && <CheckCircle size={16} className="text-green-500" />}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 p-6 border border-zinc-800 bg-black/50 text-center flex flex-col items-center gap-4">
        {isAuthorized ? (
          <div className="flex flex-col items-center gap-2 animate-in zoom-in duration-500">
            <CheckCircle size={48} className="text-green-500 mb-2" />
            <h3 className="text-green-500 font-bold tracking-widest uppercase">Autorización Nivel 4 Concedida</h3>
            <p className="text-zinc-400 text-sm">Has desbloqueado expedientes previamente restringidos. El acceso será válido durante esta sesión.</p>
          </div>
        ) : (
          <>
            <Lock size={32} className="text-zinc-600 mb-2" />
            <h3 className="text-zinc-400 font-bold tracking-widest uppercase">Archivos Adicionales Restringidos</h3>
            <p className="text-zinc-500 text-sm max-w-md">Para acceder a más expedientes, requieres autorización nivel superior. Visualiza una transmisión para obtener credenciales temporales.</p>
            <div className="mt-2">
              <RewardedAd onReward={() => setIsAuthorized(true)} text="Solicitar Autorización" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Archive;
