// @flow
import React, { Component } from "react";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";

const HomeHeaderStyles = (theme: *): * => ({
  header: {
    height: "250px",
    background:
      "radial-gradient(312.01px at 53.46% -21.35%, rgba(5, 112, 172, 0.46) 0%, rgba(8, 27, 35, 0) 100%)",
    position: "relative",
    overflow: "hidden",
  },
  logo: {
    width: "66px",
    height: "60px",
    margin: "0 auto",
    padding: "90px 0"
  },
  logoTitle: {
    fontSize: "0.75rem",
    color: "#01D277",
    textTransform: "uppercase",
    textAlign: "left",
    width: "50px",
    lineHeight: "14px",
    padding: "8px 0 0 14px"
  },
  line: {
    width: "162px",
    height: "4px",
    background: "rgba(1, 210, 119, 0.83)",
    borderRadius: "3.5px",
    transform: "rotate(-45deg)",
    position: "absolute",
  }
});

type HomeHeaderPropsType = {
  classes: { [key: string]: * }
};

class HomeHeader extends Component<HomeHeaderPropsType, *> {
  constructor(props: HomeHeaderPropsType) {
    super(props);
  }

  render(): * {
    const { classes } = this.props;
    return (
      <div className={classes.header}>
        <div
          className={classes.logo}
          style={{ background: "url(/images/Logo.svg) no-repeat center" }}
        >
          <div className={classes.logoTitle}>The Movie Db</div>
        </div>
        <div className={classes.line} style={{ top: "-22px", left: "2px" }} />
        <div className={classes.line} style={{ top: "22px", left: "2px" }} />
        <div className={classes.line} style={{ bottom: "70px", left: "-40px" }} />

        <div className={classes.line} style={{ top: "-22px", right: "2px" }} />
        <div className={classes.line} style={{ top: "22px", right: "2px" }} />
        <div className={classes.line} style={{ bottom: "70px", right: "24px" }} />
      </div>
    );
  }
}

export default withStyles(HomeHeaderStyles)(HomeHeader);
