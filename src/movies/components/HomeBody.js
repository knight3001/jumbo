// @flow
import React, { Component } from "react";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";

import type { MovieType } from "../types/MovieType";
import { container, title } from "../types/styles";
import MovieList from "./MovieList";
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
  classes: { [key: string]: * },
  movies: Array<MovieType>,
  query: string
};

class HomeBody extends Component<HomeBodyPropsType, *> {
  constructor(props: HomeBodyPropsType) {
    super(props);
  }

  render(): * {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <SearchBox query={this.props.query} />
        <div className={classes.title}>
          {this.props.query ? "Search Result" : "Popular Movies"}
        </div>
        <MovieList movies={this.props.movies} />
      </div>
    );
  }
}

export default withStyles(styles)(HomeBody);
