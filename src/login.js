

export async function Login () {

    fetch("./user.json") 
    .then(response => {

        if(response.ok){
            return response.json()
        } else {
            throw new Error("Could not fetch the JSON file")
        }
    })
    .then(data => {
        
        const inputUsernameLogin = document.getElementById("inputUsernameLogin").value;
        const userProfileiImg = document.getElementById("userProfileImg");
        const imgData = data.userPersonalProfile.image ;

        if(inputUsernameLogin === data.userName || inputUsernameLogin === data.userPersonalProfile.email) {
            window.alert(`Welcome ${data.userPersonalProfile.fullname}`)
            userProfileiImg.src = imgData; 
        } else {
            window.alert(`User not found! ${inputUsernameLogin}`)
        }


        

    })
    .catch(error =>  console.error(error));
}