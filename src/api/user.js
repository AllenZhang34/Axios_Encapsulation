import qs from 'qs';
import myAxios from './axios.js';

export default function loginAPI(params) {
  return myAxios({
    url: '/api/login',
    method: 'post',
    data: params,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    transformRequest: [
      (data) => {
        return qs.stringify(data);
      }
    ]
  });
}
