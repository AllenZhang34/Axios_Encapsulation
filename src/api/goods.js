import myAxios from './axios.js';

export function getListAPI(paramsList) {
  return myAxios(
    {
      url: '/api/list',
      method: 'get',
      params: paramsList
    },
    {
      repeat_request_cancel: false,
      loading: true,
      error_message_show: true
    },
    {
      text: 'Show goods list'
    }
  );
}
