import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FolderLock, Terminal, ScanSearch } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-1 flex flex-col items-center justify-center space-y-12 animate-in fade-in duration-1000">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-zinc-100 mb-2 uppercase drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
          Archivo <span className="text-amber-700">Prohibido</span>
        </h1>
        <p className="text-zinc-500 max-w-lg mx-auto text-sm md:text-base typewriter-cursor">
          &gt; ACCESO A SISTEMA CENTRAL INICIADO... ESPERANDO CREDENCIALES.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
        <button 
          onClick={() => navigate('/archive')}
          className="group relative flex flex-col items-center p-6 bg-zinc-900/50 border border-zinc-800 hover:border-amber-700/50 hover:bg-zinc-800/50 transition-all duration-300"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <FolderLock size={48} strokeWidth={1} className="text-zinc-400 group-hover:text-amber-500 mb-4 transition-colors" />
          <h2 className="text-lg font-bold text-zinc-200 tracking-widest mb-2 uppercase">Expedientes</h2>
          <p className="text-xs text-zinc-500 text-center">Revisar casos clasificados y documentos desclasificados.</p>
        </button>

        <button 
          onClick={() => navigate('/investigation/new')}
          className="group relative flex flex-col items-center p-6 bg-zinc-900/50 border border-zinc-800 hover:border-blue-700/50 hover:bg-zinc-800/50 transition-all duration-300"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <ScanSearch size={48} strokeWidth={1} className="text-zinc-400 group-hover:text-blue-500 mb-4 transition-colors" />
          <h2 className="text-lg font-bold text-zinc-200 tracking-widest mb-2 uppercase">Nueva Investigación</h2>
          <p className="text-xs text-zinc-500 text-center">Generar una nueva conexión a la red neuronal profunda.</p>
        </button>
      </div>
      
      <div className="text-xs text-zinc-600 font-mono text-center mt-12 border-t border-zinc-800/50 pt-4 w-full max-w-sm">
        <p>CONEXIÓN SEGURA ESTABLECIDA</p>
        <p>NIVEL DE AUTORIZACIÓN: RESTRINGIDO</p>
      </div>
    </div>
  );
};

export default Home;
