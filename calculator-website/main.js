
function liveScreen(value) {
    var display = document.querySelector('.vizual p');
    if (value === '=') {
        
        try {
            display.textContent = eval(display.textContent);
        } catch (error) {
            display.textContent = 'Error';
        }
    } else {
        
        display.textContent += value;
    }
    if(value==='C'){
        display.textContent='';
    }
}


function clearScreen() {
    document.querySelector('.vizual p').textContent = '';
}

