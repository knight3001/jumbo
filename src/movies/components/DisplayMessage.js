// @flow
import React, { Component } from "react";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import ErrorIcon from "@material-ui/icons/Error";

const styles = (theme: *): * => ({
  banner: {
    width: "100%",
    height: "auto",
    margin: "16px"
  },
  error: {
    backgroundColor: "red"
  },
  box: {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    transition: "color 0.25s ease-in-out",
    whiteSpace: "pre-wrap",
    padding: "16px"
  },
  icon: {
    fill: "white",
    marginRight: "5px"
  },
  content: {
    color: "white",
    fontSize: "0.9375rem",
    fontWeight: 500,
    lineHeight: "1.5em"
  }
});

type DisplayMessagePropsType = {
  classes: { [key: string]: * },
  message: string
};

class DisplayMessage extends Component<DisplayMessagePropsType, *> {
  render(): * {
    const { classes, message } = this.props;
    return (
      <div className={classNames(classes.banner, classes.error)}>
        <div className={classes.box}>
          <ErrorIcon className={classes.icon} />
          <span className={classes.content}>{message}</span>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(DisplayMessage);
