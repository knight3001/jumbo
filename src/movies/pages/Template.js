// @flow

import * as React from "react";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

import { MyTheme } from "../types/themes";
import Home from "./Home";

const Template = (props: { children: * }): React$Element<*> => (
  <MuiThemeProvider theme={MyTheme}>
    {props.children || <Home />}
  </MuiThemeProvider>
);

export default Template;
