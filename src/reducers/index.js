import { combineReducers } from 'redux';
import leaderboardReducer from './leaderboardReducer'; 


const rootReducer = combineReducers({
  leaderboard: leaderboardReducer, 
});

export default rootReducer;
