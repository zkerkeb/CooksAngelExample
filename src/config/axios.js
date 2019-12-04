import axios from 'axios';

axios.interceptors.response.use(
  response => response,
 error => {
 console.log('TCL: error', error.response.status);
  if (error.response.status === 401) {
    localStorage.removeItem('token');
  }
   return Promise.reject(error);
 }
);