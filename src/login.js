

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
            const data = await callback() ;
            console.log(data)

            //* add localStorage if true - setItem()
            if(inptUsername.value === data.userName && inptPassword.value === data.userPasswordHash){
                localStorage.setItem("username", inptUsername.value)
                localStorage.setItem("password", inptPassword.value)
                callback()
                window.alert(`Welcome ${data.userPersonalProfile.fullname}`)
            } else {
                window.alert(`User is not found! ${inptUsername.value}`)
            }

            // get auto add username if have localstorage have username
            const getLocalstorageUsername = localStorage.getItem("username");
            
            if(getLocalstorageUsername) {
                inptUsername.value = getLocalstorageUsername;
            }


        } 

        getData(getResponse);

    } catch (error) {
        console.error(error, "Something Wrong")
    }

}