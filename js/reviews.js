users = JSON.parse(localStorage.getItem("users"));
// To check if user is loged in or not
if (sessionStorage.getItem("sessionId") == null) {
  document.getElementById("addReview").style.display = "none";
} else {
  document.getElementById("logToAdd").style.display = "none";
}

// To check if any reviews are stored or not.
if (JSON.parse(localStorage.getItem("reviews"))) {
  let reviews = JSON.parse(localStorage.getItem("reviews"));
  $("#reviewList").html("");
  reviews.forEach((element) => {
    if (element.imdbId == movieId) {
      let user = users[element.userId]["username"];
      let review = element.review;
      $("#reviewList").append(`<div class='reviewBox'></div>`);
      let box = $("#reviewList").children().last();
      $(box).append(`<div class='user'>${user}</div>`);
      $(box).append(`<hr>`);
      $(box).append(`<div class='content'>${review}</div>`);
    }
  });
} else {
  $("#reviewList").append("<h3 class='text-center'>No reviews yet...</h3>");
}

$("#logToAdd").on("click", () => {
  let url = localStorage.getItem("url");
  window.location.href = `${url}/html/login.html`;
});

$("#addReview").on("click", () => {
  $("#popUp").append(`<div class="popup">
      <p><textarea id="userReview" rows="5" class="form-control" placeholder="Add a review..."></textarea></p>
      <button
        type="button"
        class="btn"
        onclick="addReview();"
      >
        ADD
      </button>
    </div>`);

  $(".popup").css("display", "block");
  $(".popup").css("background-color", "#80aaff");
});

function addReview() {
  let reviews = JSON.parse(localStorage.getItem("reviews")) ?? [];
  let review = {};
  let userReview = $("#userReview").val();
  let movieId = localStorage.getItem("id");
  let userId = parseInt(sessionStorage.getItem("sessionId")) - 1;
  $(".popup").css("display", "none");

  review.imdbId = movieId;
  review.userId = userId;
  review.review = userReview;
  reviews.push(review);
  localStorage.setItem("reviews", JSON.stringify(reviews));
  let url = localStorage.getItem("url");
  window.location.href = `${url}/html/movieDetails.html`;
}
