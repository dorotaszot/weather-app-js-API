const weather = new Weather('Kraków');
const ui = new UI;
// const sunriseSunset = new SunriseSunset;

document.addEventListener('DOMContentLoaded', getWeather);
// document.getElementById('change-location-btn').addEventListener('click', changeLocation)

function getWeather() {
  weather.getWeather()
    .then(results => {
      ui.paint(results);
    })
}



