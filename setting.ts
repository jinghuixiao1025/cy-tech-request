import { AxiosRequestConfig } from 'axios';

const initConfig = {
  baseURL: "app",
  timeout: 6000,
}


const setConfig = (options?: AxiosRequestConfig) => {
  Object.assign(initConfig, options)
}


export {
  initConfig,
  setConfig
}
