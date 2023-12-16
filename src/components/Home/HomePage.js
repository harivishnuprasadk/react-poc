import React, { useEffect, useState } from "react";
import MainHeader from "./MainHeader";
import Cover from "./Cover";
import Carousel from "./Carousel";
import fetchMovies  from "../../service/movieService";

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [tv, setTv] = useState([]);

  useEffect(()=>{
    async function fetchData() {
      try {
        const moviesData = await fetchMovies();
        setMovies(moviesData);
        //console.log
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    }
    fetchData();
  },[]);
  
  return (
    <div className="home-page">
      <MainHeader />
      <Cover/>
      <Carousel images={movies} title='My List'/>
      <Carousel images={movies} title='TV Shows'/>
      <Carousel images={movies} title='Movies'/>
    </div>
  );
}

export default HomePage;
