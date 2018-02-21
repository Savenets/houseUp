import axios from 'axios';
import { firebaseApi } from '../constants/api';

const authUrl = firebaseApi.databaseURL;

const instance = axios.create({
  baseURL: authUrl,
});

export default instance;
