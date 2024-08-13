import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PointsAndLeaderboard from './pages/PointsAndLeaderboard';
import WasteDistribution from './pages/WasteDistribution';
import ImpactStatsPage from './pages/ImpactStatsPage';
import NavBar from './components/NavBar';  
function App() {
  return (
    <Router>
      <div>
        <NavBar /> 

        <Switch>
          <Route path="/leaderboard" component={PointsAndLeaderboard} />
          <Route path="/waste-distribution" component={WasteDistribution} />
          <Route path="/impact-stats" component={ImpactStatsPage} />
          <Route path="/" exact component={PointsAndLeaderboard} />
        </Switch>

        
      </div>
    </Router>
  );
}

export default App;
