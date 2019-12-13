const userToken = document.getElementById("token");
const user = document.getElementById("user");
const getBtn = document.getElementById("getBtn")

const loader = document.getElementById("load");
const errorDiv = document.getElementById("error")
const resultDiv = document.getElementById("result")
const name = document.querySelector(".name");
const lct =  document.querySelector(".location");
const repos =  document.querySelector(".repos"); 
const bio =  document.querySelector(".biography");
const url =  document.querySelector(".url");
const firstTime =  document.querySelector(".started");
const image = document.getElementById("image")

getBtn.addEventListener("click", (e)=>{
    if(user.value && token.value){
        e.preventDefault();
        loader.style.display = "inline";
        fetch("https://api.github.com/users/"+ user.value)
        .then(res =>{
            res.json()
                .then(data =>{
                    console.log(data);
                    resultDiv.style.display = "block"
                    loader.style.display = "none";
                    image.style.display = "block"
                    image.src = data.avatar_url;
                    name.innerHTML = "<h4 style='text-align:left;color:red'><strong>NAME:</strong></h4><p>"+data.name+"</p><hr style='width:80%;margin-left:0'>";
                    bio.innerHTML ="<h4 style='text-align:left;color:red'><strong>BIO:</strong></h4><p>"+data.bio+"</p><hr style='width:80%;margin-left:0'>";                   
                    repos.innerHTML = "<h4 style='text-align:left;color:red'><strong>NO OF PUBLIC REPOS</strong></h4><p>"+data.public_repos+"</p><hr style='width:80%;margin-left:0'>";
                    lct.innerHTML = "<h4 style='text-align:left;color:red'><strong>LOCATION</strong></h4><p>"+data.location+"</p><hr style='width:80%;margin-left:0'>";
                    url.innerHTML = "<h4 style='text-align:left;color:red'><strong>GITHUB URL</strong></h4><p><a target='blandk' href='"+data.html_url+"'>Github Url</a></p><hr style='width:80%;margin-left:0'>";
                    firstTime.innerHTML =  "<h4 style='text-align:left;color:red'><strong>STARTED</strong></h4><p>"+data.created_at+"</p><hr style='width:80%;margin-left:0'>";
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