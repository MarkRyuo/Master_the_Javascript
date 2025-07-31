import './style.css'
import { functclickme } from './clickme';

document.querySelector('#app').innerHTML = `
  <div class="container">
    <h1 id="h1"></h1>
    <button type="button" id="clkme">Click me</button>
  </div>
`

const button = document.getElementById("clkme");
functclickme(button);