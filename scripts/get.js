const token = document.getElementById("token");
const user = document.getElementById("user");
const getBtn = document.getElementById("getBtn")

getBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    fetch("https://api.github.com/users/"+ user.value)
        .then(res =>{
            res.json()
                .then(data =>{
                    console.log(data);
                })
        })
        .catch(error =>{
            console.error(error)
        })            
})