import { fetchMovies } from "./fetchShow/fetchMovies.js";
import { showMovies } from "./fetchShow/showMovies.js";
sessionStorage.setItem("url", window.location.href);

let movieName = "";

$("#search").on("keyup", (e) => {
  movieName = e.target.value;
  fetchMovies(movieName).then((data) => {
    showMovies(data);
  });
});
