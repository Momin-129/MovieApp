import { fetchMovies } from "./fetchShow/fetchMovies.js";
import { showMovies } from "./fetchShow/showMovies.js";
import { fetchIndividual } from "./fetchShow/fetchIndividual.js";
import { fetchSimilar, fetchSimilarId } from "./fetchShow/fetchSimilar.js";

let users = JSON.parse(localStorage.getItem("users"));
let userId = parseInt(sessionStorage.getItem("sessionId")) - 1;
let favourites = [];
let favList = [];
let similar = [];

if (userId >= 0) favourites = users[userId]["favourite"];

if (sessionStorage.getItem("url") == null)
  sessionStorage.setItem("url", window.location.href);

let movieName = "";

$("#search").on("keyup", (e) => {
  movieName = e.target.value;
  fetchMovies(movieName).then((data) => {
    showMovies(data);
  });
});

if (favourites.length == 0)
  $("body").append("<h2 class='text-center'>No Recomendations...</h2>");
else {
  favList = await Promise.all(
    favourites.map(async (item) => {
      return await fetchIndividual(item).then((data) => {
        return data.imdbID;
      });
    })
  );

  similar = await Promise.all(
    favList.map(async (imdbID) => {
      return await fetchSimilar(imdbID).then((data) => {
        if (data.results !== undefined) return data.results[0];
      });
    })
  );

  const filteredArray = similar.filter(function (element) {
    return element !== undefined;
  });
  let recomendations = [];
  recomendations = await Promise.all(
    filteredArray.map(async (item) => {
      return await fetchSimilarId(item.id).then((data) => {
        return data.imdb_id;
      });
    })
  );

  let recomendationsInfo = [];
  recomendationsInfo = await Promise.all(
    recomendations.map(async (item) => {
      return await fetchIndividual(item).then((data) => {
        return data;
      });
    })
  );

  $("#mainContainer").html("");
  $("#mainContainer").append(
    `<h5 class='text-center'>Recomended for you...</h5>`
  );
  $("#mainContainer").append(`<div class="row mt-5"></div>`);
  let row = $("#mainContainer").children().last();
  let src = "";
  for (let each of recomendationsInfo) {
    if (each["Poster"] == "N/A") src = `${url}/images/default.png`;
    else src = each["Poster"];
    $(row).append(`
          <div class="col-md-4 mt-5" >
            <div class="movieCard">
             <img src="${src}" class="mx-auto" alt="Cinque Terre" />
              <p id="title">${each["Title"]}</p>
              <p id="year">${each["Year"]}</p>
            </div>
           <button id="viewMore" class="btn mt-2" value="${each["imdbID"]}">View More Details</button>
          </div>
            `);
  }
}
