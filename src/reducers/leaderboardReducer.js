const initialState = {
    leaderboard: [],
  };
  
  const leaderboardReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_LEADERBOARD':
        return {
          ...state,
          leaderboard: action.payload,
        };
      case 'ADD_TO_LEADERBOARD':
        return {
          ...state,
          leaderboard: [...state.leaderboard, action.payload],
        };
      default:
        return state;
    }
  };
  
  export default leaderboardReducer;
  