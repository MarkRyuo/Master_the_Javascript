import './style.css'
import { setupclick } from './clickme';

document.querySelector('#app').innerHTML = `
  <div class="container">
    <button type="button" id="clkme">Click me</button>
  </div>
`

functclickme(document.getElementById("clkme"))
