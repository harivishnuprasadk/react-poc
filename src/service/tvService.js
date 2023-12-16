const apiKey = 'b1e6e6c1e55ef5ef6e16760d4a9063a6';
const apiUrl = 'https://api.themoviedb.org/3/discover/tv'; // Update the API endpoint for TV shows

// Function to fetch TV show data
async function fetchTVShows() {
  try {
    const response = await fetch(`${apiUrl}?api_key=${apiKey}`);
    const data = await response.json();

    // Extract TV show titles and image URLs
    const tvShows = data.results.map((tvShow) => ({
      title: tvShow.name,
      imageUrl: `https://image.tmdb.org/t/p/w500${tvShow.poster_path}`,
    }));

    return tvShows;
  } catch (error) {
    console.error('Error fetching TV show data:', error);
  }
}

// Example usage for fetching TV shows
// fetchTVShows().then((tvShows) => console.log('TV Shows:', tvShows));

module.exports = fetchTVShows;
