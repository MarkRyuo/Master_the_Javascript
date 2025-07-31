import './style.css'
import { functclickme } from './clickme';

document.querySelector('#app').innerHTML = `
  <div class="container">
    
  </div>
`

const button = document.getElementById("clkme");
functclickme(button);