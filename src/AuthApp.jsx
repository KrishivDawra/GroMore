import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import ShinyText from "./components/ShinnyText";
import Header from "./components/Header";

const AuthApp = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="fixed top-0 left-0 w-full h-full object-cover"
        src="./src/assets/landing.mp4" // Replace with your video file
        autoPlay
        loop
        muted
      />

      {/* Header - Always on Top */}
      <div className="fixed top-0 left-0 w-full py-8 px-4 z-50 bg-black/50 backdrop-blur-lg">
        <Header />
      </div>

      {/* Overlay Content */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
        {!isAuthenticated ? (
          <button
            className="bg-red-700/75 px-4 py-2 rounded-3xl"
            onClick={() => loginWithRedirect()}
          >
            <ShinyText text="Get Started" />
          </button>
        ) : (
          <>
            <h2 className="text-xl mt-4">Welcome, {user.name}!</h2>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded mt-4"
              onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthApp;
