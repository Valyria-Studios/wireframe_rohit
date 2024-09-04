import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import './WasteDistribution.css';

const data = {
  labels: ['Plastic', 'Paper & Cardboard', 'Kitchen Waste', 'Landfill', 'Metal', 'Glass'],
  datasets: [
    {
      data: [27, 31, 22, 13, 5, 2],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF9F40', '#66BB6A', '#AB47BC'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF9F40', '#66BB6A', '#AB47BC']
    }
  ]
};

function WasteDistribution() {
  return (
    <div className="waste-distribution">
      <h2>My Waste Distribution</h2>
      <Doughnut data={data} />
      <div className="tabs">
        <button>Today</button>
        <button>Week</button>
        <button>Month</button>
        <button className="active">All</button>
      </div>
    </div>
  );
}

export default WasteDistribution;
