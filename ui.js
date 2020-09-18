class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.description = document.getElementById('w-description');
    this.temperature = document.getElementById('w-temperature');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.wind = document.getElementById('w-wind');
    this.sunrise = document.getElementById('w-sunrise');
    this.sunset = document.getElementById('w-sunset');
  }

  paint(weather) {
    this.location.textContent = weather.name;
    this.description.textContent = weather.weather[0].description;
    // console.log(weather.weather[0].description);
    this.temperature.textContent = `${weather.main.temp} C`;
    this.humidity.textContent = `Humidity: ${weather.main.humidity}`;
    this.wind.textContent = `Wind: ${weather.wind.speed} m/s`;

    // let timestamp = `${weather.sys.sunrise}`;
    // let hours = Math.floor(timestamp / 60 / 60);
    // let minutes = Math.floor(timestamp / 60) - (hours * 60);
    // let seconds = timestamp % 60;
    // let formatted = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
    // console.log(formatted);

    let sunriseObj = new Date((`${weather.sys.sunrise}` - 7200) * 1000);
    let hours = sunriseObj.getUTCHours();
    let minutes = sunriseObj.getUTCMinutes();
    let seconds = sunriseObj.getSeconds();

    let sunriseString = hours.toString().padStart(2, '0') + ':' +
      minutes.toString().padStart(2, '0') + ':' +
      seconds.toString().padStart(2, '0');



    this.sunrise.textContent = `Sunrise: ${sunriseString}`;
    this.sunset.textContent = weather.name;
  }
}

// {
//   "coord":{"lon":-71.06,"lat":42.36},
//   "weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"base":"stations",
//   "main":{"temp":287.64,"feels_like":283.41,"temp_min":287.04,"temp_max":288.15,"pressure":1015,"humidity":82},
//   "visibility":10000,
//   "wind":{"speed":6.7,"deg":20},
//   "clouds":{"all":90},
//   "dt":1600423636,
// "sys":{"type":1,"id":3486,"country":"US","sunrise":1600424873,"sunset":1600469320},
//   "timezone":-14400,
//   "id":4930956,
//   "name":"Boston",
//   "cod":200}