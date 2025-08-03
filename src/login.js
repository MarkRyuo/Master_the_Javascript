
export async function Login() {
    
    try {

        const inputEmail = document.getElementById("inputEmail").value;
        const inputPassword = document.getElementById("inputPassword").value;
        const response = await fetch("./user.json");

        if(!response.ok){
            throw new Error("Could not fetch data")
        }

        const data = await response.json()
        
        if (inputEmail === data.userPersonalProfile.email) {
            console.log("Your Online")
        }

        if (inputPassword === data.userPasswordHash) {
            console.log(`Welcome ${data.userName}`)
        }
        
    } catch (error) {
        console.error("Something went wrong", error)
    } finally {
        document.getElementById("inputEmail").value = "";
    }
}