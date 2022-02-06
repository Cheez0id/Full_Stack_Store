//Mobile Functionality
const burgerMenu = document.querySelector("#burger");
const navbarMenu = document.querySelector("#nav-links");

burgerMenu.addEventListener("click", () => {
  navbarMenu.classList.toggle("is-active");
});

//modal
const loginButton = document.querySelector("#login");
const modalBg = document.querySelector(".modal-background");
const modal = document.querySelector(".modal");

loginButton.addEventListener("click", () => {
  modal.classList.add("is-active");
});

modalBg.addEventListener("click", () => {
  modal.classList.remove("is-active");
});
