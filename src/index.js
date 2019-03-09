// @flow
import "react-app-polyfill/ie9";
import "babel-polyfill";

import React from "react";
import ReactDOM from "react-dom";

import "./css/App.scss";

import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
