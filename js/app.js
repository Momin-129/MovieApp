import { fetchMovies } from "./fetchShow/fetchMovies.js";
import { showMovies } from "./fetchShow/showMovies.js";
if (sessionStorage.getItem("url") == null)
  sessionStorage.setItem("url", window.location.href);

let movieName = "";

$("#search").on("keyup", (e) => {
  movieName = e.target.value;
  fetchMovies(movieName).then((data) => {
    showMovies(data);
  });
});
