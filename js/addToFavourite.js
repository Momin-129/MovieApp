let movieId = localStorage.getItem("id");
let userId = parseInt(sessionStorage.getItem("sessionId")) - 1;
let users = JSON.parse(localStorage.getItem("users")) ?? [];

for (element in users[userId]) {
  if (element == "favourite") {
    for (let fav of users[userId][element]) {
      if (fav === movieId) {
        $("#addFavourite").css("display", "none");
        $("#removeFavourite").css("display", "block");
      }
    }
  }
}

$("#addFavourite").on("click", () => {
  users[userId]["favourite"].push(movieId);
  localStorage.setItem("users", JSON.stringify(users));
  $("#addFavourite").css("display", "none");
  $("#removeFavourite").css("display", "block");
});

$("#removeFavourite").on("click", () => {
  const index = users[userId]["favourite"].indexOf(movieId);
  if (index > -1) {
    users[userId]["favourite"].splice(index, 1); // 2nd parameter means remove one item only
  }
  localStorage.setItem("users", JSON.stringify(users));
  $("#addFavourite").css("display", "block");
  $("#removeFavourite").css("display", "none");
});
