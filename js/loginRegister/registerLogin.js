import { submitData } from "./submitData.js";
import { PopUp } from "../popUp.js";

export function Register() {
  let users = JSON.parse(localStorage.getItem("users")) ?? [];
  let username = $("#sigUsername");
  let email = $("#sigEmail");
  let password = $("#sigpswd");
  let msg = "<span id='msg'></span>";

  let validName = true,
    validEmail = true,
    error = false,
    validPassword = true;

  if ($(username).next().text() == "*Username not available.") {
    validName = false;
  } else validName = true;

  users.forEach((element) => {
    if (element.email == $(email).val()) {
      error = true;
    }
  });

  if (error) {
    validEmail = false;
    if ($(email).next().attr("id") == undefined) {
      $(email).after(msg);
    }
    $(email).next().text("*Email id already exists.");
    $(email).next().css("color", "red");
  } else {
    validEmail = true;
    if ($(email).next().attr("id") == "msg") {
      $(email).next().text("");
    }
  }

  if ($(password).val().length < 8) {
    validPassword = false;
    if ($(password).next().attr("id") == undefined) {
      $(password).after(msg);
    }
    $(password).next().text("*password must be of 8 characters.");
    $(password).next().css("color", "red");
  } else {
    validPassword = true;
    if ($(password).next().attr("id") == "msg") {
      $(password).next().text("");
    }
  }
  if (validName && validEmail && validPassword) submitData();
}

export function Login() {
  let users = JSON.parse(localStorage.getItem("users")) ?? [];
  let login = false;
  let userId = 0;
  let username = $("#username").val();
  let password = $("#pwd").val();
  users.forEach((element) => {
    if (element.username == username && element.password == password) {
      login = true;
      userId = element.userId;
      return;
    }
  });

  if (login) {
    sessionStorage.setItem("sessionId", userId);
    window.location.href = "../../index.html";
  } else {
    let title = "Login Failed";
    let content = "Invalid username or password.";
    PopUp(title, content);
  }
}
