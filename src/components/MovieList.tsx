import { Grid } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import React, { useState } from "react";
import { Movie } from "../movies";
import SingleMovie from "./SingleMovie";

interface Props {
  movies: Movie[];
}

const MovieList = ({ movies }: Props) => {
  const [filteredMovie, setFilteredMovie] = useState(movies.slice(0, 8));
  const handleChange:
    | ((event: React.ChangeEvent<unknown>, page: number) => void)
    | undefined = (e, page) => {
    const lastMovie = page * 8;
    const firstPage = lastMovie - 8;
    setFilteredMovie(movies.slice(firstPage, lastMovie));
  };
  return (
    <>
      <Grid container>
        {filteredMovie.map((data) => (
          <SingleMovie movie={data} key={data.id} />
        ))}
      </Grid>
      <Grid style={{ display: "flex", justifyContent: "center", padding: 50 }}>
        <Pagination
          count={Math.ceil(movies.length / 8)}
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
        />
      </Grid>
    </>
  );
};

export default MovieList;
