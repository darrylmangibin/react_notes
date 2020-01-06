import { combineReducers } from 'redux';
import notesReducer from './notesReducer';
import filterReducer from './filterReducer';

const rootReducer = () => {
  const reducer = combineReducers({
    notes: notesReducer,
    filter: filterReducer
  });
  return reducer;
}

export default rootReducer;