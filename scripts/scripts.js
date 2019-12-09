const getEl = document.getElementById("get");
const createEl = document.getElementById("create");
const updateEl = document.getElementById("update");
const delEl = document.getElementById("delete");
const usEl = document.getElementById("usageContent")

const getBtn = document.getElementById("forGet");
const createBtn = document.getElementById("forCreate")
const updateBtn = document.getElementById("forUpdate")
const deleteBtn = document.getElementById("forDelete")
const usageBtn = document.getElementById("usage")

getBtn.addEventListener("click", ()=>{
    toggle(getEl);
})
createBtn.addEventListener("click", ()=>{
    toggle(createEl);
})
updateBtn.addEventListener("click", ()=>{
    toggle(updateEl);
})
deleteBtn.addEventListener("click", ()=>{
    toggle(delEl)
})
usageBtn.addEventListener("click", ()=>{
   usEl.style.height = usEl.style.height == "100%" ? "0px" : "100%"
    usEl.style.width = usEl.style.width == "100%" ? "0px" : "100%";    
})


function toggle(el){
    el.style.height = el.style.height == "0%" ? "100%" : "0%";    
    el.style.width = el.style.width == "0%" ? "100%" : "0%";
    el.style.display = el.style.display == "none" ? "block" : "none";
}