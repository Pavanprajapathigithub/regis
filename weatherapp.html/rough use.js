async function checkWeather(city){
    const api_key = "82d4b4a8639e193459d966ca83727dcf";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}"

     const weather_data = await fetch('${url}').then(response => response.json());

     console.log(weather_data);
}
 searchBtn.addEventListener('click',()=>{
    checkWeather(inputBox.value);
 })

 

  <div class="container">


   <div class="header">
    <div class="search-box">
      <input type="text" placeholder="Enter the Location"class="input-box">

      <button class="fa-solid
      fa-magnifying-glass" id="searchBtn"></button>
    </div>
   </div>
   <div class="weather-body">
    <img src="image/clear.jpeg" alt="Weather image"
    class="weather-img">
