import { combineReducers } from 'redux';
import heros from './heros';
import hero from './hero';
import enemy from './enemy';

const rootReducer = combineReducers({
  heros,
  hero,
  enemy
});

export default rootReducer;
