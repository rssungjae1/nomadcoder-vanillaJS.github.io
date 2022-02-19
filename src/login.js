const loginForm = document.querySelector("#login-form");
const loginBox = document.querySelector("#login-box");
const box = document.querySelector("#box");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Cheer UP! ${username}`;
  box.classList.remove(HIDDEN_CLASSNAME);
}

function login() {
  const savedUsername = localStorage.getItem(USERNAME_KEY);

  if (savedUsername === null) {
    loginBox.classList.remove(HIDDEN_CLASSNAME);
    box.classList.add(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
  } else {
    loginBox.classList.add(HIDDEN_CLASSNAME);
    box.classList.remove(HIDDEN_CLASSNAME);
    paintGreetings(savedUsername);
  }
}

login();
