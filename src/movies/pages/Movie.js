// @flow
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import type { StateType, DispatchType } from "../types/redux";
import type { MovieType } from "../types/MovieType";
import { fetchMovieDetail } from "../actions/movieActions";
import Loading from "../components/Loading";
import DisplayMessage from "../components/DisplayMessage";
import MovieDetail from "../components/MovieDetail";

type MoviePropsType = {
  params: { [key: string]: * },
  movieDetails: { [key: string]: MovieType },
  actions: { fetchMovieDetail: Function }
};

type MovieStatesType = {
  id: string,
  movie: MovieType | null,
  isSuccess: boolean | null,
  message: string
};

class Movie extends Component<MoviePropsType, MovieStatesType> {
  constructor(props: MoviePropsType) {
    super(props);
    this.state = {
      id: props.params.id ? props.params.id : "",
      movie: null,
      isSuccess: null,
      message: ""
    };
  }

  componentDidMount() {
    if (!this.props.movieDetails || !this.props.movieDetails[this.state.id]) {
      this.props.actions.fetchMovieDetail(
        this.state.id,
        (movie: MovieType): Function =>
          this.setState({ movie: movie, isSuccess: true }),
        (message: string): Function =>
          this.setState({ isSuccess: false, message: message })
      );
    } else {
      this.setState({
        movie: this.props.movieDetails[this.state.id],
        isSuccess: true
      });
    }
  }

  render(): * {
    const { id, movie, isSuccess, message } = this.state;

    if (isSuccess) {
      return <MovieDetail movie={movie} />;
    } else if (isSuccess == false) {
      return <DisplayMessage message={message} type="error" />;
    } else {
      return <Loading />;
    }
  }
}

const mapStateToProps = (state: StateType): * => ({
  movieDetails: state.movie.movieDetails
});

const mapDispatchToProps = (dispatch: DispatchType): DispatchType => ({
  actions: bindActionCreators({ fetchMovieDetail }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movie);
