import React from 'react';
import DecryptedText from './DecryptedText';
import { div } from 'framer-motion/client';

const Body = () => {
  return (
    <div>
        <div className=" h-screen bg-[url('/src/assets/hero.jpg')] bg-cover bg-center flex justify-between items-center px-20">
        <div className="flex flex-col items-left justify-center h-full ">
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
                text="Trade with confidence every step of the way"
                
                speed={100} 
                maxIterations={13} 
                sequential={true} 
                className="text-2xl font-bold text-white" 
                encryptedClassName="text-gray-400" 
                animateOn="load"
              
            />
          </div>
          
          

        </div>

        <img className='h-[470px] w-[360px] rounded-md' src="src\assets\bull.jpg" alt="" />
      </div>


    </div>
    
  );
};

export default Body;

