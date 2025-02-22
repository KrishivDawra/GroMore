import React, { useEffect, useRef, memo } from "react";

const News = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Delay script execution to ensure the component is mounted
    const timeoutId = setTimeout(() => {
      containerRef.current.innerHTML = ""; // Clear any previous widget instances

      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = JSON.stringify({
        feedMode: "all_symbols",
        isTransparent: false,
        displayMode: "regular",
        width: "910",
        height: "610",
        colorTheme: "dark",
        locale: "en",
      });

      containerRef.current.appendChild(script);
    }, 500); // 👈 Adding a slight delay to ensure React has mounted the component

    return () => {
      clearTimeout(timeoutId);
      containerRef.current.innerHTML = ""; // Cleanup
    };
  }, []);

  return (
    <div 
      className="tradingview-widget-container flex pt-10 justify-center items-center ml-[100px] w-screen h-screen" 
      ref={containerRef}
    >
      <div className="tradingview-widget-container__widget w-full h-full"></div>
      <div className="tradingview-widget-copyright absolute bottom-2">
        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
};

export default memo(News);
