import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'; 

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <NavLink exact to="/" className="navbar-link" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/leaderboard" className="navbar-link" activeClassName="active">
            Leaderboard
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/waste-distribution" className="navbar-link" activeClassName="active">
            Waste Distribution
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/impact-stats" className="navbar-link" activeClassName="active">
            Impact Stats
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
