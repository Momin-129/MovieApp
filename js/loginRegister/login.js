import { Register, Login } from "./registerLogin.js";

document.querySelector(".btn-light").addEventListener("click", () => {
  document.querySelector(".loginForm").style.display = "block";
  document.querySelector(".signForm").style.display = "none";
});

document.querySelector(".btn-dark").addEventListener("click", () => {
  document.querySelector(".loginForm").style.display = "none";
  document.querySelector(".signForm").style.display = "block";
});

document.getElementById("register").addEventListener("click", (e) => {
  e.preventDefault();
  Register();
});

document.getElementById("loginBtn").addEventListener("click", (e) => {
  e.preventDefault();
  Login();
});
