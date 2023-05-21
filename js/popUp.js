export function PopUp(title, content) {
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

  $(".popup").css("display", "block");
}
