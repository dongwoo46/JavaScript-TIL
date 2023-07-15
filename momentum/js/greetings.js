// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function paintGreetings(username) {
  greeting.innerText=`Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);  
}

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY,username);
  // greeting.innerText="Hello" + username;
  paintGreetings(username);  
}

loginForm.addEventListener("submit", onLoginSubmit);



const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername===null){
  //show form
  loginForm.classList.remove(HIDDEN_CLASSNAME)
  loginForm.addEventListener("submit",onLoginSubmit);
} else {
  //show the greeting
  paintGreetings(savedUsername); 
}