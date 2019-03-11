// @flow
import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";

import type { MovieType } from "../types/MovieType";
import MovieItem from "./MovieItem";
import Loading from "./Loading";
import DisplayMessage from "./DisplayMessage";

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

    if (movies && movies.length > 0) {
      return (
        <div className={classes.wrapper}>
          {movies.map(
            (movie: MovieType, i: number): * => (
              <MovieItem movie={movie} key={i} />
            )
          )}
        </div>
      );
    } else if (movies && movies.length === 0) {
      return <DisplayMessage message="No Movie Found" type="info" />;
    } else {
      return <Loading />;
    }
  }
}

export default withStyles(styles)(MovieList);
