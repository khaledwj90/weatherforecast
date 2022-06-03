// @flow
import WeatherAPI from './weather';
import axios from 'axios';
import APISetup from './setup';
class AP extends APISetup {
  APIList = {};
  constructor() {
    super();
  }

  setWeatherAPIURL(data: {lat: string, lng: string, appId: string}) {
    this.weatherAPIURL = `https://api.openweathermap.org/data/3.0/onecall?lat=${data.lat}&lon=${data.lng}&units=metric&appid=${data.appId}`;
    this.APIList = {
      weatherAPI: new WeatherAPI(this.weatherAPIURL),
    };
  }
}

const API: * = new AP();
export default API;
