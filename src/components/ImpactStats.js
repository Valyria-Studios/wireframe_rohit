import React from 'react';

function ImpactStats() {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">My Impact</h2>
      <ul className="space-y-4">
        <li className="flex items-center">
          <span className="text-3xl mr-4">🌳</span>
          <div>
            <p className="text-lg font-medium">Trees</p>
            <p className="text-gray-500">7 from paper & cardboard recycling</p>
          </div>
        </li>
        <li className="flex items-center">
          <span className="text-3xl mr-4">💧</span>
          <div>
            <p className="text-lg font-medium">Water</p>
            <p className="text-gray-500">320L from paper & cardboard recycling</p>
          </div>
        </li>
        <li className="flex items-center">
          <span className="text-3xl mr-4">🛢️</span>
          <div>
            <p className="text-lg font-medium">Barrels of Oil</p>
            <p className="text-gray-500">12 from plastic recycling</p>
          </div>
        </li>
        <li className="flex items-center">
          <span className="text-3xl mr-4">⚡</span>
          <div>
            <p className="text-lg font-medium">Energy</p>
            <p className="text-gray-500">790kW from all recycling</p>
          </div>
        </li>
        <li className="flex items-center">
          <span className="text-3xl mr-4">🏞️</span>
          <div>
            <p className="text-lg font-medium">Landfill space</p>
            <p className="text-gray-500">5m³ from all recycling</p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default ImpactStats;
