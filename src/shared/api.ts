import axios, { AxiosRequestConfig } from 'axios';

const axiosInstanceOptions: AxiosRequestConfig = {
  baseURL: `https://4.react.pages.academy/six-cities`,
  timeout: 5000,
  withCredentials: true,
};

export const createAPI = (dispatch?) => {
  return axios.create(axiosInstanceOptions);
}
