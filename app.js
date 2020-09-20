const storage = new Storage();
const weatherLocation = storage.getLocationData()
const weather = new Weather(weatherLocation.city);
const ui = new UI();
// const sunriseSunset = new SunriseSunset;

document.addEventListener('DOMContentLoaded', getWeather);
document.getElementById('change-location-btn').addEventListener('click', (e) => {
  let city = document.getElementById('city').value;
  console.log(city);
  weather.changeLocation(city);

  storage.setLocationData(city);
  getWeather();
  // city = '';
  $('#locModal').modal('hide');

});


function getWeather() {
  weather.getWeather()
    .then(results => {
      ui.paint(results);
    })
}



