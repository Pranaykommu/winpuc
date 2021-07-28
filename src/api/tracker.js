import axios from 'axios';
import { useContext } from 'react';
import { Context as AuthContext } from '../context/AuthContext';

const instance = axios.create({
  //baseURL: 'http://f925f9d7ddf5.ngrok.io/'
  //baseURL: 'http://13.233.138.227:8080/mis-web-app'
  baseURL: 'http://13.233.138.227:8080/puc-certificate-services'
});

instance.interceptors.request.use(
  async config => {
    const { state: { token } } = useContext(AuthContext)
  //  const token = await AsyncStorage.getItem('token');
    if (token!=null) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
); 

export default instance;

/*
http://13.233.138.227:8080/mis-web-app
*/