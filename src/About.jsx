import React from "react";
import { FaInstagram, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import TiltedCard from "./components/TiltedCard";
// import TiltedCard from "./TiltedCard";

const About = () => {
  return (
    <div className="bg-black text-white flex flex-col items-center">
      {/* Full-Screen Section 1: Introduction */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <div className="flex flex-col md:flex-row items-center w-3/4 gap-10">
          {/* Text Section */}
          <div className="md:w-1/2 text-left">
            <h1 className="text-7xl font-extrabold mb-8">Welcome to GroMore</h1>
            <p className="text-xl text-gray-300 leading-7">
              <strong>GroMore is an innovative AI-powered stock exchange app</strong> designed 
              to make investing effortless and <strong>intelligent</strong>. Our platform offers 
              real-time market analysis, smart trading insights, and a 
              <strong> community-driven chat system</strong> for investors. Whether you're a 
              seasoned trader or a beginner, <strong>GroMore provides the right tools </strong> 
              to <strong>help you grow your wealth with confidence</strong>.
            </p>
          </div>

          {/* Bull Image */}
          <div className="md:w-1/2 flex justify-center">
            {/* <img
              className="rounded-lg shadow-lg w-full max-w-sm"
              src="./src/assets/bull.jpg"
              alt="Bull Market"
            /> */}
            <TiltedCard
              imageSrc="./src/assets/bull.jpg"
              altText=""
              captionText=""
              containerWidth="500px"
              containerHeight="350px"
            />
          </div>
        </div>
      </section>

      {/* Full-Screen Section 2: Features */}
      <section className="h-screen flex flex-col  justify-center items-center w-3/4">
      <h1 className="font-bold text-5xl py-9">Features</h1>
        <div className="flex flex-col md:flex-row gap-20">
          {/* Left Div */}
          <div className="md:w-1/2 flex flex-col items-center text-center">
            {/* <img
              src="./src/assets/livechart.jpg"
              alt="AI Stock Predictions"
              className="rounded-2xl shadow-lg w-full max-w-md"
            /> */}
             <TiltedCard
              imageSrc="./src/assets/livechart.jpg"
              altText=""
              captionText=""
              containerWidth="500px"
              containerHeight="350px"
            />
            <p className="mt-6 font-serif text-lg text-gray-300">
              <span className="font-semibold">AI-Powered Insights</span> – 
              Our cutting-edge AI analyzes millions of data points to provide 
              <strong> real-time stock trends, risk assessments, and smart trade recommendations</strong>. 
              Stay ahead of the market with AI-driven predictions that help maximize profits 
              while minimizing risks in an ever-changing financial landscape.
            </p>
          </div>

          {/* Right Div */}
          <div className="md:w-1/2 flex flex-col items-center text-center">
            {/* <img
              src="./src/assets/stockpred.jpg"
              alt="Live Trading Chat"
              className="rounded-2xl shadow-lg w-full max-w-md"
            /> */}
            <TiltedCard
              imageSrc="./src/assets/stockpred.jpg"
              altText=""
              captionText=""
              containerWidth="500px"
              containerHeight="350px"
            />
            <p className="mt-6 font-serif tracking-wide text-lg text-gray-300">
              <span className="font-semibold">Live Trading Community</span> –  
              Connect with <strong>traders, experts, and market analysts</strong> in real-time through our 
              interactive chatrooms. Share insights, discuss strategies, and get instant updates 
              on breaking market news to make <strong>smarter, well-informed investment decisions</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Full-Screen Section 3: Social Media & Community */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6 w-3/4">
        <h2 className="text-5xl font-bold mb-8">Join Our Growing Community</h2>
        <p className="text-xl text-gray-300 max-w-3xl leading-8">
          Stay ahead in the stock market with <strong>real-time insights, AI predictions, and a thriving community</strong> of traders.
          Follow us, engage in discussions, and be part of the next-gen investment movement!
        </p>

        {/* Live Statistics */}
        <div className="flex flex-wrap justify-center gap-12 mt-10">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-60 text-center">
            <h3 className="text-4xl font-bold text-green-400">100K+</h3>
            <p className="text-gray-300 mt-2">Active Investors</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-60 text-center">
            <h3 className="text-4xl font-bold text-blue-400">500M+</h3>
            <p className="text-gray-300 mt-2">Trades Executed</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-60 text-center">
            <h3 className="text-4xl font-bold text-yellow-400">24/7</h3>
            <p className="text-gray-300 mt-2">Live Market Updates</p>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-12 w-full max-w-lg">
          <p className="text-lg text-gray-300 mb-4">Subscribe for exclusive market updates & insights!</p>
          <div className="flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 w-full rounded-lg text-black"
            />
            <button className="bg-green-500 px-6 py-3 rounded-lg shadow-md hover:bg-green-600 transition">
              Subscribe
            </button>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex gap-6 mt-10">
          <a href="https://instagram.com" target="_blank" className="bg-gradient-to-r from-pink-500 to-orange-500 p-4 rounded-full shadow-lg hover:scale-110 transition duration-300">
            <FaInstagram size={35} />
          </a>
          <a href="https://linkedin.com" target="_blank" className="bg-blue-600 p-4 rounded-full shadow-lg hover:scale-110 transition duration-300">
            <FaLinkedin size={35} />
          </a>
          <a href="https://twitter.com" target="_blank" className="bg-blue-400 p-4 rounded-full shadow-lg hover:scale-110 transition duration-300">
            <FaTwitter size={35} />
          </a>
          <a href="https://github.com" target="_blank" className="bg-gray-800 p-4 rounded-full shadow-lg hover:scale-110 transition duration-300">
            <FaGithub size={35} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
