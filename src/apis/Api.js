import Utils from '../utils/Utils';

const API_URL = 'http://192.168.0.170:3000/';

const getHeaders = () => {
  return {
    'accept': 'application/json',
    'Content-Type': 'application/json',
  };
}

const getParams = (payload, request) => {
  return payload
    ? '\n' + (request ? '>>>>>' : '<<<<<') + ' Body Param: ' + JSON.stringify(payload)
    : '';
}

const logRequest = (method, url, payload = '') => {
  console.log(
    '>>>>>>>>>>>>>>>>\n' +
      '>>>>> Headers: ' +
      JSON.stringify(getHeaders()) +
      '\n' +
      '>>>>> ' +
      method +
      ' ' +
      url +
      getParams(payload, true) +
      '\n' +
      '>>>>>>>>>>>>>>>>'
  );
}

const _fetch = (uri, payload, method) => {
  const url = API_URL + uri;
  logRequest(method, url, payload);

  const config = {
    method,
    headers: getHeaders(),
    body: payload ? JSON.stringify(payload) : null,
  };

  return fetch(url, config).then(x => {
    const status = x.status;
    const json = x.json();
    json.then(response => {
      if (response.error) {
        console.log(response.error);
        Utils.showNormalToast('You have been automatically logged out', true);
      }
      return response;
    })
    .catch(error => {
      Utils.showErrorToast(`Server Error: ${status}`);
      return error;
    });
    return json;
  });
}

const post = (uri, payload) => {
  return _fetch(uri, payload, 'POST');
};

const get = (uri, payload) => {
  return _fetch(uri, payload, 'GET');
};

export default {
  get,
  post,
};