import { fetchMovies } from "./fetchMovies.js";
import { showMovies } from "./showMovies.js";

let movieName = "";

$("#search").on("keyup", (e) => {
  movieName = e.target.value;
  fetchMovies(movieName).then((data) => {
    showMovies(data);
  });
});
