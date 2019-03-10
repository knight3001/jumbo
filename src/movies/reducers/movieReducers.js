// @flow
import { GET_POPULAR_MOVIES, GET_MOVIE_DETAIL } from "../types/actionNames";

const initialState = {
  movies: null,
  movieDetails: null
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
        let movies = {...state.movieDetails};

        if(!(actions.id in movies)){
          movies[actions.id] = {...actions.movie};
          return {
            ...state,
            movieDetails: movies
          };
        }
      }
      return state;

    default:
      return state;
  }
};
export default movieReducers;
