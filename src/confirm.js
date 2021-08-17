"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var element_ui_1 = require("element-ui");
function makeQuery(request) {
    return function query(configObj) {
        return new Promise(function (resolve, reject) {
            function requestFun(configObj) {
                var startTime = new Date().getTime();
                request(configObj)
                    .then(function (res) {
                    if (res instanceof Object) {
                        var endTime = new Date().getTime();
                        res.__takeTime = endTime - startTime;
                    }
                    resolve(res);
                })
                    .catch(function (error) {
                    reject(error);
                });
            }
            if ("q" in configObj) {
                element_ui_1.MessageBox.confirm(configObj.q || "确定继续操作？", "提示", {
                    confirmButtonText: "确定",
                    cancelButtonText: "取消",
                    type: "warning",
                })
                    .then(function () {
                    requestFun(configObj);
                })
                    .catch(function () {
                    // console.log("你取消了弹窗");
                });
            }
            else {
                requestFun(configObj);
            }
        });
    };
}
exports.default = makeQuery;
