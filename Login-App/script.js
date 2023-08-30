document.getElementById("btn-login").addEventListener("click", logIn);
document.getElementById("btn-register").addEventListener("click", register);
window.addEventListener("resize", pageWidth);
//Creating variables//

let formContainer = document.querySelector(".forms-container");

let loginForm = document.querySelector(".login-form");
let registerForm = document.querySelector(".register-form");

let backboxLogin = document.querySelector(".back-box-login");
let backboxRegister = document.querySelector(".back-box-register");

/*Functions*/

function pageWidth() {
  if (window.innerWidth > 850) {
    backboxLogin.style.display = "block";
    backboxRegister.style.display = "block";
  } else {
    backboxRegister.style.display = "block";
    backboxRegister.style.opacity = "1";
    backboxLogin.style.display = "none";
    loginForm.style.display = "block";
    registerForm.style.display = "none";
    formContainer.style.left = "0px";
  }
}

pageWidth();

function logIn() {
  if (window.innerWidth > 850) {
    registerForm.style.display = "none";
    formContainer.style.left = "10px";
    loginForm.style.display = "block";
    backboxLogin.style.opacity = "0";
    backboxRegister.style.opacity = "1";
  } else {
    registerForm.style.display = "none";
    formContainer.style.left = "0px";
    loginForm.style.display = "block";
    backboxLogin.style.display = "none";
    backboxRegister.style.display = "block";
  }
}

function register() {
  if (window.innerWidth > 850) {
    registerForm.style.display = "block";
    formContainer.style.left = "410px";
    loginForm.style.display = "none";
    backboxLogin.style.opacity = "1";
    backboxRegister.style.opacity = "0";
  } else {
    registerForm.style.display = "block";
    formContainer.style.left = "0px";
    loginForm.style.display = "none";
    backboxLogin.style.display = "block";
    backboxLogin.style.opacity = "1";
    backboxRegister.style.display = "none";
  }
}
