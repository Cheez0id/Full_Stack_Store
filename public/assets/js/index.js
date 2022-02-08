//Mobile Functionality
const burgerMenu = document.querySelector("#burger");
const navbarMenu = document.querySelector("#nav-links");

burgerMenu.addEventListener("click", () => {
  navbarMenu.classList.toggle("is-active");
});


const signUpButton = document.querySelector("#signUp");
const modalBg = document.querySelector(".modal-background");
const modal = document.querySelector(".modal");

signUpButton.addEventListener("click", () => {
  modal.classList.add("is-active");
});

modalBg.addEventListener("click", () => {
  modal.classList.remove("is-active");
});

const registerButton = document.querySelector("#registerButton");

// registerButton.addEventListener("click", () =>{
//   //the api url; what you would put into insomnia if you wanted to post to the db
//   fetch(url, {
//     method: 'POST', 
//       //an object with the information (email password,etc)
//     body: <your post body>
//   });

// }
// )


