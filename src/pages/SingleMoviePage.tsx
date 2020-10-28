import {
  Badge,
  CardActions,
  Chip,
  createStyles,
  Grid,
  IconButton,
  makeStyles,
  Theme,
} from "@material-ui/core";
import { ArrowBack, Grade, ThumbUp } from "@material-ui/icons";
import React from "react";
import { Movie, genres } from "../movies";
import { History } from "history";

interface Props {
  location: LocationProps;
  history: History;
}
interface LocationProps {
  state: Movie;
}

const SingleMoviePage = ({ location, history }: Props) => {
  let movie: Movie = location.state;
  const useStyle = makeStyles((theme: Theme) =>
    createStyles({
      coverImage: {
        backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})`,
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      },
      overlay: {
        height: "100%",
        backgroundColor: "#00000082",
      },
      posterImage: {
        height: "100vh",
        [theme.breakpoints.down("md")]: {
          height: 350,
          margin: "0 auto",
        },
      },
      heading: {
        fontSize: 65,
      },
      textCover: {
        color: "white",
        [theme.breakpoints.down("md")]: {
          backgroundColor: "black",
          textAlign: "center",
          padding: "25px",
        },
      },
      chip: {
        margin: theme.spacing(1),
      },
      arrowBack: {
        position: "absolute",
        top: 10,
        left: 10,
        backgroundColor: "white",
      },
    }),
  );
  const classes = useStyle();

  return (
    <>
      <div className={classes.coverImage}>
        <div className={classes.overlay}>
          <Grid container>
            <Grid style={{ display: "flex" }} item md={6} sm={12} xs={12}>
              <IconButton
                onClick={() => history.goBack()}
                className={classes.arrowBack}
              >
                <ArrowBack />
              </IconButton>
              <img
                className={classes.posterImage}
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            </Grid>
            <Grid className={classes.textCover} item md={6} sm={12} xs={12}>
              <h1 className={classes.heading}>{movie.title}</h1>
              <p style={{ lineHeight: "1.5rem", paddingRight: 35 }}>
                {movie.overview}
              </p>
              {movie.genre_ids.map((data) =>
                genres.map(
                  (gen) =>
                    gen.id === data && (
                      <Chip
                        color="secondary"
                        className={classes.chip}
                        label={gen.name}
                      />
                    ),
                ),
              )}
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <Badge
                    badgeContent={movie.vote_count}
                    max={9999}
                    color="primary"
                  >
                    <ThumbUp color="secondary" />
                  </Badge>
                </IconButton>
                <IconButton aria-label="share">
                  <Badge
                    badgeContent={movie.vote_average}
                    max={9999}
                    color="error"
                  >
                    <Grade color="secondary" />
                  </Badge>
                </IconButton>
              </CardActions>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default SingleMoviePage;
