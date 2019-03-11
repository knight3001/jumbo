// @flow
import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";

import type { MovieType } from "../types/MovieType";
import MovieItem from "./MovieItem";
import Loading from "./Loading";

const styles = (theme: *): * => ({
  wrapper: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center"
  }
});

type MovieListPropsType = {
  classes: { [key: string]: * },
  movies: Array<MovieType>
};

class MovieList extends Component<MovieListPropsType, *> {
  constructor(props: MovieListPropsType) {
    super(props);
  }

  render(): * {
    const { classes, movies } = this.props;

    if (movies) {
      return (
        <div className={classes.wrapper}>
          {movies.map(
            (movie: MovieType, i: number): * => (
              <MovieItem movie={movie} key={i} />
            )
          )}
        </div>
      );
    } else {
      return <Loading />;
    }
  }
}

export default withStyles(styles)(MovieList);
