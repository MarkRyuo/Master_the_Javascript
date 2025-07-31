

export function functclickme(buttonclick) {
    buttonclick.addEventListener("click", () => {
        const h1 = document.getElementById("h1");
        
        if(true) {
            h1.innerHTML = `Hello World`
        } else {
            console.log("We have a error to the code");
        }

    })

}