import { fetchIndividual } from "./fetchShow/fetchIndividual.js";
import { fetchSimilarId } from "./fetchShow/fetchSimilar.js";
let listMovies = [];
let movie_id = [];

async function getPopularMovies() {
  let data = [];
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=f0da4eeabfc41aacee7225b73da8b902`
    );
    const responseData = await response.json();
    data = responseData;
  } catch (error) {}
  return data;
}

listMovies = await getPopularMovies().then((data) => {
  return data.results;
});

listMovies.forEach((element) => {
  movie_id.push(element.id);
});

let popularId = [];

popularId = await Promise.all(
  movie_id.map(async (item) => {
    return await fetchSimilarId(item).then((data) => {
      return data.imdb_id;
    });
  })
);

let popularMovies = [];
popularMovies = await Promise.all(
  popularId.map(async (item) => {
    return await fetchIndividual(item).then((data) => {
      return data;
    });
  })
);

export function showPopularMovies() {
  console.log("in");
  $("#mainContainer").html("");
  $("#mainContainer").append(`<div class="row mt-5"></div>`);
  let row = $(`#mainContainer`).children().last();
  let src = "";

  for (let each of popularMovies) {
    if (each["Poster"] == "N/A" || each["Poster"] == undefined)
      src = `${url}/images/default.png`;
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
