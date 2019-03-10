// @flow
import React, { Component } from "react";
import { connect } from "react-redux";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";

import type { StateType, DispatchType } from "../types/redux";
import type { MovieType } from "../types//MovieType";
import MovieItem from "../components/MovieItem";
import Loading from "../components/Loading";

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

const mapStateToProps = (state: StateType): * => ({
  movies: state.movie.movies
});

export default connect(mapStateToProps)(withStyles(styles)(MovieList));
