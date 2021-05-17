import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5001/clone-69313/us-central1/api', // cloud function URL
});

export default instance;
