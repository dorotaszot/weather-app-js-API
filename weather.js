class Weather {
  constructor(city) {
    this.apiKey = '2ae46844e9005d8c6d99e80c25f90079';
    this.city = city;
  }

  async getWeather() {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${this.apiKey}`);
    const data = await response.json();
    return data;
  }

  changeLocation(city) {
    this.city = city;
  }

}