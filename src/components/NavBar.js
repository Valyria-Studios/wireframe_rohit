import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex justify-around">
        <li>
          <NavLink to="/" exact activeClassName="text-green-400" className="hover:text-green-300">
            Leaderboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/impact-stats" activeClassName="text-green-400" className="hover:text-green-300">
            Impact Stats
          </NavLink>
        </li>
        <li>
          <NavLink to="/waste-distribution" activeClassName="text-green-400" className="hover:text-green-300">
            Waste Distribution
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
