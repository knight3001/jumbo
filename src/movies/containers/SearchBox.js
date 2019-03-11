// @flow
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputAdornment from "@material-ui/core/InputAdornment";
import CircularProgress from "@material-ui/core/CircularProgress";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

import type { StateType, DispatchType } from "../types/redux";
import type { MovieType } from "../types/MovieType";
import Loading from "../components/Loading";
import { SearchMovies, setQuery } from "../actions/movieActions";

const styles = (theme: *): * => ({
  root: {
    marginTop: "-21px",
    marginBottom: "40px",
    backgroundColor: "white",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
    borderRadius: "22px"
  },
  input: {
    fontSize: "1rem",
    width: "calc(100% - 24px)",
    transition: "white",
    padding: "13px 20px",
    color: "#01D277"
  },
  icon: {
    color: "#01D277"
  },
  loader: {
    color: "#01D277"
  },
  click: {
    cursor: "pointer"
  }
});

type SearchBoxPropsType = {
  classes: { [key: string]: * },
  actions: { SearchMovies: Function, setQuery: Function },
  isSearching: boolean,
  query: string
};

type SearchBoxStatesType = {
  inputVal: string
};

class SearchBox extends Component<SearchBoxPropsType, SearchBoxStatesType> {
  timeout: *;
  constructor(props: SearchBoxPropsType) {
    super(props);
    this.state = {
      inputVal: props.query ? props.query : ""
    };
  }

  handleChange = (e: Event): * => {
    const value = e.target.value;
    this.setState({ inputVal: value });

    clearTimeout(this.timeout);
    this.timeout = setTimeout(
      function(val: string) {
        this.props.actions.SearchMovies(this.state.inputVal.trim());
      }.bind(this, value),
      500
    );
  };

  clearSearch = (): * => {
    this.setState(
      { inputVal: "" },
      (): * => {
        this.props.actions.setQuery("");
      }
    );
  };

  render(): * {
    const { classes } = this.props;

    return (
      <FormControl classes={{ root: classes.root }} fullWidth={true}>
        <Input
          id="inputVal"
          name="inputVal"
          value={this.state.inputVal}
          classes={{
            input: classes.input
          }}
          onChange={this.handleChange}
          fullWidth={true}
          disableUnderline={true}
          placeholder="Search"
          endAdornment={
            <InputAdornment position="start">
              {this.state.inputVal && (
                <CloseIcon
                  className={classNames(classes.icon, classes.click)}
                  onClick={this.clearSearch}
                />
              )}
              {this.props.isSearching ? (
                <CircularProgress
                  size={24}
                  color="primary"
                  className={classes.loader}
                />
              ) : (
                <SearchIcon className={classes.icon} />
              )}
            </InputAdornment>
          }
        />
      </FormControl>
    );
  }
}

const mapStateToProps = (state: StateType): * => ({
  isSearching: state.movie.isSearching
});

const mapDispatchToProps = (dispatch: DispatchType): DispatchType => ({
  actions: bindActionCreators({ SearchMovies, setQuery }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(SearchBox));
