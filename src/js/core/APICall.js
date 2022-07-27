// Code to fetch API Data
export default class APICall {
  constructor(url = 'https://api.tvmaze.com/') {
    this.baseUrl = url;
  }

  getRequest = async (pathUrl = '', returnJson = false) => {
    const response = await fetch(this.baseUrl + pathUrl);
    const json = returnJson ? await response.json() : await response.text();
    return json;
  };

  getRequestWithOptions(queryParams) {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    return fetch(this.baseUrl + queryParams, requestOptions)
      .then((response) => response.json())
      .catch((error) => error);
  }
}