import React, { useEffect, useRef } from 'react';

const TopBanner = () => {
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
    <div className="w-full bg-black/40 flex items-center justify-center sticky top-0 z-40 backdrop-blur-sm overflow-hidden min-h-[250px]">
      <ins 
        ref={adRef}
        style={{ width: "970px", height: "250px", display: "block" }}
        data-width="970" 
        data-height="250" 
        className="hf22e2a9e7a" 
        data-domain="//data527.click" 
        data-affquery="/0fc8c9c0e1f7ffaacf3d/f22e2a9e7a/?placementName=default"
      ></ins>
    </div>
  );
};

export default TopBanner;
