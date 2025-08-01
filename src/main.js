import './style.css';
import { Login } from './login';

document.querySelector('#app').innerHTML = `
  <div class="container">
    <input type="email" name="email" placeholder="your@email.com" size="30" required id="inputEmail"> <br>
    <input type="password" name="password" placeholder="your password" size="20" required id="inputPassword"> <br>
    <button type="button" name="buttonlogin" autofocus id="btnLogin">
	    Login
    </button>

  </div>
`

Login();