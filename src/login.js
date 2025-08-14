

export async function Login() {
    
    const inptUsername = document.getElementById("inptUsername");
    const inptPassword = document.getElementById("inptPassword");

    try {
        
        const getResponse = async () => {

            const response = await fetch("http://localhost:3000/users", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            }); //* fetch the data
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
            

            //* find user 
            const finduser = data.find((user) => user.userName === inptUsername.value && user.userPasswordHash === inptPassword.value)

            //* add localStorage if true - setItem()
            if(finduser){
                localStorage.setItem("username", inptUsername.value)
                localStorage.setItem("password", inptPassword.value)
                window.alert(`Welcome ${finduser.userPersonalProfile.fullname}`)
            } else {
                //!window.alert(`User is not found! ${inptUsername.value}`)
            }
    
        } 

        //example of callback - run getData bago yung getResponse
        getData(getResponse);

    } catch (error) {
        console.error(error, "Something Wrong")
    }

}