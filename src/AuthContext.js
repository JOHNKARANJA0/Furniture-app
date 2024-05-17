import React, { createContext, useState } from 'react';

const AuthContext = createContext(false); // Default value for isLoggedIn

function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider};