!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("element-ui"),require("axios"),require("qs")):"function"==typeof define&&define.amd?define(["element-ui","axios","qs"],t):"object"==typeof exports?exports.library=t(require("element-ui"),require("axios"),require("qs")):e.library=t(e["element-ui"],e.axios,e.qs)}(window,(function(e,t,r){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=3)}([function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t){e.exports=r},function(e,t,r){"use strict";r.r(t),r.d(t,"request",(function(){return d})),r.d(t,"requestFun",(function(){return l})),r.d(t,"axiosInstance",(function(){return f}));var n=r(1),o=r.n(n),u=r(2),i=r.n(u),s=r(0);function a(e){return e.validateStatus=function(e){return e>499?(Object(s.Message)({message:"服务器错误，服务器在处理请求的过程中发生了错误，http状态码："+e,type:"error",duration:5e3,showClose:!0}),!1):!(e>399&&e<500)||(Object(s.Message)({message:"客户端错误，请求包含语法错误或无法完成请求，http状态码："+e,type:"error",duration:5e3,showClose:!0}),!1)},e.isFormData&&(e.data=i.a.stringify(e.data)),e}function c(e){var t=e.data;if(200===e.status){if(""===e.data)return Object(s.Message)({message:"响应码200，但服务器未返回任何数据",type:"error",duration:5e3,showClose:!0}),!1;if(1!==t.status)throw-2===t.status?Object(s.Message)({message:t.message||"登录会话超时，请重新登录！",type:"error",duration:2e3,onClose:function(){}}):-1===t.status?Object(s.Message)({message:"无权限访问！请联系管理员",type:"error",duration:5e3}):Object(s.Message)({message:t.message,type:"error",duration:5e3}),new Error(t.message);return t.data}}var f=o.a.create({baseURL:"app",timeout:6e3});!function(e){e.interceptors.request.use(a),e.interceptors.response.use(c)}(f);var p,d=(p=f,function(e){return new Promise((function(t,r){function n(e){var n=(new Date).getTime();p(e).then((function(e){if(e instanceof Object){var r=(new Date).getTime();e.__takeTime=r-n}t(e)})).catch((function(e){r(e)}))}"q"in e?s.MessageBox.confirm(e.q||"确定继续操作？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){n(e)})).catch((function(){})):n(e)}))}),l=function(e){return function(t){return e(t)}}(d)}])}));