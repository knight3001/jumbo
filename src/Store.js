// @flow

import { applyMiddleware, combineReducers, createStore, compose } from "redux"; 
import thunk from "redux-thunk";

const reducers = combineReducers({
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [ thunk ];

const Store = createStore(
  reducers,
  composeEnhancers( applyMiddleware(...middleware) )
);


export default Store;