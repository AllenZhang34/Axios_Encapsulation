import axios from 'axios';

function myAxios(axiosConfig, customOptions) {
  const service = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 5000
  });

  let custom_options = Object.assign(
    {
      repeat_request_cancel: true
    },
    customOptions
  );

  service.interceptors.request.use(
    (config) => {
      removePending(config);
      custom_options.repeat_request_cancel && addPending(config);
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  service.interceptors.response.use(
    (response) => {
      removePending(response.config);
      return response;
    },
    (error) => {
      error.config && removePending(error.config);
      return Promise.reject(error);
    }
  );

  return service(axiosConfig);
}

const pendingMap = new Map();

function getPendingKey(config) {
  let { url, method, params, data } = config;
  if (typeof data === 'string') data = JSON.parse(data);
  return [url, method, JSON.stringify(params), JSON.stringify(data)].join('&');
}

function addPending(config) {
  const pendingKey = getPendingKey(config);
  config.cancelToken =
    config.cancelToken ||
    new axios.CancelToken((cancel) => {
      if (!pendingMap.has(pendingKey)) {
        pendingMap.set(pendingKey, cancel);
      }
    });
}

function removePending(config) {
  const pendingKey = getPendingKey(config);
  if (pendingMap.has(pendingKey)) {
    const cancelToken = pendingMap.get(pendingKey);
    cancelToken(pendingKey);
    pendingMap.delete(pendingKey);
  }
}

export default myAxios;
