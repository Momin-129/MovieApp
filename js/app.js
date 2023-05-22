import { fetchMovies } from "./fetchShow/fetchMovies.js";
import { showMovies } from "./fetchShow/showMovies.js";
import { showPopularMovies } from "./popularMovies.js";
import { showRecommended } from "./recommedations.js";

if (localStorage.getItem("url") == null)
  localStorage.setItem("url", window.location.href);

let movieName = "";

// To Search for movies
$("#search").on("keyup", (e) => {
  movieName = e.target.value;
  if (movieName.length == 0) {
    showPopularMovies();
  } else {
    fetchMovies(movieName).then((data) => {
      showMovies(data);
    });
  }
});
// To Search for movies end

// To show popular if no recomendations
showPopularMovies();

// To show recomendations according to favourites
showRecommended();
