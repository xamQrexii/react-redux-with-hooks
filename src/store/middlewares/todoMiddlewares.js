import axios from "axios";

import {
  getTodoStart,
  getTodoSuccess,
  getTodoFailure,
} from "../actions/todoActions";

export const getTodoMiddleware = (id) => {
  return async (dispatch) => {
    try {
      dispatch(getTodoStart());
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      dispatch(getTodoSuccess(data));
    } catch (error) {
      dispatch(getTodoFailure("Something went wrong"));
    }
  };
};
