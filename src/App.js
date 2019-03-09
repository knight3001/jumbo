// @flow

import React, { Component } from "react";

//redux
import { Provider } from "react-redux";
import Store from "./Store";

import PageRoute from "./PageRoute";

class App extends Component<*> {
  render(): React$Element<*> {
    return (
      <Provider store={Store}>
        <PageRoute />
      </Provider>
    );
  }
}

export default App;
