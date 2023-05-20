export function showMovies(data) {
  if (data.Response == "True") {
    let movies = data.Search;
    $("#mainContainer").html("");
    $("#mainContainer").append("<div class='row mt-5'>");
    $("#mainContainer").append("</div>");
    let row = $("#mainContainer").children().last();
    for (let eachRecord in movies) {
      $(row).append('<div class="col-md-4 mt-5">');
      $(row).append("</div>");
      let col = $(row).children().last();
      $(col).append('<div class="movieCard">');
      $(col).append("</div>");
      let movieCard = $(col).children().last();

      $(movieCard).append(
        `<img src="${movies[eachRecord]["Poster"]}" class="mx-auto" alt="Cinque Terre" />`
      );
      $(movieCard).append(`<p id="title">${movies[eachRecord]["Title"]}</p>`);
      $(movieCard).append(`<p id="year">${movies[eachRecord]["Year"]}</p>`);
      $(col).append(
        `<button id="viewMore" class="btn mt-2" value="${movies[eachRecord]["imdbID"]}">View More Details</button>`
      );
    }
  } else {
    $("#mainContainer").html("<b>No movie with this name...</b>");
  }
}

$(document).on("click", "#viewMore", (e) => {
  localStorage.setItem("id", e.target.value);
  window.location.href = "../html/movieDetails.html";
});
