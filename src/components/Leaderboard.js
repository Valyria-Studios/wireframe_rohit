import React from 'react';
import { useSelector } from 'react-redux';
import './Leaderboard.css'; 

function Leaderboard() {
  // Assume the leaderboard data is coming from Redux state
  const leaderboard = useSelector((state) => state.leaderboard.leaderboard);

  return (
    <div className="leaderboard">
      <h2>Eco Leaderboard</h2>
      <ul className="leaderboard-list">
        {leaderboard.map((user, index) => (
          <li key={user.id} className="leaderboard-item">
            <span className="leaderboard-rank">{index + 1}</span>
            <img src={user.avatarUrl} alt={user.name} className="leaderboard-avatar" />
            <span className="leaderboard-name">{user.name}</span>
            <span className="leaderboard-points">{user.points} pts</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Leaderboard;
