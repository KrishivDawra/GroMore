import React, { useEffect, useRef } from "react";

const TradingViewMiniWidget2 = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Clear existing content inside the container to prevent duplication
    containerRef.current.innerHTML = "";

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbol: "BSE:BSE100",
      width: 350,
      height: 220,
      locale: "en",
      dateRange: "12M",
      colorTheme: "dark",
      isTransparent: false,
      autosize: false,
      largeChartUrl: "",
    });

    containerRef.current.appendChild(script);
  }, []);

  return (
    <div className="tradingview-widget-container" ref={containerRef}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
};

export default TradingViewMiniWidget2;
