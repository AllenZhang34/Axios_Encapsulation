import myAxios from './axios.js';

export function getListAPI(params) {
  return myAxios(
    {
      url: '/api/list',
      method: 'get'
    },
    {
      repeat_request_cancel: false
    }
  );
}
