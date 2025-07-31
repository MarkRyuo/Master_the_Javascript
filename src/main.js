import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="container">
    <input type="email" name="email" placeholder="your@email.com" size="30" required id="email>
    <input type="password" name="password" size="20" required id="password">
    <button type="button" name="login" autofocus id="login">
	    Login
    </button>
    </div>
`