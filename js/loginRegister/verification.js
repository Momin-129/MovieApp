$("input").on("keyup", (e) => {
  let input = e.target;
  let users = JSON.parse(localStorage.getItem("users")) ?? [];
  users.forEach((element) => {});
});
