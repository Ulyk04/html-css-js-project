let ipt = document.getElementById('ipt1');
let img = document.getElementById('img1');

img.onclick = function(){
    if(ipt.type == "password"){
        ipt.type = "text";
        img.src = "C:/Users/User/.vscode/password.site/eye-open.png"
    }
    else{
        ipt.type = "password";
        img.src = "C:/Users/User/.vscode/password.site/eye-close.png"
    }
}