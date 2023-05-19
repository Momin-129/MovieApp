import { fetchIndividual } from "./fetchIndividual.js";
let id = localStorage.getItem("id");

fetchIndividual(id).then((data) => {
  showIndividual(data);
});

function showIndividual(movie) {
  $("#thumbnail").attr("src", movie["Poster"]);
  $("#plot").text(movie["Plot"]);
  $("#title").text(movie["Title"]);
  $("#rating").text(movie["Rated"]);
  $("#genre").text(movie["Genre"]);
  $("#director").text(movie["Director"]);
  $("#writer").text(movie["Writer"]);
  $("#releaseDate").text(movie["Released"]);
  $("#runTime").text(movie["Runtime"]);
  $("#imdb").text(movie["imdbRating"]);
}
