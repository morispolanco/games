import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FileLock2, ArrowLeft, Lock } from 'lucide-react';

const cases = [
  { id: 'MK-ULTRA', status: 'desclasificado', title: 'Proyecto Control Mental', date: '1964' },
  { id: 'ZODIAC-8', status: 'clasificado', title: 'Mensaje No Resuelto', date: '1969' },
  { id: 'VOYNICH', status: 'clasificado', title: 'Manuscrito Ilegible', date: '1420' },
  { id: 'TUNGUSKA', status: 'bloqueado', title: 'Evento Sísmico Anómalo', date: '1908' },
];

const Archive = () => {
  const navigate = useNavigate();

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
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 p-6 border border-zinc-800 bg-black/50 text-center flex flex-col items-center gap-4">
        <Lock size={32} className="text-zinc-600 mb-2" />
        <h3 className="text-zinc-400 font-bold tracking-widest uppercase">Archivos Adicionales Restringidos</h3>
        <p className="text-zinc-500 text-sm max-w-md">Para acceder a más expedientes, requieres autorización nivel superior. Visualiza una transmisión para obtener credenciales temporales.</p>
        <button className="bg-amber-900/30 hover:bg-amber-900/50 border border-amber-800/50 text-amber-500 px-6 py-2 text-sm uppercase tracking-widest font-bold mt-2 transition-colors">
          Solicitar Autorización
        </button>
      </div>
    </div>
  );
};

export default Archive;
