import axios from 'axios';

const OpwApiKey = process.env.REACT_APP_OPW_API_KEY;
const OpwBaseUrl = process.env.REACT_APP_OPW_BASE_URL;

const OpwApiCore = axios.create({
  baseURL: OpwBaseUrl,
});

OpwApiCore.interceptors.request.use((config) => {
  config.params.appid = OpwApiKey;
  return config;
});

OpwApiCore.interceptors.response.use(
  (data) => data,
  (error) => {
    console.log(error.response);
    return Promise.reject(error.response);
  }
);

export default OpwApiCore;
