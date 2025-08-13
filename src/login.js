

export async function Login() {
    
    const inptUsername = document.getElementById("inptUsername");
    const inptPassword = document.getElementById("inptPassword");

    try {
        
        const getResponse = async () => {

            const response = await fetch("./user.json"); //* fetch the data
            console.log(response);

            // guard clause 
            if(response.ok){
                return response.json();
            }else {
                throw new Error("Could not fetch data");
            }
        }

        //* Create callback() - 
        const getData =  async (callback) => {
            const data = await callback() ;
            

            //* find user && localStorage 
            const finduser = data.user.find((user) => user.username === inptUsername.value && user.userPasswordHash === inptPassword.value)

            //* add localStorage if true - setItem()
            if(finduser){
                localStorage.setItem("username", inptUsername.value)
                localStorage.setItem("password", inptPassword.value)
                callback()
                window.alert(`Welcome ${data.userPersonalProfile.fullname}`)
            } else {
                window.alert(`User is not found! ${inptUsername.value}`)
            }
    
        } 

        getData(getResponse);

    } catch (error) {
        console.error(error, "Something Wrong")
    }

}