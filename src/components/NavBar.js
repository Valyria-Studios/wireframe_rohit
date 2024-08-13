import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/leaderboard">Leaderboard</Link>
        </li>
        <li>
          <Link to="/waste-distribution">Waste Distribution</Link>
        </li>
        <li>
          <Link to="/impact-stats">Impact Stats</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
