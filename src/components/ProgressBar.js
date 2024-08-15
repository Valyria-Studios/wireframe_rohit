import React from 'react';
import './ProgressBar.css'; 

function ProgressBar({ progress, maxProgress }) {
  // Calculate the width of the progress bar as a percentage
  const progressPercentage = (progress / maxProgress) * 100;

  return (
    <div className="progress-bar-background">
      <div
        className="progress-bar-fill"
        style={{ width: `${progressPercentage}%` }}
      ></div>
    </div>
  );
}

export default ProgressBar;
