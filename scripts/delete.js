const token = document.getElementById("token");
const repoName = document.getElementById("repoName");

const loader = document.getElementById("load");
const errorDiv = document.getElementById("error")
const resultDiv = document.getElementById("result")

const failDiv = document.getElementById("fail");
const successDiv = document.getElementById("success");
const unauthorizedDiv = document.getElementById("unauth");
const delBtn = document.getElementById("delBtn");

delBtn.addEventListener("click", (e)=>{
    failDiv.style.display = "none";
    successDiv.style.display = "none";
    unauthorizedDiv.style.display = "none";
    loader.style.display = "inline";
    if(token.value && repoName.value){
        e.preventDefault();
        fetch("https://api.github.com/user/repos",{   
                method: "DELETE", // *GET, POST, PUT, DELETE, etc.
                headers: {"Authorization": "token "+token.value},
                body: JSON.stringify({
                        name: repoName.value,
                        homepage: "https://github.com",
                        private: false,
                        has_issues: true,
                        has_projects: true,
                        has_wiki: true
                    }),  
                mode: "cors"  
            }
    )
        .then(data =>{
            if(data.status !== 200){
                loader.style.display = "none";
                unauthorizedDiv.style.display = "block";
                console.error("error")
            }else{
                console.log("success");
                data.json()
                .then(data => {
                    loader.style.display = "none";
                    successDiv.style.display = "block";            
                })
                .catch(error=>{
                    console.error(error)
                })
            }
        })
        .catch(error=>{
            loader.style.display = "none";
            unauthorizedDiv.style.display = "none";
            successDiv.style.display = "none";
            failDiv.style.display = "block";
            console.error(error);
        })
    }       
})
