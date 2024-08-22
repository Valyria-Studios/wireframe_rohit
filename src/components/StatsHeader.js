import React from 'react';
import './StatsHeader.css'; 

function StatsHeader({ points, recyclingRate, collections }) {
  return (
    <div className="stats-header">
      <div className="stat-item">
        <h3>{points}</h3>
        <p>Points</p>
      </div>
      <div className="stat-item">
        <h3>{recyclingRate}%</h3>
        <p>Recycling Rate</p>
      </div>
      <div className="stat-item">
        <h3>{collections}</h3>
        <p>Collections</p>
      </div>
    </div>
  );
}

export default StatsHeader;
