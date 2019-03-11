// @flow
import Properties from "../../Properties";
import { getInit, postInit } from "../types/constants";
import type { DispatchType } from "../types/redux";

import {
  GET_POPULAR_MOVIES,
  GET_MOVIE_DETAIL,
  SEARCH_MOVIE,
  SET_UPDATING,
  SET_SEARCH_QUERY
} from "../types/actionNames";

const root = Properties.api_root;
const key = Properties.key;

export const fetchPopularMovies = (callback?: Function = null): * => (
  dispatch: DispatchType
): * => {
  return fetch(`${root}/movie/popular?api_key=${key}&page=1`, getInit)
    .then((response: Response): Promise<*> => response.json())
    .then(
      (json: *): DispatchType => {
        dispatch({ type: GET_POPULAR_MOVIES, movies: json.results });
        callback && callback(json.results);
      }
    );
};

export const fetchMovieDetail = (
  movieId: string,
  callback?: Function = null,
  failBack?: Function = null
): * => (dispatch: DispatchType): * => {
  return fetch(`${root}/movie/${movieId}?api_key=${key}`, getInit)
    .then((response: Response): Promise<*> => response.json())
    .then(
      (json: *): DispatchType => {
        if (json.status_code) {
          failBack && failBack(json.status_message);
        } else {
          dispatch({ type: GET_MOVIE_DETAIL, movie: json, id: movieId });
          callback && callback(json);
        }
      }
    );
};

export const setQuery = (query: string): * => ({
  type: SET_SEARCH_QUERY,
  query: query
});

export const SearchMovies = (query: string, callback?: Function = null): * => (
  dispatch: DispatchType
): * => {
  dispatch({ type: SET_UPDATING, isSearching: true });
  dispatch(setQuery(query));
  if (query) {
    return fetch(
      `${root}/search/movie?api_key=${key}&page=1&query=${query}`,
      getInit
    )
      .then((response: Response): Promise<*> => response.json())
      .then(
        (json: *): DispatchType => {
          dispatch({ type: SEARCH_MOVIE, movies: json.results });
          dispatch({ type: SET_UPDATING, isSearching: false });
          callback && callback(json.results);
        }
      );
  } else {
    return dispatch({ type: SET_UPDATING, isSearching: false });
  }
};
