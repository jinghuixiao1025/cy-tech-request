"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.interceptor = void 0;
var qs_1 = require("qs");
var element_ui_1 = require("element-ui");
function requestValidateStatus(config) {
    config.validateStatus = function (status) {
        if (status > 499) {
            element_ui_1.Message({
                message: "服务器错误，服务器在处理请求的过程中发生了错误，http状态码：" +
                    status,
                type: "error",
                duration: 5 * 1000,
                showClose: true,
            });
            return false;
        }
        if (status > 399 && status < 500) {
            element_ui_1.Message({
                message: "客户端错误，请求包含语法错误或无法完成请求，http状态码：" + status,
                type: "error",
                duration: 5 * 1000,
                showClose: true,
            });
            return false;
        }
        return true;
    };
    // formDate转换
    if (config.isFormData) {
        config.data = qs_1.default.stringify(config.data);
    }
    return config;
}
function responseValidateStatus(response) {
    var res = response.data;
    if (response.status !== 200) {
        return;
    }
    else {
        if (response.data === "") {
            element_ui_1.Message({
                message: "响应码200，但服务器未返回任何数据",
                type: "error",
                duration: 5 * 1000,
                showClose: true,
            });
            return false;
        }
    }
    if (res.status !== 1) {
        if (res.status === -2) {
            // 登录过期
            element_ui_1.Message({
                message: res.message || "登录会话超时，请重新登录！",
                type: "error",
                duration: 2 * 1000,
                onClose: function () {
                    // UserModule.FedLogOut().then(() => {
                    //   location.reload();
                    // });
                },
            });
        }
        else if (res.status === -1) {
            // 接口无权限访问
            element_ui_1.Message({
                message: "无权限访问！请联系管理员",
                type: "error",
                duration: 5 * 1000,
            });
        }
        else {
            element_ui_1.Message({
                message: res.message,
                type: "error",
                duration: 5 * 1000,
            });
        }
        throw new Error(res.message);
    }
    else {
        return res.data;
    }
}
function interceptor(axiosInstance) {
    axiosInstance["interceptors"].request.use(requestValidateStatus);
    axiosInstance["interceptors"].response.use(responseValidateStatus);
}
exports.interceptor = interceptor;
