// API keys: 015b09eb417821566e066049e6c2ba40
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// https://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=015b09eb417821566e066049e6c2ba40


const apiKey = "015b09eb417821566e066049e6c2ba40";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector('.input-box');
const searchButton = document.querySelector('.btn');
const weatherIcon = document.querySelector('.weather-img img');


async function checkWeather(city){
    const res = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await res.json();
    console.log(data);
    if(res.status == 404){
        alert('Your city name is wrong');
    }
    else{
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp )+ "°c";
        document.querySelector('.city').innerHTML =data.name;
        document.querySelector('.humidity-ration').innerHTML = data.main.humidity +"%";
        document.querySelector('.wind-ratio').innerHTML = data.wind.speed + " km/h";
        
        
            if(data.weather[0].main == "Clouds"){
                weatherIcon.src = "img/clouds.png";
            }
            else if(data.weather[0].main == "Mist"){
                weatherIcon.src = "img/mist.png";
            }
            else if(data.weather[0].main == "Drizzle"){
                weatherIcon.src = "img/drizzle.png";
            }
            else if(data.weather[0].main == "Clear"){
                weatherIcon.src = "img/clear.png";
            }
            else if(data.weather[0].main == "Humidity"){
                weatherIcon.src = "img/humidity.png";
            }
    }
    
}


searchButton.addEventListener('click',()=>{
     checkWeather(searchBox.value);      
})

