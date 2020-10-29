import React from "react";
import HeroSection from "../components/HeroSection";
import MovieList from "../components/MovieList";
import TopNavbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <TopNavbar />
      <HeroSection />
      <MovieList />
    </>
  );
};

export default Home;
