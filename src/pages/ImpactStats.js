import React from 'react';
import './ImpactStats.css'; // 

function ImpactStats() {
  const stats = [
    { id: 1, icon: '🌳', label: 'Trees Saved', value: 7 },
    { id: 2, icon: '💧', label: 'Liters of Water Saved', value: 320 },
    { id: 3, icon: '🛢️', label: 'Barrels of Oil Saved', value: 12 },
    { id: 4, icon: '⚡', label: 'kWh of Energy Saved', value: 790 },
    { id: 5, icon: '🏞️', label: 'Cubic Meters of Landfill Space Saved', value: 5 },
  ];

  return (
    <div className="impact-stats">
      <h2>My Impact</h2>
      <div className="stats-list">
        {stats.map((stat) => (
          <div key={stat.id} className="stat-item">
            <span className="stat-icon">{stat.icon}</span>
            <div className="stat-info">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImpactStats;
