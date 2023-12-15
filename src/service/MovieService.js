const apiKey = 'b1e6e6c1e55ef5ef6e16760d4a9063a6';
const apiUrl = 'https://api.themoviedb.org/3/discover/movie';

// Function to fetch movie data
async function fetchMovies() {
  try {
    const response = await fetch(`${apiUrl}?api_key=${apiKey}`);
    const data = await response.json();

    // Extract movie titles and image URLs
    const movies = data.results.map((movie) => ({
      title: movie.title,
      imageUrl: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
    }));

    return movies;
  } catch (error) {
    console.error('Error fetching movie data:', error);
  }
}

// console.log(fetchMovies().then(movies=>console.log(movies)));
module.exports = fetchMovies;
