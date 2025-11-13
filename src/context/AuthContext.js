import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  function login(email, password) {
    if (!email || !password) return false;
    setIsLoggedIn(true);
    setUserEmail(email);
    return true;
  }

  function logout() {
    setIsLoggedIn(false);
    setUserEmail('');
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, userEmail, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
