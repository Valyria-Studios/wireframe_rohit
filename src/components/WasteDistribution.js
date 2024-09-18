import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const data = {
  labels: ['Plastic', 'Paper & Cardboard', 'Kitchen Waste', 'Landfill', 'Metal', 'Glass'],
  datasets: [
    {
      data: [27, 31, 22, 13, 5, 2],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF9F40', '#66BB6A', '#AB47BC'],
    },
  ],
};

function WasteDistribution() {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">My Waste Distribution</h2>
      <Doughnut data={data} />
      <div className="flex justify-around mt-4">
        <button className="py-2 px-4 bg-gray-200 rounded">Today</button>
        <button className="py-2 px-4 bg-gray-200 rounded">Week</button>
        <button className="py-2 px-4 bg-gray-200 rounded">Month</button>
        <button className="py-2 px-4 bg-green-500 text-white rounded">All</button>
      </div>
    </div>
  );
}

export default WasteDistribution;
