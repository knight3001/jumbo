// @flow

import React from "react";
import { Router, Route, Redirect, browserHistory } from "react-router";

import Template from "./movies/pages/Template";
import Home from "./movies/pages/Home";
import Movie from "./movies/pages/Movie";

const PageRoute = (): React$Element<*> => (
  <Router history={browserHistory}>
    <Route component={Template} path="/">
      <Route component={Home} path="home" />
      <Route path='movie/:id' component={Movie} />
      <Redirect from="*" to="/" />
    </Route>
  </Router>
);

export default PageRoute;
