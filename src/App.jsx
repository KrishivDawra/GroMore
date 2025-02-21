import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Header from "./components/Header";
import About from "./About";
import Body from "./components/Body";
import Trading from "./Trading"
import Course from "./Course"
import AuthApp from "./AuthApp";
import ProtectedRoute from "./components/ProtectedRoute"; // Import Protected Route


const App = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="px-14 py-4 pt-6 bg-black text-white">
      <BrowserRouter>
        <Header />
        <Routes>
          {/* Public Routes */}
          {/* <Route path="/" element={<Body />} /> */}
          <Route path="/" element={<AuthApp />} />
          {/* <Route path="/home" element={<Body/>}/> */}
          {/* ✅ Protected Routes */}
          <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
          <Route path="/home" element={<ProtectedRoute><Body/></ProtectedRoute>} />
          <Route path="/Tradeview" element={<ProtectedRoute><Trading/></ProtectedRoute>} />
          <Route path="/Course" element={<ProtectedRoute><Course /></ProtectedRoute>} />

          {/* Catch-all 404 Route */}
          <Route path="*" element={<div>Error 404 found</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
