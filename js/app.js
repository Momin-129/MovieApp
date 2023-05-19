import { fetchMovies } from "./fetchMovies.js";
import { showMovies } from "./showMovies.js";

const movieName = "Batman";

fetchMovies(movieName).then((data) => {
  showMovies(data);
});
