import axios from "axios";
import { interceptor } from "./interceptors/base";
import { baseFun } from "./interceptors/base-fun";
import queryFun from "./confirm";

const axiosInstance = axios.create({
  baseURL: "app",
  timeout: 6000,
});

interceptor(axiosInstance);
const request = queryFun(axiosInstance);

const requestFun = baseFun(request);

export { request, requestFun, axiosInstance };
