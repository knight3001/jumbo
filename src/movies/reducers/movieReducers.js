// @flow
import { GET_POPULAR_MOVIES } from "../types/actionNames";

const initialState = {
  movies: null
};

const movieReducers = (state: * = initialState, actions: *): * => {
  switch (actions.type) {
    case GET_POPULAR_MOVIES:
      if (actions.movies !== undefined) {
        return {
          ...state,
          movies: [...actions.movies]
        };
      }
      return state;

    default:
      return state;
  }
};
export default movieReducers;
