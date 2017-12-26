    var search = document.querySelector(".search-link");
    var link = document.querySelector(".login-link");

    var popup_search = document.querySelector(".modal-search");
    var popup_login = document.querySelector(".modal-login");
        
    var form = popup_login.querySelector("form");
    var email = popup_login.querySelector("[name=email-enter]");
    var password = popup_login.querySelector("[name=password]");
    var storage = localStorage.getItem("email");

    var search_line = popup_search.querySelector("[name=search]");
    
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

    form.addEventListener("submit", function (evt) {
      if (!email.value || !password.value) {
        evt.preventDefault();
        popup_login.classList.add("modal-error");
      } else {
        localStorage.setItem("email", email.value);
      }
    });
   
    window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
        if (popup_login.classList.contains("modal-show") || popup_search.classList.contains("modal-show")) {
          popup_login.classList.remove("modal-show");
          popup_search.classList.remove("modal-show");
        }
      }
    });