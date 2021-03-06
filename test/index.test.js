import { expect } from "chai";
import { request, axiosInstance } from "../.tmp/index.js";
import MockAdapter from "axios-mock-adapter";

/* 
  status
    1   正常
    -1  无权限
*/
describe("request 拦截器测试", () => {
  beforeEach(() => {
    const mock = new MockAdapter(axiosInstance);
    mock.onGet("/test").reply(200, {
      status: 1,
      data: {
        a: 1,
      },
      message: "成功！",
    });

    mock.onGet("/test2").reply(200, {
      status: -1,
      data: {},
      message: "无权限",
    });
    mock.onGet("/test3").reply(200, {
      status: -2,
      data: {},
      message: "登录失效",
    });
    mock.onGet("/test4").reply(200, {
      status: Math.random(),
      data: {},
      message: "error",
    });
    mock.onGet("/test5").reply(410);
    mock.onGet("/test6").reply(510);
  });

  it("网络状态在400-500区间", function (done) {
    request({
      url: "test5",
    }).catch((res) => {
      done();
    });
  });

  it("网络状态在510", function (done) {
    request({
      url: "test6",
    }).catch((res) => {
      done();
    });
  });
  it("status不等于1时，错误情况下的请求", function (done) {
    request({
      url: "test4",
    }).catch((err) => {
      expect(err.message).to.include("error");
      done();
    });
  });

  it("status=-1时，无权限时的请求", function (done) {
    request({
      url: "test2",
    }).catch((err) => {
      expect(err.message).to.include("无权限");
      done();
    });
  });

  it("status=-2时，登录失效的请求", function (done) {
    request({
      url: "test3",
    }).catch((err) => {
      expect(err.message).to.include("登录失效");
      done();
    });
  });
});
