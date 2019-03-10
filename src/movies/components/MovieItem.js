// @flow
import React, { Component } from "react";
import moment from "moment";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import Chip from "@material-ui/core/Chip";

import type { MovieType } from "../types//MovieType";
import {} from "../types/styles";
import Properties from "../../Properties";

const ImageRoot = Properties.image_root;

const styles = (theme: *): * => ({
  box: {
    width: "156px",
    padding: theme.spacing.unit,
    position: "relative"
  },
  img: {
    background: "#ffffff no-repeat center",
    backgroundSize: "cover",
    borderRadius: "2%",
    width: "150px",
    height: "230px",
    cursor: "pointer"
  },
  title: {
    height: "16px",
    lineHeight: "16px",
    fontSize: "0.875rem",
    color: "#E6F7FF",
    textAlign: "left",
    marginTop: "12px",
    marginBottom: "6px",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap"
  },
  date: {
    height: "14px",
    lineHeight: "14px",
    fontSize: "0.75rem",
    color: "#A1D1E6",
    textAlign: "left"
  },
  chip: {
    position: "absolute",
    top: "11px",
    left: "11px",

    color: "#FFFFFF",
    fontSize: "0.75rem"
  },
  green: {
    backgroundColor: "#01D277"
  },
  purple: {
    backgroundColor: "#4902A3"
  },
  red: {
    backgroundColor: "#D1225B"
  }
});

type MovieItemPropsType = {
  classes: { [key: string]: * },
  movie: MovieType
};

class MovieItem extends Component<MovieItemPropsType, *> {
  constructor(props: MovieItemPropsType) {
    super(props);
  }

  render(): * {
    const { classes, movie } = this.props;

    const url = ImageRoot + "/w185/" + movie.poster_path;

    let color = null;
    const rate = parseFloat(movie.vote_average) * 10;
    if (rate > 80) {
      color = "green";
    } else if (rate > 50) {
      color = "purple";
    } else {
      color = "red";
    }
    return (
      <div className={classes.box}>
        <div
          className={classes.img}
          style={{ backgroundImage: "url(" + url + ")" }}
        />
        <div className={classes.title}>{movie.title}</div>
        <div className={classes.date}>
          {moment(movie.release_date).format("MMMM YYYY")}
        </div>
        <Chip
          label={rate.toString() + "%"}
          className={classNames(classes.chip, classes[color])}
        />
      </div>
    );
  }
}

export default withStyles(styles)(MovieItem);
