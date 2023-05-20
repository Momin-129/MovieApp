$("#header").append(`<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
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
          <a class="nav-link" href="../index.html">
            Home
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            About
          </a>
        </li>
        <li class="nav-item" id="favouriteList">
          <a class="nav-link"  href="#">
            Favourites
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="../html/login.html">
            Signup/Signin
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>`);

if (sessionStorage.getItem("sessionId") == null)
  document.getElementById("favouriteList").style.display = "none";
