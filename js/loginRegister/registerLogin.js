function Register() {
  let users = JSON.parse(localStorage.getItem("users")) ?? [];
  let userId = 0;
  if (localStorage.getItem("userId")) {
    userId = parseInt(localStorage.getItem("userId"));
  }

  const regForm = document.querySelector("#sigForm");
  const formData = new FormData(regForm);
  let obj = {};
  obj = Object.fromEntries(formData);
  console.log(userId);

  if (userId == 0) {
    obj.userId = 1;
    localStorage.setItem("userId", 2);
  } else {
    obj.userId = userId;
    userId++;
    localStorage.setItem("userId", userId);
  }

  users.push(obj);
  localStorage.setItem("users", JSON.stringify(users));
  regForm.reset();
}

export { Register };
