import { fetchIndividual } from "./fetchShow/fetchIndividual.js";
let users = JSON.parse(localStorage.getItem("users"));
let userId = parseInt(sessionStorage.getItem("sessionId")) - 1;
let favourites = users[userId]["favourite"];
let favList = [];
if (favourites.length == 0)
  $("body").append("<h2 class='text-center'>No Favourites...</h2>");
else {
  favList = await Promise.all(
    favourites.map(async (item) => {
      return await fetchIndividual(item).then((data) => {
        return data;
      });
    })
  );

  let url = sessionStorage.getItem("url");
  $("#mainContainer").html("");
  $("#mainContainer").append("<div class='row mt-5'>");
  $("#mainContainer").append("</div>");
  let row = $("#mainContainer").children().last();
  let src = "";

  for (let eachRecord of favList) {
    if (eachRecord["Poster"] == "N/A") src = `${url}/images/default.png`;
    else src = eachRecord["Poster"];
    $(row).append('<div class="col-md-4 mt-5">');
    $(row).append("</div>");
    let col = $(row).children().last();
    $(col).append('<div class="movieCard">');
    $(col).append("</div>");
    let movieCard = $(col).children().last();

    $(movieCard).append(
      `<img src="${src}" class="mx-auto" alt="Cinque Terre" />`
    );
    $(movieCard).append(`<p id="title">${eachRecord["Title"]}</p>`);
    $(movieCard).append(`<p id="year">${eachRecord["Year"]}</p>`);
    $(col).append(
      `<button id="viewMore" class="btn mt-2" value="${eachRecord["imdbID"]}">View More Details</button>`
    );
  }
}

$(document).on("click", "#viewMore", (e) => {
  localStorage.setItem("id", e.target.value);
  let url = sessionStorage.getItem("url");
  window.location.href = `${url}/html/movieDetails.html`;
});

$("#search").on("keyup", (e) => {
  let value = e.target.value;
  let url = window.location.href;
  $("#mainContainer").html("");
  $("#mainContainer").append("<div class='row mt-5'>");
  $("#mainContainer").append("</div>");
  let row = $("#mainContainer").children().last();
  let src = "";

  for (let eachRecord of favList) {
    if (eachRecord["Title"].toLowerCase().includes(value.toLowerCase())) {
      if (eachRecord["Poster"] == "N/A") src = `${url}/images/default.png`;
      else src = eachRecord["Poster"];
      $(row).append('<div class="col-md-4 mt-5">');
      $(row).append("</div>");
      let col = $(row).children().last();
      $(col).append('<div class="movieCard">');
      $(col).append("</div>");
      let movieCard = $(col).children().last();

      $(movieCard).append(
        `<img src="${src}" class="mx-auto" alt="Cinque Terre" />`
      );
      $(movieCard).append(`<p id="title">${eachRecord["Title"]}</p>`);
      $(movieCard).append(`<p id="year">${eachRecord["Year"]}</p>`);
      $(col).append(
        `<button id="viewMore" class="btn mt-2" value="${eachRecord["imdbID"]}">View More Details</button>`
      );
    }
  }
});
