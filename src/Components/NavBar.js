import React from 'react';
import "./NavBar.css";
import { NavLink } from "react-router-dom";


export default function NavBar() {
  return (
    <div className='navbar'>
        <h2> HOME FURNITURE</h2>
        <nav>
          <NavLink to="/" className="nav-link">Home </NavLink>
          <NavLink to="/about" className="nav-link">About </NavLink>
          <NavLink to="/AddFurniture" className="nav-link" >AddItem</NavLink>
          <NavLink to="/login" className="nav-link">Login</NavLink>
        </nav>        
    </div>
  )
}