const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('.searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('temperature');
const desceiption = document.querySelector('.description');
const humidity = document.getElementById('.huminity');
const wind_speed = document.getElementById('wind_speed');


async function checkWeather(city){
    const api_key = "82d4b4a8639e193459d966ca83727dcf"
    const url = "https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}"

   const weather_data = await fetch('${url}').then
   (response => response.json());

  temperature.innerHTML = '${math.round(weather_data.main.temp -273.15)}°C';
   description.innerHTML = '${weather_data.weather[0].description}';

   humidity.innerHTML = '${weather_data.main.humidity}%';

   wind_speed.innerHTML = '${weather_data.wind_speed}km/H';

   switch(weather_data.WEATHER[0].main){
      case 'cloud' :
          weather_img.src = "image/cloud.jpeg";
          break;
      case 'clear' :
          weather_img.src = "image/clear.jpeg";
          break;
      case 'rainy' :
          weather_img.src = "image/rainy.jpeg";
          break;
      case 'mist' :
          weather_img.src = "image/mist.jpeg";
          break;
      case 'snow' :
          weather_img.src = "image/snow.jpeg";
          break;

 

}


  searchBtn.addEventListener('click', ()=>{
    checkWeather(inputBox.value);
  });