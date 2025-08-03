
export async function Login() {
    
    try {

        const inputEmail = document.getElementById("inputEmail").value;
        const response = await fetch("./user.json");

        if(!response.ok){
            throw new Error("Could not fetch data")
        }

        const data = await response.json()
        
        if (inputEmail === data.userPersonalProfile.email) {
            console.log("Your Online")
        }
        
    } catch (error) {
        console.error(error)
    }
}