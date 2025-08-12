

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

        //* Create callback

        const getData =  async (callback) => {
            const data = await getResponse()
            console.log(data)

            //* add localStorage if true - setItem()
            if(inptUsername.value === data.userName && inptPassword === data.userPasswordHash){
                localStorage.setItem("username", JSON.stringify(inptUsername.value))
                localStorage.setItem("password", JSON.stringify(inptPassword.value))
                window.alert(`Welcome ${data.userPersonalProfile.fullname}`)
                getResponse()
            } else {
                window.alert(`User is not found! ${inptUsername.value}`)
            }

        } 

        getData(getResponse);


        
    } catch (error) {
        console.error(error, "Something Wrong")
    }

}