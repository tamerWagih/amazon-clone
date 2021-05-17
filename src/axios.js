import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://us-central1-clone-69313.cloudfunctions.net/api', // cloud function URL
});

export default instance;
