import React from 'react';
import StatsHeader from '../components/StatsHeader';
import WasteChart from '../components/WasteChart';
import Tabs from '../components/Tabs';

function WasteDistribution() {
  return (
    <div>
      <StatsHeader />
      <WasteChart />
      <Tabs />
    </div>
  );
}

export default WasteDistribution;
