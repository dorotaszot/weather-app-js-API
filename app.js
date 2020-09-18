const weather = new Weather('Boston');
const ui = new UI;

document.addEventListener('DOMContentLoaded', getWeather);
// document.getElementById('change-location-btn').addEventListener('click', changeLocation)

function getWeather() {
  weather.getWeather()
    .then(results => {
      ui.paint(results);
    })
}



