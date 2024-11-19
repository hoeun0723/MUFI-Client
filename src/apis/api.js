import axios from 'axios';

export const getAccessTokenLocalStorage = () => {
    const accessToken = localStorage.getItem('EXIT_ACCESS_TOKEN');
    return accessToken ? `${accessToken}` : '';
};

export const getRefreshTokenLocalStorage = () => {
    const refreshToken = localStorage.getItem('EXIT_REFRESH_TOKEN');
    return refreshToken ? `${refreshToken}` : '';
  };

export const checkCurrentMode = () => {
    const currentMode = import.meta.env.PROD ? 'production' : 'development';
    return currentMode;
  };


export const instance = axios.create({
    baseURL: import.meta.env.VITE_APP_SERVER_BASE_URL,
    withCredentials: true,
    headers: {
    },
  });

  function interceptorResponseFulfilled(res) {
    return res.status >= 200 && res.status < 300 ? res : Promise.reject(res);
  }
  
  function interceptorResponseRejected(error) {
    return Promise.reject(new Error(error.response?.data?.message ?? error));
  }
  
    instance.interceptors.response.use(interceptorResponseFulfilled, interceptorResponseRejected);

  
  export function get(...args) {
    return serverInstance.get(...args);
  }
  
  export function post(...args) {
    return serverInstance.post(...args);
  }
  
  export function put(...args) {
    return serverInstance.put(...args);
  }
  
  export function patch(...args) {
    return serverInstance.patch(...args);
  }
  
  export function del(...args) {
    return serverInstance.delete(...args);
  }
  