import axios from "axios";
import { interceptor } from "./interceptors/base";
import { baseFun } from "./interceptors/base-fun";
import queryFun, { ConfigObj } from "./confirm";
import { AxiosPromise } from "axios";
import { initConfig } from "./setting";

const axiosInstance = axios.create(initConfig);

interceptor(axiosInstance);
const request = queryFun(axiosInstance);

const requestFun = baseFun(request);

type Request = (configObj: ConfigObj) => AxiosPromise;

export { 
  request,
  Request,
  requestFun,
  axiosInstance, 
  ConfigObj, 
};
