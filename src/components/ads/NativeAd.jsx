import React from 'react';
import { ExternalLink } from 'lucide-react';

const NativeAd = ({ title = "Suministros Tácticos", description = "Equipamiento clasificado para agentes de campo. Nivel de acceso requerido: 0.", cta = "Inspeccionar", url = "#" }) => {
  return (
    <a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full border border-dashed border-zinc-700 bg-zinc-900/30 p-4 hover:border-amber-700/50 hover:bg-zinc-900/50 transition-all group my-6"
    >
      <div className="flex justify-between items-start mb-2">
        <span className="text-[10px] text-amber-600/70 uppercase tracking-widest font-mono">Archivo Patrocinado</span>
        <ExternalLink size={14} className="text-zinc-600 group-hover:text-amber-500 transition-colors" />
      </div>
      <div className="flex gap-4 items-center">
        <div className="w-16 h-16 bg-zinc-950 border border-zinc-800 flex items-center justify-center text-xs text-zinc-600 flex-shrink-0">
          IMG_REC
        </div>
        <div>
          <h4 className="text-zinc-200 font-bold mb-1 group-hover:text-amber-400 transition-colors">{title}</h4>
          <p className="text-zinc-500 text-xs mb-2 leading-relaxed">{description}</p>
          <span className="text-xs text-amber-500 font-mono group-hover:underline">> {cta}</span>
        </div>
      </div>
    </a>
  );
};

export default NativeAd;
