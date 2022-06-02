// @flow

import axios from 'axios';

class APISetup {
  weatherAPIURL: null | string = null;
  async posAPICall(url: string, params: Object): Promise<*> {
    try {
      const response = await axios.post(url, params);
      return Promise.resolve({withError: false, response: response.data});
    } catch (e) {
      return Promise.resolve({withError: true, error: e});
    }
  }
  async getAPICall(url?: string, params: Object): Promise<*> {
    try {
      const response = await axios.get(url, {params: params});
      return Promise.resolve({withError: false, response: response.data});
    } catch (e) {
      return Promise.resolve({withError: true, error: e});
    }
  }
}

export default APISetup;
