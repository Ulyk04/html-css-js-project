const api = "https://api.quotable.io/random";
var load = document.getElementById("load");
let btn = document.getElementById("quote");


async function quote(url) {
    try {
        const response = await fetch(url);
        const data = await response.json(); 

        if (response.ok) {
            load.innerHTML = data.content; 
            console.log(data.content); 
        } else {
            console.error("Failed to fetch quote:", response.statusText);
        }
    } catch (error) {
        console.error("Error fetching quote:", error);
    }
}


btn.addEventListener("click", function() {
    quote(api); 
});
