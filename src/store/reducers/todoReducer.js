import { ActionTypes } from "../actions/actionTypes";

const initialState = {
  todo: null,
  loading: false,
  error: null,
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_TODO_START:
      return {
        ...state,
        loading: true,
        error: null,
        todo: null
      };
    case ActionTypes.GET_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        todo: action.payload,
      };
    case ActionTypes.GET_TODO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
