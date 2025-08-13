

export async function LoginPUSH() {

    const newuser = {
        userName: "Jhon Mark",
        userPasswordHash: "JhonMark@123"
    }

    try {

        const response = await fetch("./user.json", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newuser)
        });
        console.log(response)

        if(!response.ok){
            throw new Error("Could not fetch data!")
        }

        const data = await response.json();
        console.log(data)



        
    } catch (error) {
        console.error(error)
    }
}