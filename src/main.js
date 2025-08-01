import './style.css';
import { Dragonball } from './dragonball';

document.querySelector('#app').innerHTML = `
  <div class="container">
    <input type="text" id="characterDragonball" placeholder="Enter Dragonball character">
    <button type="button">Fetch Data</button> <br>

    <img src="" alt="Dragonball Image" style="display:none" id="dragonballImg">
  </div>
`

Dragonball();

