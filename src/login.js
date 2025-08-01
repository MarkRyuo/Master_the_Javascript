
export async function Login() {
    
    try {

        const response = await fetch("src/user.json")

        if(!response.ok){
            throw new Error("Could not fetch data")
        }

        const data = response.json()
        console.log(data)
        
    } catch (error) {
        console.error(error)
    }
}