import './style.css';
import { Login } from './login'

document.querySelector('#app').innerHTML = `
  <div class="container">
    <form>
      <input type="text" placeholder="Username/Email" required id="inputUsernameLogin"/>
      <input type="password" placeholder="Password" required id="inputPasswordLogin"/>
      <button type="button" id="btnLogin">
        Login
      </button>

      <img src="" alt="Profile Image" id="userProfileImg"/>
    </form>
  </div>
`

document.getElementById("btnLogin").addEventListener("click", Login)