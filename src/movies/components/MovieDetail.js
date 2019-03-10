// @flow
import React, { Component } from "react";
import moment from "moment";
import { Link } from "react-router";
import classNames from "classnames";
import withWidth from "@material-ui/core/withWidth";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import ArrowBack from "@material-ui/icons/ArrowBack";

import type { MovieType } from "../types/MovieType";
import { container, title } from "../types/styles";
import Properties from "../../Properties";
import { getMovieRuntime } from "../functions/movieRuntime";

const ImageRoot = Properties.image_root;

const styles = (theme: *): * => ({
  container,
  header: {
    width: "100%",
    height: "520px",
    background: "#ffffff no-repeat center",
    backgroundSize: "cover",
    [theme.breakpoints.down("sm")]: {
      height: "245px"
    }
  },
  icon: {
    color: "white",
    margin: "32px 0 0 24px",
    cursor: "pointer",
    "&:hover": {
      color: "#4902A3"
    }
  },
  img: {
    background: "#ffffff no-repeat center",
    backgroundSize: "cover",
    borderRadius: "2%",
    width: "150px",
    height: "230px",
    marginTop: "-75px"
  },
  headline: {
    fontFamily: "Montserrat",
    color: "#E3F4FC",
    fontSize: "1.75rem",
    fontWeight: "bold",
    lineHeight: "30px",
    marginTop: "20px"
  },
  subheader: {
    fontFamily: "Montserrat",
    color: "#B8D8E6",
    fontSize: "0.75rem",
    lineHeight: "21px",
    marginTop: "20px"
  },
  divider: {
    width: "100px",
    border: "1px solid #0F303D",
    boxSizing: "border-box",
    margin: "24px 0"
  },
  title: {
    ...title,
    marginBottom: "12px"
  },
  content: {
    fontSize: "1rem",
    lineHeight: "24px",
    color: "#9FBBC7"
  }
});

type MovieDetailPropsType = {
  classes: { [key: string]: * },
  width: string,
  movie: MovieType
};

class MovieDetail extends Component<MovieDetailPropsType, *> {
  render(): React$Element<*> {
    const { classes, movie } = this.props;

    let size = "/w1280/";
    if (this.props.width === "sm" || this.props.width === "xs") {
      size = "/w780/";
    }

    const backdropUrl = ImageRoot + size + movie.backdrop_path;
    const posterUrl = ImageRoot + "/w185/" + movie.poster_path;
    return (
      <div>
        <div
          className={classes.header}
          style={{ backgroundImage: "url(" + backdropUrl + ")" }}
        >
          <Link to="/">
            <ArrowBack className={classes.icon} />
          </Link>
        </div>
        <div className={classes.container}>
          <Grid container space={16}>
            <Grid item xs={6} md={4} lg={2}>
              <div
                className={classes.img}
                style={{ backgroundImage: "url(" + posterUrl + ")" }}
              />
            </Grid>
            <Grid item xs={6} md={8} lg={10}>
              <div className={classes.headline}>{movie.title}</div>
              <div className={classes.subheader}>
                {moment(movie.release_date).format("YYYY") +
                  " . " +
                  (parseFloat(movie.vote_average) * 10).toString() +
                  "% User Score"}
                <br />
                {getMovieRuntime(movie.runtime)}
              </div>
            </Grid>
            <Grid item xs={12} className={classes.divider} />
            <Grid item xs={12} className={classes.title}>
              Overview
            </Grid>
            <Grid item xs={12} className={classes.content}>
              {movie.overview}
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default withWidth()(withStyles(styles)(MovieDetail));
