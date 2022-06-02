// @flow

import APISetup from './setup';

class WeatherAPI extends APISetup {
  apiURL: * = null;
  constructor(apiURL: string) {
    super();
    this.apiURL = apiURL;
  }
  async getWeatherData(): Promise<*> {
    return await this.getAPICall(this.apiURL, {});
  }
}
export default WeatherAPI;
