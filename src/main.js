import './style.css';
import { Login } from './login.js'

document.querySelector('#app').innerHTML = `
  <div class="container">
    <form id="formLogin">
      <input type="text" name="inputUsername" placeholder="Enter Username" id="inptUsername">
      <input type="password" name="inputPassword" placeholder="Enter Password" id="inptPassword">
      <button type="button" id="btnLogin">
        Login
      </button>
    </form>
  </div>
`

document.getElementById("btnLogin").addEventListener("click", Login)

