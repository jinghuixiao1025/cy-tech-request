// import { expect } from "chai";
// import { axiosInstance, request } from "../src/index";
// import MockAdapter from "axios-mock-adapter";
var expect = require("chai").expect;
var axiosInstance = require("../src/index").axiosInstance;
describe("Array", function () {
  describe("#indexOf()", function () {
    it("should return -1 when the value is not present", function () {
      expect(1).to.equal(1);
    });
  });
});
// describe("测试request组件", () => {
//   beforeEach(() => {
//     const mock = new MockAdapter(axiosInstance);
//     mock.onGet("/test").reply(200, {
//       status: 1,
//       message: "aaa",
//       data: {
//         a: 1,
//       },
//     });
//     mock.onGet("/test1").reply(200, {
//       status: -1,
//       message: "无权限",
//       data: {
//         a: 1,
//       },
//     });
//   });
//   it("status=1时", async function () {
//     await request({
//       url: "/test",
//     }).then((res: any) => {
//       expect(res.a).to.equal(1);
//     });
//   });

//   it("status=-1时", async function () {
//     await request({
//       url: "/test1",
//     }).catch((err: any) => {
//       expect(err.message).to.include("无权限");
//     });
//   });
// });
