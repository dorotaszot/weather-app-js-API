const weather = new Weather('Kraków');
const ui = new UI();
// const sunriseSunset = new SunriseSunset;

document.addEventListener('DOMContentLoaded', getWeather);
document.getElementById('change-location-btn').addEventListener('click', (e) => {
  let city = document.getElementById('city').value;
  console.log(city);
  weather.changeLocation(city);
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



