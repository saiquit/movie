import React, { useEffect, useState } from "react";
import { History } from "history";
import { genres, Movie, movies } from "../movies";
import HeroSection from "../components/HeroSection";
import TopNavbar from "../components/Navbar";
import { Grid } from "@material-ui/core";
import SingleMovie from "../components/SingleMovie";

interface Props {
  history: History;
  match: any;
}

const CategoryPage = (props: Props) => {
  const [fMovies, setFMovies] = useState([]);
  // eslint-disable-next-line
  const category: any = genres.find((data) => data.id == props.match.params.id);

  useEffect(() => {
    setFMovies((): any => {
      return movies.filter((mov) =>
        // eslint-disable-next-line
        mov.genre_ids.some((id) => id == props.match.params.id),
      );
    });
  }, [props.match.params.id]);

  return (
    <>
      <TopNavbar />
      <HeroSection title={category.name} />
      <Grid container>
        {fMovies.length ? (
          fMovies.map((data: Movie) => (
            <SingleMovie movie={data} key={data.id} />
          ))
        ) : (
          <h2>No Movies</h2>
        )}
      </Grid>
    </>
  );
};

export default CategoryPage;
