import axios from 'axios';

export const ramailoApi = axios.create({
  baseURL: 'https://dummyjson.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const setupInterceptor = store => {
  ramailoApi.interceptors.request.use(
    //Attach headerToken if required
    config => config,
    error => {
      return Promise.reject(error);
    },
  );

  ramailoApi.interceptors.response.use(
    response => response,

    //Display error using toast message
    error => {
      return Promise.reject(error);
    },
  );
};
