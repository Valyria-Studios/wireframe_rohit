import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import ImpactStats from './components/ImpactStats';
import WasteDistribution from './components/WasteDistribution';
import PointsAndLeaderboard from './components/PointsAndLeaderboard';

function App() {
  return (
    <Router>
      <NavBar />
      <div className="container mx-auto p-4">
        <Switch>
          <Route path="/" exact component={PointsAndLeaderboard} />
          <Route path="/impact-stats" component={ImpactStats} />
          <Route path="/waste-distribution" component={WasteDistribution} />
          <Route path="/leaderboard" component={PointsAndLeaderboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
