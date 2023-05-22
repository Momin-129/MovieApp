import { fetchIndividual } from "./fetchShow/fetchIndividual.js";
let users = JSON.parse(localStorage.getItem("users"));
let userId = parseInt(sessionStorage.getItem("sessionId")) - 1;
let favourites = users[userId]["favourite"];
let favList = [];
let genre = [];

// Get favourite movies of a user if any
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

  // To display the favourite movies
  let url = sessionStorage.getItem("url");
  $("#mainContainer").html("");
  let src = "";

  for (let item of favList) {
    const word = item["Genre"].split(",")[0];
    if (genre.indexOf(word) === -1) {
      genre.push(word);
    }
  }

  genre.forEach((item) => {
    $("#genreOpitions").append(`<option value="${item}">${item}</option>`);
  });

  ShowAll();

  // To view more info about movie
  $(document).on("click", "#viewMore", (e) => {
    localStorage.setItem("id", e.target.value);
    let url = sessionStorage.getItem("url");
    window.location.href = `${url}/html/movieDetails.html`;
  });
}

function ShowAll() {
  $("#mainContainer").html("");
  $("#mainContainer").append(`<div class="row mt-5"></div>`);
  let row = $("#mainContainer").children().last();
  let src = "";
  for (let each of favList) {
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

$("#genreOpitions").on("change", (e) => {
  let item = $(e.target).val();
  if (item == "All") {
    ShowAll();
  } else {
    $("#mainContainer").html("");
    $("#mainContainer").append(`<div class="row mt-5"></div>`);
    let row = $(`#mainContainer`).children().last();
    let src = "";

    for (let each of favList) {
      let genre = each["Genre"].split(",")[0];
      if (genre == item) {
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
});
