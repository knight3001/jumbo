// @flow
import Properties from "../../Properties";
import { getInit, postInit } from "../types/constants";
import type { DispatchType } from "../types/redux";

import { GET_POPULAR_MOVIES, GET_MOVIE_DETAIL } from "../types/actionNames";

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
