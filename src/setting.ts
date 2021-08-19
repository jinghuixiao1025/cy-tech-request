import { AxiosPromise } from "axios";
const options = {
  baseURL: "app",
  timeout: 6000,
}

const httpCodesConfig = [
  {
    code: 200,
    msg: 'ok',
    pass: true
  },
  {
    code: [400, 499],
    msg: function (status: number) {
      return 'sss' + status
    },
    pass: false
  },
]

const messageBox = (config: { message: string | number, type?: string, duration?: number, showClose?: boolean, onClose?: () => void }) => {
  console.log("提示信息：" + config.message)
};
const messageConfirm = function (msg: string, title: string, options: any): AxiosPromise {
  return new Promise((resolve: any, reject: any) => {

  })
};

const responseKey = {
  data: "data",
  status: "status",
  message: "message",
}


const resCodeCheckConfig = {
  success: 1,
  overdue: -2,
  noPermission: -1,
  overdueCb: () => { }
}

export {
  httpCodesConfig,
  responseKey,
  resCodeCheckConfig,
  messageBox,
  messageConfirm,
  options
}