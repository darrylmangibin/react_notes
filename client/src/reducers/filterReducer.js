import { FILTER_DATA, SORT_DATA } from '../actions/types';

const initialState = {
  filterText: '',
  sortBy: 'byEdited'
}

const filterReducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case FILTER_DATA:
      return {
        ...state,
        filterText: payload
      }
    case SORT_DATA:
      return {
        ...state,
        sortBy: payload
      }
    default:
      return state
  }
}

export default filterReducer;