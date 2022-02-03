const burgerMenu = document.querySelector("#burger");
const navbarMenu = document.querySelector("#nav-links");

burgerMenu.addEventListener("click", () => {
  navbarMenu.classlist.toggle("is-active");
});
