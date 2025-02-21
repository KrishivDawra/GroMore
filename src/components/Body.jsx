import React from 'react';
import DecryptedText from './DecryptedText';
import RollingGallery from './RollingGallery';

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
      <div className="h-screen bg-black flex flex-col justify-center items-center px-20">
        <h2 className="text-5xl font-bold text-white py-10 mb-10">Market Insights</h2>

        {/* 6-Image Grid (3 per row) */}
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
      </div>

      {/* ✅ 3D Rolling Gallery */}
      <div className="h-screen bg-gray-900 flex flex-col justify-center items-center px-20">
        <h2 className="text-xl font-bold text-white py-10 mb-10">Explore More</h2>
        
        {/* Rolling Gallery with autoplay and drag control */}
        <RollingGallery autoplay={true} pauseOnHover={true} images={marketImages} />
      </div>
    </div>
  );
};

export default Body;
  