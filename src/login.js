
export async function Login() {
    
    try {

        const inputEmail = document.getElementById("inputEmail").value;
        const response = await fetch(`../user.json/${inputEmail}`);

        if(!response.ok){
            throw new Error("Could not fetch data")
        }

        const data = await response.json()
        
        inputEmail = data.userPersonalProfile.email
        
    } catch (error) {
        console.error(error)
    }
}