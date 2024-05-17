import React, { createContext, useState } from 'react';

const IsLoggedInContext = createContext(false);

const IsLoggedInProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (isLoggedIn) => { // Receives login state from LoginPage
    setIsLoggedIn(isLoggedIn);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const value = { isLoggedIn, handleLogin, handleLogout };

  return (
    <IsLoggedInContext.Provider value={value}>
      {children}
    </IsLoggedInContext.Provider>
  );
};

export { IsLoggedInContext, IsLoggedInProvider };
