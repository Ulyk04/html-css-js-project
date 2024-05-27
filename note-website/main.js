const notes = document.querySelector('.addnote');
const btn = document.querySelector('.btn');
let box = document.querySelectorAll('.inputbox');

function showNotes(){
    notes.innerHTML = localStorage.getItem("box");
}

showNotes();
function Storage(){
    localStorage.setItem("box" , notes.innerHTML);
}

function note(){
    btn.addEventListener("click", ()=>{
        let inputbox = document.createElement("p");
        inputbox.className = 'inputbox';
        inputbox.setAttribute("contenteditable" , "true");
        notes.appendChild(inputbox);
    })
}


function list(){
    notes.addEventListener("click" , function(e){
        if(e.target.tagName === "P"){
            box = document.querySelectorAll(".inputbox");
            box.forEach(nt => {
                nt.onkeyup = function(){
                    Storage();
                }
            })
        }
    })
}

note();
list();