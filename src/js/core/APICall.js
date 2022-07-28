export default class APICall {
  constructor(url = 'https://api.tvmaze.com/') {
    this.baseUrl = url;
  }

  postRequest = async (body, urlPath = '', returnJson = false) => {
    const response = await fetch(this.baseUrl + urlPath, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    const json = returnJson ? await response.json() : await response.text();
    return json;
  };

  getRequest = async (pathUrl = '', returnJson = false) => {
    const response = await fetch(this.baseUrl + pathUrl);
    const json = returnJson ? await response.json() : await response.text();
    return json;
  };

  getRequestNoCors = async (pathUrl = '') => {
    pathUrl.split('');
    return fetch(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/rVSJynvv1XHTg5vxDiSj/likes',
    )
      .then((response) => response.json())
      .catch((err) => err);
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

  postRequestWithOptions(id, username, message) {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const raw = JSON.stringify({
      item_id: id,
      username,
      comment: message,
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    return fetch(this.baseUrl, requestOptions)
      .then((response) => response.text())
      .catch((error) => error);
  }

  rgetRequestWithOptions(queryParams) {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    return fetch(this.baseUrl + queryParams, requestOptions)
      .then((response) => response.json())
      .catch((error) => error);
  }

  rpostRequestWithOptions(id, username, startDate, endDate) {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const raw = JSON.stringify({
      item_id: id,
      username,
      date_start: startDate,
      date_end: endDate,
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    return fetch(this.baseUrl, requestOptions)
      .then((response) => response.text())
      .catch((error) => error);
  }
}
