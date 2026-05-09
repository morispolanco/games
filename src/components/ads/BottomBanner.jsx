import React, { useEffect, useRef } from 'react';

const BottomBanner = () => {
  const adRef = useRef(null);

  useEffect(() => {
    // Inject Advertica script dynamically with explicit protocol
    if (adRef.current && adRef.current.children.length === 0) {
      const script = document.createElement('script');
      script.src = "https://data527.click/js/responsive.js";
      script.async = true;
      adRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className="w-full bg-black/40 flex items-center justify-center py-8 mt-8 backdrop-blur-sm overflow-hidden min-h-[250px] border-t border-zinc-800/50">
      <div className="relative">
        <ins 
          ref={adRef}
          className="p851b94f3fb"
          style={{ 
            width: "300px", 
            height: "250px", 
            display: "block",
            maxWidth: "100%" 
          }} 
          data-width="300" 
          data-height="250" 
          data-domain="//data527.click" 
          data-affquery="/f3a3eeffbd94bef5c446/851b94f3fb/?placementName=default"
        ></ins>
        <div className="absolute inset-0 -z-10 flex items-center justify-center text-[10px] text-zinc-800 font-mono uppercase tracking-widest text-center px-4">
          Cargando Archivo Patrocinado...
        </div>
      </div>
    </div>
  );
};

export default BottomBanner;
