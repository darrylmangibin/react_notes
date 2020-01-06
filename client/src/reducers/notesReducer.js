import { GET_DATA, LOADING, ADD_DATA, REMOVE_DATA, GET_NOTE, EDIT_DATA } from '../actions/types';

const initialState = {
  notes: [],
  loading: true,
  note: undefined
}

const notesReducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case LOADING:
      return {
        ...state,
        loading: true
      }
    case GET_DATA:
      return {
        ...state,
        notes: payload,
        loading: false
      }
    case ADD_DATA:
      return {
        ...state,
        notes: [ ...state.notes, payload ]
      }
    case REMOVE_DATA:
      return {
        ...state,
        notes: state.notes.filter(note => note._id !== payload._id)
      }
    case GET_NOTE:
      return {
        ...state,
        note: payload
      }
    case EDIT_DATA:
      const { notes } = state;
      const index = notes.findIndex(note => note._id === payload._id);
      const note = { ...notes[index], ...payload };
      notes[index] = note;
      return {
        ...state,
        notes: [ ...notes ]
      }
    default:
      return state
  }
}

export default notesReducer;