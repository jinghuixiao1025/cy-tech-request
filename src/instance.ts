import axios from "axios";
import { interceptor } from "./interceptors/base";
import { baseFun } from "./interceptors/base-fun";
import queryFun from "./confirm";
import { options } from "./setting";

const axiosInstance = axios.create(options);

interceptor(axiosInstance);
const request = queryFun(axiosInstance);

const requestFun = baseFun(request);

export { request, requestFun, axiosInstance };
