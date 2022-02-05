//Mobiel Functionality
const burgerMenu = document.querySelector("#burger");
const navbarMenu = document.querySelector("#nav-links");

burgerMenu.addEventListener("click", () => {
  navbarMenu.classList.toggle("is-active");
});

//modal
