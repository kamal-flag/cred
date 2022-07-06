import axios from 'axios';
import { API_URL } from '../config';

export const apiBackend = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiBackend.interceptors.request.use((config) => {
  return config;
});

/*
apiBackend.interceptors.response.use(response => {
    
    toast("You'll need to sign in to Vote!")
    return response;
}, error => {

    toast("You'll need to sign in to Vote! error")
    return error;
})
*/
