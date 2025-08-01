import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="container">
    <input type="email" name="email" placeholder="your@email.com" required id="email" size="30">
    <input type="password" name="password" placeholder="your password" required id="password" size="20">
    <button type="button" name="login" autofocus id="login">
	    Login
    </button>
    </div>
`