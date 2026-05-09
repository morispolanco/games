import React, { useState, useEffect } from 'react';
import { generateStoryContent } from '../services/aiService';
import RewardedAd from '../components/ads/RewardedAd';
import { FileText, Key, RefreshCcw } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const Investigation = () => {
  const [loading, setLoading] = useState(true);
  const [documentContent, setDocumentContent] = useState('');
  const [userQuery, setUserQuery] = useState('');
  const [history, setHistory] = useState([]);
  const [showHintAd, setShowHintAd] = useState(false);

  useEffect(() => {
    initInvestigation();
  }, []);

  const initInvestigation = async () => {
    setLoading(true);
    const systemPrompt = "Eres el sistema operativo de 'Archivo Prohibido'. Inicia una nueva investigación generando un documento secreto interceptado (máximo 150 palabras). El documento debe contener un misterio, una pista críptica o una anomalía histórica. Usa un tono frío, burocrático y clasificado. Dale un título con número de expediente.";
    
    const content = await generateStoryContent("Generar expediente inicial.", systemPrompt);
    
    if (content) {
      setDocumentContent(content);
      setHistory([{ role: 'system', content }]);
    } else {
      setDocumentContent("ERROR DE CONEXIÓN AL ARCHIVO CENTRAL.");
    }
    setLoading(false);
  };

  const handleQuery = async (e) => {
    e.preventDefault();
    if (!userQuery.trim()) return;

    const newHistory = [...history, { role: 'user', content: userQuery }];
    setHistory(newHistory);
    setUserQuery('');
    setLoading(true);

    const systemPrompt = "Eres un analista de inteligencia guiando a un agente. Analiza la consulta del agente basada en el expediente actual. Responde con nueva información, confirmando o denegando sus sospechas, y ofrece una nueva pieza del rompecabezas. Mantén el tono misterioso. Formato: Markdown.";
    const fullPrompt = newHistory.map(h => `${h.role}: ${h.content}`).join('\n') + `\nAnalista:`;

    const response = await generateStoryContent(fullPrompt, systemPrompt);
    
    if (response) {
      setHistory([...newHistory, { role: 'system', content: response }]);
    }
    setLoading(false);
  };

  const handleHintReward = async () => {
    setLoading(true);
    setShowHintAd(false);
    
    const systemPrompt = "El usuario acaba de usar una herramienta de descifrado avanzada. Revélale una pista muy clara sobre el misterio actual que está investigando. Sé directo pero mantén el tono confidencial.";
    const fullPrompt = history.map(h => `${h.role}: ${h.content}`).join('\n') + `\nUsuario solicita pista clave.`;

    const response = await generateStoryContent(fullPrompt, systemPrompt);
    
    if (response) {
      setHistory([...history, { role: 'system', content: `[PISTA DESBLOQUEADA]\n${response}` }]);
    }
    setLoading(false);
  };

  return (
    <div className="flex-1 flex flex-col max-w-3xl w-full mx-auto animate-in fade-in">
      <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-6">
        <h1 className="text-xl font-bold flex items-center gap-2 uppercase tracking-widest text-zinc-400">
          <FileText size={20} />
          Terminal de Análisis
        </h1>
        <button onClick={initInvestigation} className="text-zinc-500 hover:text-zinc-300 transition-colors">
          <RefreshCcw size={18} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto mb-6 space-y-6 pr-2">
        {history.map((msg, idx) => (
          <div key={idx} className={`p-4 border ${msg.role === 'user' ? 'bg-zinc-900/40 border-zinc-700 ml-12 text-zinc-300' : 'bg-zinc-950/80 border-amber-900/30 text-amber-100/80 mr-12 shadow-[0_0_15px_rgba(120,53,15,0.1)] font-mono text-sm leading-relaxed'}`}>
            {msg.role === 'user' ? (
              <p>&gt; {msg.content}</p>
            ) : (
              <ReactMarkdown className="prose prose-invert prose-amber max-w-none prose-p:leading-relaxed prose-headings:text-amber-500">
                {msg.content}
              </ReactMarkdown>
            )}
          </div>
        ))}
        
        {loading && (
          <div className="p-4 text-amber-600/70 animate-pulse font-mono text-sm flex items-center gap-2">
            <span className="w-2 h-4 bg-amber-600/70 inline-block animate-bounce"></span>
            Procesando datos cifrados...
          </div>
        )}
      </div>

      <div className="bg-zinc-900/50 p-4 border border-zinc-800 flex flex-col gap-4">
        {!showHintAd ? (
          <div className="flex justify-between items-center text-xs text-zinc-500">
            <span>¿Bloqueado? Utiliza el desencriptador de señal.</span>
            <button 
              onClick={() => setShowHintAd(true)}
              className="flex items-center gap-1 text-amber-500 hover:text-amber-400 transition-colors"
            >
              <Key size={14} /> Desencriptar Pista
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-between bg-black/40 p-3 rounded border border-zinc-800">
            <span className="text-sm text-zinc-400">Desbloquear información confidencial:</span>
            <div className="flex gap-2">
              <button onClick={() => setShowHintAd(false)} className="px-3 py-1 text-zinc-500 hover:text-zinc-300 text-sm">Cancelar</button>
              <RewardedAd onReward={handleHintReward} text="Desencriptar" />
            </div>
          </div>
        )}

        <form onSubmit={handleQuery} className="flex gap-2 relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-600">&gt;</span>
          <input
            type="text"
            value={userQuery}
            onChange={(e) => setUserQuery(e.target.value)}
            disabled={loading}
            placeholder="Introduce un comando o pregunta..."
            className="flex-1 bg-black border border-zinc-700 text-zinc-300 pl-8 pr-4 py-3 focus:outline-none focus:border-amber-700 font-mono text-sm disabled:opacity-50 transition-colors"
          />
          <button 
            type="submit" 
            disabled={loading || !userQuery.trim()}
            className="bg-zinc-800 hover:bg-zinc-700 text-zinc-300 px-6 font-bold tracking-widest text-sm disabled:opacity-50 transition-colors"
          >
            ENVIAR
          </button>
        </form>
      </div>
    </div>
  );
};

export default Investigation;
