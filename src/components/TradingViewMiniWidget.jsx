import { useEffect, useRef } from "react";

const TradingViewMiniWidget = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Remove existing script (to prevent duplicate widgets)
    containerRef.current.innerHTML = "";

    // Create script element
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";

    // Widget config
    script.innerHTML = JSON.stringify({
      symbol: "BSE:SENSEX",
      width: 350,
      height: 220,
      locale: "en",
      dateRange: "12M",
      colorTheme: "dark",
      isTransparent: false,
      autosize: false,
      largeChartUrl: "",
    });

    // Append script to the container
    containerRef.current.appendChild(script);
  }, []);

  return (
    <div className="tradingview-widget-container" ref={containerRef}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
        >
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
};

export default TradingViewMiniWidget;
