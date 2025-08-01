
export async function Dragonball() {
    
    try {
        const characterDragonball = document.getElementById("characterDragonball").value.toLowerCase();
        const response = await fetch(`https://dragonball-api.com/api/characters/${characterDragonball}`);

        if(!response.ok){
            throw new Error("Could not Fetch data!")
        } else {
            
        }

        const data = await response.json()
        console.log(data)

        const dragonballChar = data.image
        const dragonballImg = document.getElementById("dragonballImg");
        
        dragonballImg.src = dragonballChar ;
        dragonballImg.style.display = "Block";

    } catch (error) {
        console.error(error)
    }
}