"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.axiosInstance = exports.requestFun = exports.request = void 0;
var axios_1 = require("axios");
var base_1 = require("./interceptors/base");
var base_fun_1 = require("./interceptors/base-fun");
var confirm_1 = require("./confirm");
var axiosInstance = axios_1.default.create({
    baseURL: "app",
    timeout: 6000,
});
exports.axiosInstance = axiosInstance;
base_1.interceptor(axiosInstance);
var request = confirm_1.default(axiosInstance);
exports.request = request;
var requestFun = base_fun_1.baseFun(request);
exports.requestFun = requestFun;
