    var search = document.querySelector(".search-link");
    var link = document.querySelector(".login-link");
    var feedback = document.querySelector(".map-btn");

    var popup_search = document.querySelector(".modal-search");
    var popup_login = document.querySelector(".modal-login");
    var popup_feedback = document.querySelector(".modal-feedback");
    
    var form = popup_login.querySelector("form");
    var email = popup_login.querySelector("[name=email-enter]");
    var password = popup_login.querySelector("[name=password]");
    var storage = localStorage.getItem("email");

    var search_line = popup_search.querySelector("[name=search]");
    var feedback_line = popup_feedback.querySelector("[name=user-name]");

    var close = popup_feedback.querySelector(".modal-close");

    search.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup_search.classList.add("modal-show");
      search_line.focus();
    });
    
    link.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup_login.classList.add("modal-show");
      if (storage) {
        email.value = storage;
        password.focus();
      } else {
        email.focus();
      }
    });

    feedback.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup_feedback.classList.add("modal-show");
      feedback_line.focus();
    });
    
    form.addEventListener("submit", function (evt) {
      if (!email.value || !password.value) {
        evt.preventDefault();
        popup_login.classList.add("modal-error");
      } else {
        localStorage.setItem("email", email.value);
      }
    });

    close.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup_feedback.classList.remove("modal-show");
    });

    window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
        if (popup_login.classList.contains("modal-show") || popup_search.classList.contains("modal-show")) {
          popup_login.classList.remove("modal-show");
          popup_search.classList.remove("modal-show");
        }
      }
    });