let close = document.querySelector(".login-close-window-link");
let btn = document.querySelector("#btnMostrar");
let divPopUp = document.querySelector(".login-container");

close.addEventListener('click', () => {
  divPopUp.classList.remove("pop-up-top");
  divPopUp.classList.add("pop-up-bottom");
  btn.classList.remove("esconder");
  btn.classList.add("mostrar");
})


btn.addEventListener('click', () => {
  divPopUp.classList.remove("pop-up-bottom");
  divPopUp.classList.add("pop-up-top");
  btn.classList.remove("mostrar");
  btn.classList.add("esconder");
})