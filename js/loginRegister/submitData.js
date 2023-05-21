import { PopUp } from "../popUp.js";

export function submitData() {
  let users = JSON.parse(localStorage.getItem("users")) ?? [];
  let userId = 0;
  if (localStorage.getItem("userId")) {
    userId = parseInt(localStorage.getItem("userId"));
  }

  const regForm = document.querySelector("#sigForm");
  const formData = new FormData(regForm);
  let obj = {};
  obj = Object.fromEntries(formData);

  if (userId == 0) {
    obj.userId = 1;
    localStorage.setItem("userId", 2);
  } else {
    obj.userId = userId;
    userId++;
    localStorage.setItem("userId", userId);
  }

  obj.favourite = [];

  users.push(obj);
  localStorage.setItem("users", JSON.stringify(users));
  regForm.reset();
  let title = "Registration";
  let content = "Registration successfull you can login now.";
  PopUp(title, content, "green");
}
