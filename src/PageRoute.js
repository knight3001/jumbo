// @flow

import React from "react";
import { Router, Route, Redirect, browserHistory } from "react-router";

import Template from "./movies/pages/Template";
import Home from "./movies/pages/Home";

const PageRoute = (): React$Element<*> => (
  <Router history={browserHistory}>
    <Route component={Template} path="/">
      <Route component={Home} path="home" />
    </Route>
  </Router>
);

export default PageRoute;
