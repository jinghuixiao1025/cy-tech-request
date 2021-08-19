import { messageConfirm } from './setting';
import { AxiosPromise } from "axios";
import { ConfigObj } from "./index.d";

export default function makeQuery(request: any | void) {
  return function query(configObj: ConfigObj): AxiosPromise {
    return new Promise((resolve: any, reject: any) => {
      function requestFun(configObj: ConfigObj) {
        const startTime = new Date().getTime();
        request(configObj)
          .then((res: any) => {
            if (res instanceof Object) {
              const endTime = new Date().getTime();
              res.__takeTime = endTime - startTime;
            }

            resolve(res);
          })
          .catch((error: any) => {
            reject(error);
          });
      }

      if ("q" in configObj) {
        messageConfirm(configObj.q || "确定继续操作？", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        })
          .then(() => {
            requestFun(configObj);
          })
          .catch(() => {
            // console.log("你取消了弹窗");
          });
      } else {
        requestFun(configObj);
      }
    });
  };
}
