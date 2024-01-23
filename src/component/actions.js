
import { ADD_USER, REMOVE_USER, SEARCH_USERS } from './ReduxActionTypes';

export const addUser = user => ({
  type: ADD_USER,
  payload: user,
});

export const removeUser = userId => ({
  type: REMOVE_USER,
  payload: userId,
});

export const searchUsers = searchParams => ({
  type: SEARCH_USERS,
  payload: searchParams,
});
