let url = localStorage.getItem("url");
$("#header").append(`<nav class="navbar navbar-expand-sm  navbar-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      MovieApp
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapsibleNavbar"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div
      class="collapse navbar-collapse justify-content-center"
      id="collapsibleNavbar"
    >
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="${url}">
            Home
          </a>
        </li>
        <li class="nav-item" id="favouriteList">
          <a class="nav-link"  href="${url}/html/favourites.html">
            Favourites
          </a>
        </li>
        <li class="nav-item" id="signin">
          <a class="nav-link" href="${url}/html/login.html">
            Signup/Signin
          </a>
        </li>
        <li class="nav-item" id="profile">
          <a class="nav-link" href="${url}/html/update.html">
             <i class="fa fa-user-circle"></i>
          </a>
        </li>
        <li class="nav-item" id="logout">
          <a class="nav-link">
            Logout
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>`);

if (sessionStorage.getItem("sessionId") == null) {
  document.getElementById("favouriteList").style.display = "none";
  document.getElementById("logout").style.display = "none";
  document.getElementById("profile").style.display = "none";
} else {
  document.getElementById("signin").style.display = "none";
}

$("#logout").on("click", () => {
  sessionStorage.removeItem("sessionId");
  let url = localStorage.getItem("url");
  window.location.href = `${url}`;
});
