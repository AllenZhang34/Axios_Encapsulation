import myAxios from './axios.js';

export function getListAPI(paramsList) {
  return myAxios(
    {
      url: '/api/list',
      method: 'get',
      params: paramsList
    },
    {
      repeat_request_cancel: false
    },
    {
      text: 'Show goods list'
    }
  );
}
