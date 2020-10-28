import React from "react";
import { Movie } from "../movies";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  createStyles,
  Grid,
  IconButton,
  makeStyles,
  Theme,
  Typography,
  Badge,
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import { ThumbUp, Grade, ArrowForwardIos } from "@material-ui/icons";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: "20px",
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
    avatar: {
      backgroundColor: red[500],
    },
  }),
);

interface Props {
  movie: Movie;
}
const SingleMovie = ({ movie }: Props) => {
  const classes = useStyles();
  return (
    <Grid className={classes.root} item md={3} spacing={2} xs={12}>
      <Card>
        <CardHeader
          avatar={
            <Avatar
              aria-label="movie"
              className={classes.avatar}
              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            />
          }
          // action={
          //   <IconButton aria-label="settings">
          //     <MoreVertIcon />
          //   </IconButton>
          // }
          title={
            movie.title.length >= 25
              ? movie.title.substr(0, 25) + "..."
              : movie.title
          }
          subheader={movie.release_date}
        />
        <CardMedia
          className={classes.media}
          image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          title={movie.title}
          style={{ height: 100 }}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {movie.overview.length >= 150
              ? movie.overview.substr(0, 150) + "..."
              : movie.overview}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Badge badgeContent={movie.vote_count} max={9999} color="primary">
              <ThumbUp />
            </Badge>
          </IconButton>
          <IconButton aria-label="share">
            <Badge badgeContent={movie.vote_average} max={9999} color="error">
              <Grade />
            </Badge>
          </IconButton>
          <Link
            className={classes.expand}
            to={{
              pathname: `/${movie.id}`,
              state: movie,
            }}
          >
            <IconButton aria-label="show more">
              <ArrowForwardIos />
            </IconButton>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default SingleMovie;
