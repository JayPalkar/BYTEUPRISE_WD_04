let SearchBtn = document.getElementById('searchbtn');  // accessing SearchBtn component
let CityName = document.getElementById('cityName');  // accessing CityName component
let URL = 'https://api.openweathermap.org/data/2.5/weather?q=';  // URL for openweathermap API
let ApiKey = '7520c005af897003afcdd7f6fd219109';  // API key for OpenweatherMap API

// function which fetches weather for respective city when called
async function FetchWeather(){
    // console.log('Fetching weather');

    const response = await fetch(`${URL}${CityName.value}&apiKey=${ApiKey}`); // fetch weather 
    const data = await response.json(); // saves the response from api to json format
    let weather = data.weather;  // variable to store actual weather array

    // console.log(data);
    let city = data.name;  // variable to store city name
    let cityWeather = weather[0].main;  //variable to store weather
    let cityTemperature = data.main.temp + " °C";  //variable to store temperature
    let cityHumidity = data.main.humidity;  //variable to store humidity
    let cityWindSpeed = data.wind.speed;  // variable to store wind speed
    let cityWindAngle = data.wind.deg + " °";  // variable to store wind angle

    fillData(city, cityWeather, cityTemperature, cityHumidity, cityWindSpeed, cityWindAngle)  //calling fillData() function
}

// handels the functionality of searching weather of specified city
SearchBtn.addEventListener('click', () =>{
    FetchWeather();
});

// function which display data on the webpage
function fillData(city, cityWeather, cityTemperature, cityHumidity, cityWindSpeed, cityWindAngle){
    determineImage(cityWeather);
    document.querySelector('.cityName').innerHTML = city;
    document.querySelector('.weather').innerHTML = cityWeather;
    document.querySelector('.temperature').innerHTML = cityTemperature;
    document.querySelector('.humidity').innerHTML = cityHumidity;
    document.querySelector('.windSpeed').innerHTML = cityWindSpeed;
    document.querySelector('.windAngle').innerHTML = cityWindAngle;
}

// function to choose the background image withrespect to the city weather.
function determineImage(cityWeather){
    if(cityWeather === 'Smoke' || cityWeather==='Mist' || cityWeather==='Haze' || cityWeather==='Dust' || cityWeather==='Fog' || cityWeather==='sand' || cityWeather==='Ash' || cityWeather==='Squall'){
        document.body.style.backgroundImage = "url('../images/Haze.jpg')";
    }
    if(cityWeather==='Rain' || cityWeather==='Drizzle'){
        document.body.style.backgroundImage = "url('../images/Rain.jpg')";
    }
    if(cityWeather==='Thunderstorm'){
        document.body.style.backgroundImage = "url('../images/Thunderstorm.jpg')";
    }
    if(cityWeather==='Snow'){
        document.body.style.backgroundImage = "url('../images/Snow.jpg')";
    }
    if(cityWeather==='Clear'){
        document.body.style.backgroundImage = "url('../images/Clear.jpg')";
    }
    if(cityWeather==='Clouds'){
        document.body.style.backgroundImage = "url('../images/Clouds.jpg')";
    }
}

