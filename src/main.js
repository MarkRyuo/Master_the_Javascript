import "./style.css";
import { Login } from "./login.js";

document.querySelector("#app").innerHTML = `
  <div class="container">
    <form id="formLogin">
      <input type="text" name="inputUsername" placeholder="Enter Username" id="inptUsername">
      <input type="password" name="inputPassword" placeholder="Enter Password" id="inptPassword">
      <button type="button" id="btnLogin">
        Login
      </button>
    </form>
  </div>
`;

document.getElementById("btnLogin").addEventListener("click", Login);

window.addEventListener("load", () => {
  const inptUsername = document.getElementById("inptUsername");
  const savedUsername = localStorage.getItem("username");

  if (savedUsername) {
    inptUsername.value = savedUsername; // direct assignment
  }
});

//console.dir(document); // log the dom events
