import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import qs from "qs";
import { httpCodesConfig, messageBox, responseKey } from '../setting';
// import { Message } from "element-ui";
// import { UserModule } from "@/store/modules/user";

interface ResponseBody {
  data: any;
  message: string;
  status: number;
}

export interface requestConfig extends AxiosRequestConfig {
  isFormData?: boolean;
}

function requestValidateStatus(config: requestConfig): any {
  config.validateStatus = (status: number) => {
    const t = httpCodesConfig.filter(({ code }) => {
      if (code instanceof Number) {
        return code === status;
      }
      if (code instanceof Array) {
        let [min, max] = code;
        return status >= min && status <= max;
      }
    })
    if (t.length > 0) {
      t[0]
    } else {
      return true;
    }

    // if (status > 499) {
    //   // Message({
    //   //   message:
    //   //     "服务器错误，服务器在处理请求的过程中发生了错误，http状态码：" +
    //   //     status,
    //   //   type: "error",
    //   //   duration: 5 * 1000,
    //   //   showClose: true,
    //   // });
    //   return false;
    // }
    // if (status > 399 && status < 500) {
    //   // Message({
    //   //   message:
    //   //     "客户端错误，请求包含语法错误或无法完成请求，http状态码：" + status,
    //   //   type: "error",
    //   //   duration: 5 * 1000,
    //   //   showClose: true,
    //   // });
    //   return false;
    // }
    return true;
  };

  // formDate转换
  if (config.isFormData) {
    config.data = qs.stringify(config.data);
  }
  return config;
}

function responseValidateStatus(response: AxiosResponse): any {
  const res: ResponseBody = response.data;


  if (response.status !== 200) {
    return false;
  } else {
    if (response.data === "") {
      messageBox({
        message: "响应码200，但服务器未返回任何数据",
        type: "error",
        duration: 5 * 1000,
        showClose: true,
      })
      return false;
    }
  }
  if (res.status !== 1) {
    if (res.status === -2) {
      // 登录过期
      // Message({
      //   message: res.message || "登录会话超时，请重新登录！",
      //   type: "error",
      //   duration: 2 * 1000,
      //   onClose: () => {
      //     // UserModule.FedLogOut().then(() => {
      //     //   location.reload();
      //     // });
      //   },
      // });
    } else if (res.status === -1) {
      // 接口无权限访问
      // Message({
      //   message: "无权限访问！请联系管理员",
      //   type: "error",
      //   duration: 5 * 1000,
      // });
    } else {
      // Message({
      //   message: res.message,
      //   type: "error",
      //   duration: 5 * 1000,
      // });
    }
    throw new Error(res.message);
  } else {
    return res.data;
  }
}

export function interceptor(axiosInstance: AxiosInstance): any {
  axiosInstance["interceptors"].request.use(requestValidateStatus);
  axiosInstance["interceptors"].response.use(responseValidateStatus);
}
