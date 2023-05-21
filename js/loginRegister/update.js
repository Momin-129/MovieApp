import { PopUp } from "../popUp.js";

let users = JSON.parse(localStorage.getItem("users"));
let userId = parseInt(sessionStorage.getItem("sessionId")) - 1;
let username = users[userId]["username"];
let email = users[userId]["email"];
let msg = "<span id='msg'></span>";
let validName = true,
  validEmail = true,
  validPass = true;

$("#username").val(username);
$("#email").val(email);
$("#password").val(users[userId]["password"]);

// To validate username
$("#username").on("keyup", (e) => {
  let input = e.target;
  for (let element of users) {
    if ($(input).val() != username) {
      if ($(input).val() == element.username) {
        validName = false;
        if ($(input).next().attr("id") == undefined) {
          $(input).after(msg);
        }
        $(input).next().text("*Username not available.");
        $(input).next().css("color", "red");
        break;
      } else if ($(input).next().text() == "*Username not available.") {
        validName = true;
        $(input).next().text("*Username available.");
        $(input).next().css("color", "green");
      }
    } else if ($(input).next().text() == "*Username not available.") {
      validName = true;
      $(input).next().text("");
    }
  }
});

// To validate email
$("#email").on("keyup", (e) => {
  let input = e.target;
  for (let element of users) {
    if ($(input).val() != email) {
      if ($(input).val() == element.email) {
        validEmail = false;
        if ($(input).next().attr("id") == undefined) {
          $(input).after(msg);
        }
        $(input).next().text("*Email already exists.");
        $(input).next().css("color", "red");
        break;
      } else if ($(input).next().text() == "*Email already exists.") {
        validEmail = true;
        $(input).next().text("");
      }
    } else if ($(input).next().text() == "*Email already exists.") {
      validEmail = true;
      $(input).next().text("");
    }
  }
});

$("#update").click((e) => {
  e.preventDefault();
  Update();
});

function Update() {
  let input = $("#password");
  if ($(input).val().length < 8) {
    validPass = false;
    if ($(input).next().attr("id") == undefined) {
      $(input).after(msg);
    }
    $(input).next().text("*Password should be of atleast 8 characters.");
    $(input).next().css("color", "red");
  } else if (
    $(input).next().text() == "*Password should be of atleast 8 characters."
  ) {
    validPass = true;
    $(input).next().text("");
  }
  if (validName && validEmail && validPass) {
    users[userId]["username"] = $("#username").val();
    users[userId]["email"] = $("#email").val();
    users[userId]["password"] = $("#password").val();
    console.log(users[userId]);
    localStorage.setItem("users", JSON.stringify(users));
    let title = "Updation";
    let content = "Details were updated.";
    PopUp(title, content, "green");
  }
}
