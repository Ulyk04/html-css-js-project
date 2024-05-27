const search = document.querySelector(".input");
const but = document.querySelector(".btn");


const url = 'https://api.openweathermap.org/data/2.5/weather?q='
const api = ',&APPID=043de2361d137cb5d121e77537111296'

async function weather(city){
    const response = await fetch(url + city + api);
    var data = await response.json();
    console.log(data);

    document.querySelector(".cityname").innerHTML = data.name;
    document.querySelector(".level").innerHTML = Math.round(data.main.temp-258 ) + "°C";
    document.querySelector(".i3").innerHTML = data.main.humidity + "%";
    document.querySelector(".g3").innerHTML = data.wind.speed + "kм/ч";

}

but.addEventListener("click", ()=> {
    weather(search.value);
})