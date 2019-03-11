// @flow
import {
  GET_POPULAR_MOVIES,
  GET_MOVIE_DETAIL,
  SEARCH_MOVIE,
  SET_UPDATING,
  SET_SEARCH_QUERY
} from "../types/actionNames";

const initialState = {
  movies: null,
  movieDetails: null,
  searchList: null,
  isSearching: null,
  query: null
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

    case GET_MOVIE_DETAIL:
      if (actions.movie !== undefined && actions.id !== undefined) {
        let movies = { ...state.movieDetails };

        if (!(actions.id in movies)) {
          movies[actions.id] = { ...actions.movie };
          return {
            ...state,
            movieDetails: movies
          };
        }
      }
      return state;

    case SET_UPDATING:
      if (actions.isSearching !== undefined) {
        return {
          ...state,
          isSearching: actions.isSearching
        };
      }
      return state;

    case SEARCH_MOVIE:
      if (actions.movies !== undefined) {
        return {
          ...state,
          searchList: [...actions.movies]
        };
      }
      return state;

    case SET_SEARCH_QUERY:
      if (actions.query !== undefined) {
        return {
          ...state,
          query: actions.query
        };
      }
      return state;

    default:
      return state;
  }
};
export default movieReducers;
