import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const AuthApp = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  return (
    <div className="text-center py-10">
      <h1 className="text-2xl font-bold">React Auth0 Authentication</h1>

      {!isAuthenticated ? (
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-3xl"
          onClick={() => loginWithRedirect()}
        >
          Get Started
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
  );
};

export default AuthApp;
