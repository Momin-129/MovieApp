let users = JSON.parse(localStorage.getItem("users"));
let userId = parseInt(sessionStorage.getItem("sessionId")) - 1;
let favourites = users[userId]["favourite"];

if (favourites.length == 0)
  $("body").append("<h2 class='text-center'>No Favourites...</h2>");
else {
  console.log(favourites);
}
