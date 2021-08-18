"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.a = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var a = [1, 23, 3];
exports.a = a;
a.map(function (i) {
  console.log(_axios["default"]);
  return i * i;
});