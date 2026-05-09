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
    <div className="w-full bg-black/60 flex items-center justify-center sticky top-0 z-40 backdrop-blur-md border-b border-zinc-800/50 overflow-hidden min-h-[90px]">
      <div className="relative w-full max-w-[728px] flex justify-center">
        <ins 
          ref={adRef}
          className="r2d3a079c17"
          style={{ 
            width: "728px", 
            height: "90px", 
            display: "block",
            margin: "0 auto",
            maxWidth: "100%"
          }}
          data-width="728" 
          data-height="90" 
          data-domain="//data527.click" 
          data-affquery="/bf8d1785e8103a9813c3/2d3a079c17/?placementName=default"
        ></ins>
        {/* Helper message for developer if ad is blocked */}
        <div className="absolute inset-0 -z-10 flex items-center justify-center text-[10px] text-zinc-800 font-mono uppercase tracking-widest">
          Transmisión Encriptada...
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
