const axios = require("axios");

const fetchWeather = data => {
  const { address, city, state } = data;
  let url = `http://www.mapquestapi.com/geocoding/v1/address?key=PUow85XsfCT60TgT59hYnsnYAttQ9xoi&location=${address}${city}${state}`;
  return axios
    .get(url)
    .then(response => {
      let lat = response.data.results[0].locations[0].latLng.lat;
      let lng = response.data.results[0].locations[0].latLng.lng;
      const weatherUrl = `https://api.darksky.net/forecast/f14ed525ecfdb327e370bffffcb83adc/${lat},${lng}`;
      const proxyurl = "https://cors-anywhere.herokuapp.com/";
      return axios.get(proxyurl + weatherUrl);
    })
    .then(response => {
      console.log(response);
      let temperature = response.data.currently.temperature;
      let apparentTemperature = response.data.currently.apparentTemperature;
      let message = "";
      Math.round(temperature) === Math.round(apparentTemperature)
        ? (message = `The current temperature is ${Math.round(temperature)} `)
        : (message = `The temperature is ${Math.round(
            temperature
          )} but feels like ${Math.round(apparentTemperature)}`);

      let area = response.data.timezone;
      let temp = [];
      let humidity = [];
      let precipitation = [];
      for (let i = 0; i < 5; i++) {
        temp.push(response.data.daily.data[i].temperatureHigh);
        humidity.push(response.data.daily.data[i].humidity);
        precipitation.push(response.data.daily.data[i].precipProbability);
      }
      let data = { temp, humidity, precipitation, area, message };
      return data;
    })
    .catch(err => {
      return console.log(err);
    });
};
module.exports = { fetchWeather };
