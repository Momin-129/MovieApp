export function PopUp(title, content, color) {
  $("#popUp").append(`<div class="popup">
      <p class="title">${title}</p>
      <hr />
      <p>${content}</p>
      <button
        type="button"
        class="btn"
        onclick="$('.popup').css('display','none');"
      >
        Close
      </button>
    </div>`);

  $(".title").css("background-color", color);
  $(".popup").css("display", "block");
}
