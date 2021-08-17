"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseFun = void 0;
// eslint-disable-next-line
function baseFun(request) {
    return function (data) {
        return request(data);
    };
}
exports.baseFun = baseFun;
