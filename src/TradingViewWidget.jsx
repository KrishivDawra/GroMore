import { div } from 'framer-motion/client';
import React, { useEffect, useRef, memo } from 'react';

const TradingViewWidget = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // **Clear previous script to prevent duplicates**
    containerRef.current.innerHTML = '';

    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = JSON.stringify({
      width: "980",
      height: "610",
      symbol: "BSE:ZOMATO",
      interval: "D",
      timezone: "Asia/Kolkata",
      theme: "dark",
      style: "1",
      locale: "en",
      allow_symbol_change: true,
      watchlist: [
        "BSE:ZOMATO",
        "BSE:KOTAKBANK",
        "BSE:ONGC",
        "BSE:NHPC",
        "NSE:RELIANCE",
        "BSE:ADANIPOWER"
      ],
      calendar: false,
      support_host: "https://www.tradingview.com",
    });

    containerRef.current.appendChild(script);

    return () => {

      // **Cleanup on unmount to prevent duplicates**
      containerRef.current.innerHTML = '';
    };
  }, []);

  return (
    <div className='flex justify-center pt-10 '>
    <div className="tradingview-widget-container" ref={containerRef}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
    </div>
  );
};

export default memo(TradingViewWidget);
