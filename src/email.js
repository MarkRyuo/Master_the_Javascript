

export function CheckEmail(getemail) {
    
    fetch("src/user.json")
    .then(response => response.json())
    .then(data => console.log(data.userPersonalProfile.fullname))
    .catch(error => console.error("API HAS ERROR", error));
}