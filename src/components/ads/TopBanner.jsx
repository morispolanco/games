import React, { useEffect, useRef } from 'react';

const TopBanner = () => {
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
    <div className="w-full bg-black/60 flex items-center justify-center sticky top-0 z-40 backdrop-blur-md border-b border-zinc-800/50 overflow-hidden min-h-[250px]">
      <div className="relative w-full max-w-[970px] flex justify-center">
        <ins 
          ref={adRef}
          className="hf22e2a9e7a"
          style={{ 
            width: "970px", 
            height: "250px", 
            display: "block",
            margin: "0 auto",
            maxWidth: "100%"
          }}
          data-width="970" 
          data-height="250" 
          data-domain="//data527.click" 
          data-affquery="/0fc8c9c0e1f7ffaacf3d/f22e2a9e7a/?placementName=default"
        ></ins>
        {/* Helper message for developer if ad is blocked */}
        <div className="absolute inset-0 -z-10 flex items-center justify-center text-[10px] text-zinc-800 font-mono uppercase tracking-widest">
          Transmisión Encriptada... (Si no carga, verifica tu AdBlocker)
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
