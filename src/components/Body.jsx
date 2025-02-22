import React from 'react';
import DecryptedText from './DecryptedText';
import RollingGallery from './RollingGallery';
import { motion } from "framer-motion";
import TradingViewMiniWidget from './TradingViewMiniWidget';
import TradingViewMiniWidget2 from './TradingViewMiniWidget2';
import TradingViewMiniWidget3 from './TradingViewMiniWidget3';
import TradingViewHotlist from './TradingViewHotlist';
import TradingViewWidgetGlobal from './TradingViewWidgetGlobal';
import TradingViewWidgetSlider from './TradingViewWidgetSlider';

const images = ["m1.png", "m2.png", "m3.png", "m4.png"];

const stockData = [
  { name: "Nifty", value: "22,975.90", change: "-117.25", img: "c1.png" },
  { name: "SENSEX", value: "75,311.06", change: "-107.05", img: "c2.png" },
  { name: "BANKNIFTY", value: "48,981.20", change: "-353.35", img: "c3.png" },
];

const sections = [
  { name: "Terminal", img: "candel.png" },
  { name: "Events", img: "calender.jpeg" },
  { name: "Intraday", img: "intradat.jpeg" },
  { name: "IPO", img: "IPO.jpeg" },
  { name: "Screener", img: "screner.jpeg" },
];

