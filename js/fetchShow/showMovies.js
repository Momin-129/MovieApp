export function showMovies(data) {
  if (data.Response == "True") {
    let url = window.location.href;
    let movies = data.Search;
    $("#mainContainer").html("");
    $("#mainContainer").append("<div class='row mt-5'>");
    $("#mainContainer").append("</div>");
    let row = $("#mainContainer").children().last();
    let src = "";
    for (let eachRecord in movies) {
      if (movies[eachRecord]["Poster"] == "N/A")
        src = `${url}/images/default.png`;
      else src = movies[eachRecord]["Poster"];

      $(row).append('<div class="col-md-4 mt-5">');
      $(row).append("</div>");
      let col = $(row).children().last();
      $(col).append('<div class="movieCard">');
      $(col).append("</div>");
      let movieCard = $(col).children().last();

      $(movieCard).append(
        `<img src="${src}" class="mx-auto" alt="Cinque Terre" />`
      );
      $(movieCard).append(`<p id="title">${movies[eachRecord]["Title"]}</p>`);
      $(movieCard).append(`<p id="year">${movies[eachRecord]["Year"]}</p>`);
      $(col).append(
        `<button id="viewMore" class="btn mt-2" value="${movies[eachRecord]["imdbID"]}">View More Details</button>`
      );
    }
  } else {
    $("#mainContainer").html(
      "<h2 class='text-center'>No movie with this name...</h2>"
    );
  }
}

$(document).on("click", "#viewMore", (e) => {
  localStorage.setItem("id", e.target.value);
  let url = window.location.href;
  console.log(url);
  window.location.href = `${url}/html/movieDetails.html`;
});
