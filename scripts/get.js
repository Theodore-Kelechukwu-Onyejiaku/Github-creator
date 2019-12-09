const token = document.getElementById("token");
const user = document.getElementById("user");
const getBtn = document.getElementById("getBtn")

const loader = document.getElementById("load");
const errorDiv = document.getElementById("error")
const resultDiv = document.getElementById("result")

getBtn.addEventListener("click", (e)=>{
    if(user.value && token.value){
        e.preventDefault();
        loader.style.display = "inline";
        fetch("https://api.github.com/users/"+ user.value)
        .then(res =>{
            res.json()
                .then(data =>{
                    console.log(data);
                    loader.style.display = "none";
                })
        })
        .catch(error =>{
            console.error(error)
            loader.style.display = "none";
            errorDiv.style.color = "red";
            errorDiv.innerText = "Please check your internet connection or try again"
        })
    }                
})