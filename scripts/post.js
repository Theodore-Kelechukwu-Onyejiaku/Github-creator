const token = document.getElementById("token");
const repoName = document.getElementById("repoName");
const desc = document.getElementById("desc")

const loader = document.getElementById("load");
const errorDiv = document.getElementById("error")
const resultDiv = document.getElementById("result")

pstBtn.addEventListener("click", (e)=>{
    if(token.value && user.value){
        e.preventDefault();
        loader.style.display = "inline";
        fetch("https://api.github.com/user/repos",
            {
                headers: {"authentication": token.value},
                method: "POST",
                body: JSON.stringify({
                    name : reponName.value,
                    decription: desc.value
                })
            }
        )
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