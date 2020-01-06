import { combineReducers } from 'redux';
import notesReducer from './notesReducer';

const rootReducer = () => {
  const reducer = combineReducers({
    notes: notesReducer
  });
  return reducer;
}

export default rootReducer;