import { combineReducers } from 'redux';

//app specific reducers
import PlayersReducers from './reducer_players';
import ActivePlayerReducers from './reducer_activePlayer';

//map the state to the appropriate reducers
const rootReducer = combineReducers({
  players: PlayersReducers,
  activePlayer: ActivePlayerReducers,
});

export default rootReducer;