// @flow
import React, { Component } from "react";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";

import { container, title } from "../types/styles";
import MovieList from "../containers/MovieList";
import SearchBox from "../containers/SearchBox";

const styles = (theme: *): * => ({
  container,
  title: {
    ...title,
    height: "24px",
    paddingLeft: "6%",
    paddingRight: "6%",
    marginBottom: "4px"
  }
});

type HomeBodyPropsType = {
  classes: { [key: string]: * }
};

class HomeBody extends Component<HomeBodyPropsType, *> {
  constructor(props: HomeBodyPropsType) {
    super(props);
  }

  render(): * {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <SearchBox />
        <div className={classes.title}>Popular Movies</div>
        <MovieList />
      </div>
    );
  }
}

export default withStyles(styles)(HomeBody);