const Body = () => {
  // 6 Images for Market Insights & RollingGallery
  const marketImages = [
    "/src/assets/marketin1.png",
    "/src/assets/marketin2.jpg",
    "/src/assets/marketin3.jpg",
    "/src/assets/marketin4.jpg",
    "/src/assets/marketin5.jpg",
    "/src/assets/marketin6.jpg",
  ];

  return (
    <div>
      {/* ✅ Hero Section */}
      <div className="h-screen bg-[url('/src/assets/hero.jpg')] bg-cover bg-center flex justify-between items-center px-20">
        <div className="flex flex-col items-left justify-center h-full">
          <div>
            <DecryptedText 
              text="Gro"
              speed={100} 
              maxIterations={2} 
              sequential={true} 
              className="text-6xl font-bold font-serif text-red-500" 
              encryptedClassName="text-gray-400" 
              animateOn="load"
            />
            <DecryptedText 
              text="More"
              speed={100} 
              maxIterations={2} 
              sequential={true} 
              className="text-6xl font-bold font-serif text-white" 
              encryptedClassName="text-gray-400" 
              animateOn="load"
            />
          </div>

          <div className='flex flex-col'>
            <DecryptedText 
              text="Invest wisely for long-term success,"
              speed={100} 
              maxIterations={6} 
              sequential={true} 
              className="text-2xl font-bold text-white" 
              encryptedClassName="text-gray-400" 
              animateOn="load"
            />
            <DecryptedText 
              text="Secure your financial future"
              speed={100} 
              maxIterations={10} 
              sequential={true} 
              className="text-2xl font-bold text-white" 
              encryptedClassName="text-gray-400" 
              animateOn="load"
            />
            <DecryptedText 
              text="Trade with confidence every step of the way"
              speed={100} 
              maxIterations={13} 
              sequential={true} 
              className="text-2xl font-bold text-white" 
              encryptedClassName="text-gray-400" 
              animateOn="load"
            />
          </div>
        </div>

        <img className='h-[470px] w-[360px] rounded-md' src="/src/assets/bull.jpg" alt="Bull Market" />
      </div>

      {/* ✅ Market Insights Section */}
      {/* <div className="h-screen bg-black flex flex-col justify-center items-center px-20">
        <h2 className="text-5xl font-bold text-white py-10 mb-10">Market Insights</h2>

        6-Image Grid (3 per row)
        <div className="grid grid-cols-3 gap-6">
          {marketImages.map((src, index) => (
            <img 
              key={index} 
              className="h-64 w-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" 
              src={src} 
              alt={`Market ${index + 1}`} 
            />
          ))}
        </div>
      </div> */}

      
      <div className='flex flex-col  mb-16 gap-8'>
        <h1 className='flex justify-center items-center text-4xl font-serif font-bold '>Products and Tools</h1>
        
        <div className=''>
        <TradingViewWidgetSlider/>
      </div>
        
        <div className="flex justify-center items-center gap-10">
      {sections.map((section, index) => (
        <motion.div
          key={index}
          className="flex flex-col justify-center items-center p-2 rounded-lg"
          whileHover={{ scale: 1.1 }} // Pop-up effect
          transition={{ duration: 0.3, ease: "easeOut" }} // Smooth animation
        >
          <img className="h-28 rounded-xl" src={`src/assets/${section.img}`} alt={section.name} />
          <h2 className="text-white font-semibold mt-2">{section.name}</h2>
        </motion.div>
      ))}
    </div>
      </div>

      <div className='flex flex-col gap-4'>
        <h1 className='flex justify-center items-center text-4xl font-serif '>F&O</h1>
        <div className="flex justify-center items-center gap-10">
      

      <TradingViewMiniWidget/>
      <TradingViewMiniWidget2/>
      <TradingViewMiniWidget3/>

    </div>


    
    <div className='mt-16 flex flex-col mt-24 gap-6'>
        <h1 className='flex justify-center items-center text-4xl font-serif font-bold'>Mutual Funds</h1>

        <div className="flex justify-center items-center gap-6">
      {images.map((img, index) => (
        <motion.img
          key={index}
          className="h-38 w-60 rounded-xl"
          src={`src/assets/${img}`}
          alt=""
          whileHover={{ scale: 1.1 }}  // Scale up on hover
          transition={{ duration: 0.3, ease: "easeOut" }} // Smooth animation
        />
      ))}
    </div>
      </div>

      <div className="flex justify-center flex-col items-center gap-8 mt-20 ">
      {/* Left Section - Headings */}
        <div className='flex justify-center items-center max-w-[1200px] mx-auto'>
          <div className="flex flex-col max-w-[500px]">
          <h1 className="text-4xl font-serif font-bold text-white">
            Today's Top Gainers & Losers
          </h1>
          <p className="text-lg text-gray-300 mt-3">
            Stay updated with real-time market trends & insights!
          </p>
          <p className="text-lg text-gray-400">
            Track stocks, forex, and crypto movements live.
          </p>
        </div>

        {/* Right Section - TradingView Widget */}
        <div className="bg-gray-900 flex justify-center items-center p-6 rounded-xl shadow-lg min-w-[500px]">
          <TradingViewHotlist />
        </div>
      </div>

      
      
      


    </div>


      


    
    <div className="flex justify-between items-center mt-24 px-12 max-w-[1200px] mx-auto">
      {/* Left Section - TradingView Widget */}
      <div className="bg-gray-900 flex justify-center items-center p-6 rounded-xl shadow-lg min-w-[500px]">
        <TradingViewWidgetGlobal />
      </div>

      {/* Right Section - Heading & Subtitle */}
      <div className="flex flex-col text-right max-w-[500px]">
        <h1 className="text-4xl font-serif font-bold text-white">
          International Stock Market Trends
        </h1>
        <p className="text-lg text-gray-400 mt-2">
          Stay ahead with real-time global market insights and trends.
        </p>
      </div>
    </div>
        


      </div>




      {/* ✅ 3D Rolling Gallery */}
      <div className="h-screen bg-gray-900 flex flex-col justify-center items-center px-20 mt-8">
        {/* <h2 className="text-xl font-bold text-white py-10 mb-10">Explore More</h2> */}
        
        {/* Rolling Gallery with autoplay and drag control */}
        <RollingGallery autoplay={true} pauseOnHover={true} images={marketImages} />
      </div>



    </div>
  );
};

export default Body;
  