import React, { useEffect, useState } from "react";
import MainHeader from "./MainHeader";
import Cover from "./Cover";
import Carousel from "./Carousel";
import fetchMovies from "../../service/movieService";
import fetchTVShows from '../../service/tvService';
import MainFooter from "./MainFooter";

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [tv, setTv] = useState([]);
  const [combinedData, setCombinedData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        // Use Promise.all to wait for both fetchMovies and fetchTVShows to complete
        const [moviesData, tvData] = await Promise.all([fetchMovies(), fetchTVShows()]);
        
        setMovies(moviesData);
        setTv(tvData);
        
        const slicedMovies = moviesData.slice(0, 2);
        const slicedTV = tvData.slice(0, 2);
        
        const combinedDataArray = [...slicedMovies, ...slicedTV];
        setCombinedData(combinedDataArray);
        console.log(combinedDataArray);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    }

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only on mount

  return (
    <div className="home-page">
      <MainHeader />
      <Cover />
      <Carousel images={combinedData} title='My List' />
      <Carousel images={movies} title='Movies' />
      <Carousel images={tv} title='TV Shows' />
      <MainFooter/>
    </div>
  );
}

export default HomePage;
