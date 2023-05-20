document.querySelector(".btn-light").addEventListener("click", () => {
  document.querySelector(".loginForm").style.display = "block";
  document.querySelector(".signForm").style.display = "none";
});

document.querySelector(".btn-dark").addEventListener("click", () => {
  document.querySelector(".loginForm").style.display = "none";
  document.querySelector(".signForm").style.display = "block";
});
