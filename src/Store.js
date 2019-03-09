// @flow

import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunk from "redux-thunk";

import movieReducers from "./movies/reducers/movieReducers";

const reducers = combineReducers({
  movie: movieReducers
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [thunk];

const Store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middleware))
);

export default Store;
