$("#sigUsername ").on("keyup", (e) => {
  let input = e.target;
  let users = JSON.parse(localStorage.getItem("users")) ?? [];
  let msg = "<span id='msg'></span>";
  let error = false;
  users.forEach((element) => {
    if (element.username == input.value) {
      error = true;
    }
  });

  if (error) {
    if ($(input).next().attr("id") == undefined) {
      $(input).after(msg);
    }
    $(input).next().text("*Username not available.");
    $(input).next().css("color", "red");
  } else {
    if ($(input).next().text() == "*Username not available.") {
      $(input).next().text("*Username Available.");
      $(input).next().css("color", "green");
    }
  }
});
