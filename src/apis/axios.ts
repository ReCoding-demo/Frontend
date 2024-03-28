import axios from 'axios';

const baseURL = 'https://api.recoder.co.kr'; // 예시

export const Axios = axios.create({
  baseURL: baseURL,
  timeout: 5000,
  withCredentials: true,
});
