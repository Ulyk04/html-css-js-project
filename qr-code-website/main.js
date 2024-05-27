const qrUrl = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
const img = document.getElementById("img");
const input = document.getElementById("input");


function regenerate() {
    const inputValue = input.value.trim(); 

    if (inputValue) {
        const qrData = encodeURIComponent(inputValue); 
        img.src = qrUrl + qrData;
    } else {
        img.src = ""; 
        alert("Please enter a valid URL or text.");
    }
}
