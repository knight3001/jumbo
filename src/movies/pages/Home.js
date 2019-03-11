// @flow
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import type { StateType, DispatchType } from "../types/redux";
import type { MovieType } from "../types//MovieType";
import HomeHeader from "../components/HomeHeader";
import HomeBody from "../components/HomeBody";
import { fetchPopularMovies } from "../actions/movieActions";

type HomePropsType = {
  movies: Array<MovieType>,
  actions: { fetchPopularMovies: Function },
  query: string,
  searchList: Array<MovieType>
};

class Home extends Component<HomePropsType, *> {
  constructor(props: HomePropsType) {
    super(props);
  }

  componentDidMount() {
    if (!this.props.movies) {
      this.props.actions.fetchPopularMovies();
    }
  }

  render(): * {
    const movies = this.props.query ? this.props.searchList : this.props.movies;
    return (
      <div>
        <HomeHeader />
        <HomeBody movies={movies} query={this.props.query} />
      </div>
    );
  }
}

const mapStateToProps = (state: StateType): * => ({
  movies: state.movie.movies,
  query: state.movie.query,
  searchList: state.movie.searchList
});

const mapDispatchToProps = (dispatch: DispatchType): DispatchType => ({
  actions: bindActionCreators({ fetchPopularMovies }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
