// @flow
import Properties from "../../Properties";
import { getInit, postInit } from "../types/constants";
import type { DispatchType } from "../types/redux";

import { GET_POPULAR_MOVIES } from "../types/actionNames";

const key = Properties.key;

export const fetchPopularMovies = (callback?: Function = null): * => (
  dispatch: DispatchType
): * => {
  return fetch(
    `/movie/popular?api_key=${key}&language=en-US&page=1`,
    getInit
  )
    .then((response: Response): Promise<*> => response.json())
    .then(
      (json: *): DispatchType => {
        dispatch({ type: GET_POPULAR_MOVIES, movies: json.results });
        callback && callback(json.results);
      }
    );
};
