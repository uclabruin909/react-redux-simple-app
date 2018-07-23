import { combineReducers } from 'redux';

//app specific reducers
import PlayersReducers from './reducer_players';

//map the state to the appropriate reducers
const rootReducer = combineReducers({
  players: PlayersReducers,
});

export default rootReducer;