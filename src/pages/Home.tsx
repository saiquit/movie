import React from "react";
import HeroSection from "../components/HeroSection";
import MovieList from "../components/MovieList";
import TopNavbar from "../components/Navbar";
import { movies } from "../movies";

const Home = () => {
  return (
    <>
      <TopNavbar />
      <HeroSection title="Movie App" />
      <MovieList movies={movies} />
    </>
  );
};

export default Home;
