import "./App.css";
import React from "react";
import NavBar from "./Components/NavBar";
import { AuthProvider } from './AuthContext';
import Search from "./Components/Search";
function App() {
  
  return (
    <AuthProvider>
      <header>
        <NavBar/>
      </header>
      <main>
        <Search />

      </main>
    </AuthProvider>
  );
}

export default App;
