import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import About from "./About";
import Body from "./components/Body";
import Services from "./Services";
import Products from "./Products";
import AuthApp from "./AuthApp"; // Separate Auth Component

const App = () => {
  return (
    <div className="px-14 py-4 bg-black">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Body />} /> 
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/product" element={<Products />} />
          <Route path="/auth" element={<AuthApp />} />
          <Route path="*" element={<div>Error 404 found</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;