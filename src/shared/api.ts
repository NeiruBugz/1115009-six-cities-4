import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';

const axiosInstanceOptions: AxiosRequestConfig = {
  baseURL: `https://4.react.pages.academy/six-cities`,
  timeout: 5000,
  withCredentials: true,
};

export const createAPI = (dispatch?) => {

  const axiosInstance = axios.create(axiosInstanceOptions);

  const onSuccess = (response: AxiosResponse) => response;

  const onError = (error: AxiosError) => {
    const { response } = error;

    if (response.status === 401) {
      dispatch();
      throw error;
    }
  };

  axiosInstance.interceptors.response.use(onSuccess, onError);

  return axiosInstance;
};
