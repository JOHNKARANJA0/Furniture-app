// AuthContext.js
import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isloggedin, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isloggedin') === 'true';
  });

  useEffect(() => {
    localStorage.setItem('isloggedin', isloggedin);
  }, [isloggedin]);

  return (
    <AuthContext.Provider value={{ isloggedin, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return React.useContext(AuthContext);
};
