import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', margin: '18px' }}>
      <NavLink  style={{ marginRight: '10px' }} to="/">Home</NavLink>
      <NavLink  style={{ marginRight: '10px' }} to="/items">Plants</NavLink>
    </div>
  );
};

export default NavBar;
