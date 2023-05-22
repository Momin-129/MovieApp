//
import { fetchIndividual } from "./fetchShow/fetchIndividual.js";
import { fetchSimilar, fetchSimilarId } from "./fetchShow/fetchSimilar.js";
let users = JSON.parse(localStorage.getItem("users"));
let userId = parseInt(sessionStorage.getItem("sessionId")) - 1;
let favourites = [];
let favList = [];
let similar = [];
let recomendationsInfo = [];
if (userId >= 0) favourites = users[userId]["favourite"];

if (sessionStorage.getItem("sessionId") != null) {
  if (favourites.length == 0) {
  } else {
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
    let allRecomendations = await Promise.all(
      filteredArray.map(async (item) => {
        return await fetchSimilarId(item.id).then((data) => {
          return data.imdb_id;
        });
      })
    );

    allRecomendations.forEach((item) => {
      if (recomendations.indexOf(item) === -1) recomendations.push(item);
    });

    recomendationsInfo = [];
    recomendationsInfo = await Promise.all(
      recomendations.map(async (item) => {
        return await fetchIndividual(item).then((data) => {
          return data;
        });
      })
    );
  }
}

export function showRecommended() {
  if (favourites.length != 0) {
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
}
//
