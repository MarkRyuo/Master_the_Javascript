

export function ChechEmail(getemail) {
    
    fetch("src/user.json")
    .then(response => console.log(response))
    .catch(error => console.error(error));
}