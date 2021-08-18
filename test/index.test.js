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
  });

  it("status=1时，正常情况下的请求", function (done) {
    request({
      url: "test",
    }).then((res) => {
      expect(res.a).to.equal(1);
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
});
