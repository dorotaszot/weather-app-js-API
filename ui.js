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
    this.description.textContent = weather.description;
    this.location.textContent = weather.name;
    this.location.textContent = weather.name;
    this.location.textContent = weather.name;
    this.location.textContent = weather.name;
    this.location.textContent = weather.name;
    this.location.textContent = weather.name;
  }
}

