

export async function LoginPUSH() {

    try {

        const response = await fetch("./user.json");
        console.log(response)
        
        if(!response.ok){
            throw new Error("Could not fetch data!")
        }

        const data = await response.json();



        
    } catch (error) {
        
    }
}