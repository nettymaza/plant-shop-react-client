import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="NavBar">
      <NavLink  className="NavLink" to="/">Home</NavLink>
      <NavLink  className="NavLink" to="/items">Plants</NavLink>
      <NavLink  className="NavLink" to="/items/new"> Add Plant</NavLink>
    </div>
  );
};

export default NavBar;
