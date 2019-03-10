// @flow
import React, { Component } from "react";
import { connect } from "react-redux";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputAdornment from "@material-ui/core/InputAdornment";
import CircularProgress from "@material-ui/core/CircularProgress";
import SearchIcon from "@material-ui/icons/Search";

import type { StateType, DispatchType } from "../types/redux";
import type { MovieType } from "../types/MovieType";
import Loading from "../components/Loading";

const styles = (theme: *): * => ({
  root: {
    marginTop: "-21px",
    marginBottom: "40px",
    backgroundColor: "white",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
    borderRadius: "22px",
  },
  input: {
    fontSize: "1rem",
    width: "calc(100% - 24px)",
    transition: "white",
    padding: "13px 20px",
    color: "#01D277",
  },
  icon: {
    color: "#01D277",
  },
  loader: {
    color: "#01D277",
  }
});

type SearchBoxPropsType = {
  classes: { [key: string]: * }
};

type SearchBoxStatesType = {
  inputVal: string,
  loading: boolean
};

class SearchBox extends Component<SearchBoxPropsType, SearchBoxStatesType> {
  timeout: *;
  constructor(props: SearchBoxPropsType) {
    super(props);
    this.state = {
      inputVal: "",
      loading: false
    };
  }

  handleChange = (e: Event): * => {
    const value = e.target.value;
    this.setState({ inputVal: value });

    clearTimeout(this.timeout);
    this.timeout = setTimeout(
      function(val: string) {
        //this.props.fetchPeople(val, true);
      }.bind(this, value),
      500
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
              {this.state.loading ? (
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
  movies: state.movie.movies
});

export default connect(mapStateToProps)(withStyles(styles)(SearchBox));
