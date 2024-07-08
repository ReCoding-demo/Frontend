import axios from 'axios';

const baseURL = import.meta.env.VITE_SERVER_API_URL;

export const Axios = axios.create({
  baseURL: baseURL,
  timeout: 10000,
  withCredentials: true,
});
