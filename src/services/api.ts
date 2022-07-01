import axios, { AxiosRequestConfig } from 'axios';

const api = axios.create();

api.defaults.baseURL = 'http://3.221.159.196:3322/';

api.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    if (!config.headers?.['Authorization']) {
      const updatedToken = localStorage.getItem('access_token');
      if (config.headers)
        config.headers['Authorization'] = updatedToken
          ? `Bearer ${updatedToken}`
          : '';
      api.defaults.headers.common['Authorization'] = updatedToken
        ? `Bearer ${updatedToken}`
        : '';
    }

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default api;
