import { esbuildVersion } from "vite";


export async function Login(params) {
    
    const inptUsername = document.getElementById("inptUsername");
    const inptPassword = document.getElementById("inptPassword");

    try {
        
        const response = await fetch("./user.json"); //* fetch the data
        console.log(response);

        if(response.ok){
            return response.json();
        }else {
            throw new Error("Could not fetch data");
        }

        
    } catch (error) {
        console.error(error, "Something Wrong")
    }

}