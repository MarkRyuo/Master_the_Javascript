import { CheckEmail } from './email';
import { Pokemon } from './Pokemon';

import './style.css';

document.querySelector('#app').innerHTML = `
  <div class="container">
    <input type="text" placeholder="Enter pokemon name" required id="pokemonName" size="30">
    <button type="button" autofocus id="btnfetch">
	    fetch data
    </button> <br>

    <img src="" alt="Pokemon Photo" id="pokemonImg">
    </div>
`


//CheckEmail()

document.getElementById("btnfetch").addEventListener("click", Pokemon);