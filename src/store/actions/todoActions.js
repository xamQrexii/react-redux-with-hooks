import {ActionTypes} from './actionTypes';

export const getTodoStart = () => ({type: ActionTypes.GET_TODO_START});
export const getTodoSuccess = (data) => ({type: ActionTypes.GET_TODO_SUCCESS, payload: data});
export const getTodoFailure = (err) => ({type: ActionTypes.GET_TODO_FAILURE, payload: err});