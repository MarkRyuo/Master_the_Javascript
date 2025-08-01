
export async function Dragonball() {
    
    try {
        const response = await fetch("https://dragonball-api.com/api/characters");

        if(!response.ok){
            throw new Error("Could not Fetch data!")
        }

        const data = await response.json()
        console.log(data)

    } catch (error) {
        console.error(error)
    }
}