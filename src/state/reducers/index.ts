import { combineReducers } from 'redux';
import cityReducer from './city-reducer';

const reducers = combineReducers({
  city: cityReducer,
});

export default reducers;
export type State = ReturnType<typeof reducers>;
