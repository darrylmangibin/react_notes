import { GET_DATA, LOADING, ADD_DATA, REMOVE_DATA, GET_NOTE, EDIT_DATA } from './types';
import axios from '../axios';

export const getData = () => dispatch => {
  axios.get('/').then(res => {
    dispatch({
      type: LOADING
    })
    setTimeout(() => {
      dispatch({
        type: GET_DATA,
        payload: res.data
      })
    }, 500);
  })
}

export const addData = (data, history) => dispatch => {
  axios.post('/', data).then(res => {
    dispatch({
      type: ADD_DATA,
      payload: res.data
    })
    history.push('/')
  })
}

export const removeData = (id, history) => dispatch => {
  axios.delete(`/${id}`).then(res => {
    dispatch({
      type: REMOVE_DATA,
      payload: res.data
    })
    history.push('/')
  })
}

export const getNote = (id, history) => dispatch => {
  axios.get('/' + id).then(res => {
    dispatch({
      type: GET_NOTE,
      payload: res.data
    })
  }).catch(() => {
    history.push('/')
  })
}

export const editData = (id, newData, history) => dispatch => {
  axios.put(`/${id}`, newData).then(res => {
    dispatch({
      type: EDIT_DATA,
      payload: res.data
    })
    history.push('/')
  })
} 