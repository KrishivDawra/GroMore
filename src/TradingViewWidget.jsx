import React, { useEffect, useRef, memo } from "react";

function TradingViewWidget() {
  const container = useRef(null);

  useEffect(() => {
    // Clear previous widget if it exists
    if (container.current) {
      container.current.innerHTML = ""; // This ensures only one widget is added
    }

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "autosize": true,
        "symbol": "NASDAQ:AAPL",
        "interval": "3",
        "timezone": "Etc/UTC",
        "theme": "dark",
        "style": "1",
        "locale": "en",
        "allow_symbol_change": true,
        "calendar": false,
        "support_host": "https://www.tradingview.com"
      }`;

    container.current.appendChild(script);
  }, []);

  return (
    <div
  className="tradingview-widget-container flex justify-center items-center p-15"
  ref={container}
  style={{ 
    height: "50vh", // Half of the page height
    width: "100%",
    marginTop: "70px" // Push below header
  }}
>
  <div className="tradingview-widget-container__widget w-full h-full"></div>
  <div className="tradingview-widget-copyright absolute bottom-2 right-2">
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
}

export default memo(TradingViewWidget);
