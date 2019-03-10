// @flow
import React, { Component } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import LinearProgress from "@material-ui/core/LinearProgress";

type LoadingPropsType = {
  size?: number,
  style?: { [key: string]: string },
  isLinear?: boolean
};

class Loading extends Component<LoadingPropsType, *> {
  render(): React$Element<*> {
    if (this.props.isLinear) {
      return (
        <LinearProgress
          color="primary"
          {...(this.props.style ? { style: this.props.style } : {})}
        />
      );
    } else {
      return (
        <CircularProgress
          size={this.props.size ? this.props.size : 100}
          color="primary"
          {...(this.props.style ? { style: this.props.style } : {})}
        />
      );
    }
  }
}

export default Loading;
