const textin = document.getElementById('text_in');
const listcontainer = document.getElementById('list-conteiner');
function addTask(){
    if(textin.value === '' ){
        alert("You must right something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML=textin.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML=("\u00d7");
        li.appendChild(span); 
    }
    textin.value = ''
    saveData();
}

listcontainer.addEventListener("click", function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }

},false); 

function saveData(){
    localStorage.setItem("data" , listcontainer.innerHTML);
}
function showTask(){
    listcontainer.innerHTML = localStorage.getItem("data")
}
showTask();