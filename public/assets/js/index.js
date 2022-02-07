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

var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
