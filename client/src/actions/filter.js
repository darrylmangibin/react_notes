import { FILTER_DATA, SORT_DATA } from './types';

export const filterData = text => {
  return {
    type: FILTER_DATA,
    payload: text
  }
}

export const sortData = (sortBy) => {
  return {
    type: SORT_DATA,
    payload: sortBy
  }
}