

// export function Pokemon() {

//     fetch("https://pokeapi.co/api/v2/pokemon/pikachu") 
//     .then(response => {

//         if(!response.ok) {
//             throw new Error("Could not fetch data");
//         }
//         return response.json()
//     })
//     .then(data => console.log(data))
//     .catch(error => console.error(error));

// }


export async function Pokemon() {
    
    try{

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

        if(!response.ok){
            throw new Error("Could not fetch data")
        }

        const data = await response.json()
        const pokemonSprite = data.sprites.front_default;

        const pokemonImg = document.getElementById("pokemonImg");

        pokemonImg.src = pokemonSprite

    } catch(error) {
        console.error(error)
    }


}