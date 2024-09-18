import React from 'react';

function PointsAndLeaderboard() {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="mb-6">
        <h2 className="text-4xl font-bold text-green-500">450 Points</h2>
        <p className="text-gray-600">...like an OG but an OT.</p>
        <p className="text-gray-600">You are 50 points away from reaching Tree Hugger status.</p>
        <div className="bg-gray-200 h-3 rounded mt-4">
          <div className="bg-green-500 h-full rounded" style={{ width: '90%' }}></div>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-4">Eco Leaderboard</h2>
        <div className="flex justify-around">
          <div className="text-center">
            <img src="leader1.png" alt="Leader 1" className="w-12 h-12 rounded-full mb-2" />
            <p>Leader 1</p>
          </div>
          <div className="text-center">
            <img src="leader2.png" alt="Leader 2" className="w-12 h-12 rounded-full mb-2" />
            <p>Leader 2</p>
          </div>
          <div className="text-center">
            <img src="leader3.png" alt="Leader 3" className="w-12 h-12 rounded-full mb-2" />
            <p>Leader 3</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PointsAndLeaderboard;
