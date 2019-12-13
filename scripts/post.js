const token = document.getElementById("token");
const repoName = document.getElementById("repoName");
const desc = document.getElementById("desc")

const loader = document.getElementById("load");
const errorDiv = document.getElementById("error")
const resultDiv = document.getElementById("result")

pstBtn.addEventListener("click", (e)=>{
    if(token.value && repoName.value && desc.value){
        e.preventDefault();
        fetch("https://api.github.com/user/repos",{   
                method: "POST", // *GET, POST, PUT, DELETE, etc.
                headers: {"Authorization": "token "+token.value},
                body: JSON.stringify({
                        name: repoName.value,
                        description: desc.value,
                        homepage: "https://github.com",
                        private: false,
                        has_issues: true,
                        has_projects: true,
                        has_wiki: true
                    }),    
            }
    )
        .then(data =>{
            data.json()
            .then(data => {
                document.getElementById("successDiv").style.display = "block";
            })
        })
        .catch(error=>{
            console.error(error);
        })
    }       
})
