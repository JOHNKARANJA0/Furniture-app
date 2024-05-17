import "./App.css";
import React from "react";
import NavBar from "./Components/NavBar";
import Card from "./Components/Card";
import { useLocation } from 'react-router-dom';
import Search from "./Components/Search";
function App() {
  const location = useLocation();
  const isLoggedIn = location.state?.isLoggedIn || false;
  
  return (
    <>
      <header>
        <NavBar isLoggedIn={isLoggedIn}/>
      </header>
      <main>
        <Search />
        <Card />

      </main>
    </>
  );
}

export default App;
