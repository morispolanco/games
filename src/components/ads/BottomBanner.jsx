import React, { useEffect, useRef } from 'react';

const BottomBanner = () => {
  const adRef = useRef(null);

  useEffect(() => {
    // Inject Advertica script dynamically
    if (adRef.current && adRef.current.children.length === 0) {
      const script = document.createElement('script');
      script.src = "//data527.click/js/responsive.js";
      script.async = true;
      adRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className="w-full bg-black/40 flex items-center justify-center py-4 mt-8 backdrop-blur-sm overflow-hidden min-h-[250px] border-t border-zinc-800/50">
      <ins 
        ref={adRef}
        style={{ width: "300px", height: "250px", display: "block" }} 
        data-width="300" 
        data-height="250" 
        className="p851b94f3fb" 
        data-domain="//data527.click" 
        data-affquery="/f3a3eeffbd94bef5c446/851b94f3fb/?placementName=default"
      ></ins>
    </div>
  );
};

export default BottomBanner;
