var popup_feedback = document.querySelector(".modal-feedback");
var feedback = document.querySelector(".map-btn");

var feedback_line = popup_feedback.querySelector("[name=user-name]");

var close = popup_feedback.querySelector(".modal-close");

 feedback.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup_feedback.classList.add("modal-show");
      feedback_line.focus();
    });

 close.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup_feedback.classList.remove("modal-show");
    });