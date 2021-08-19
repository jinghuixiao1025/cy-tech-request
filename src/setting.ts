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

const messageBox = (config: { message: string | number, type?: string, duration?: number, showClose?: boolean }) => {
  return alert(config.message)
};
const messageConfirm = confirm;

const responseKey = {
  data: "data",
  status: "status",
  message: "message",
}

export {
  httpCodesConfig,
  responseKey,
  messageBox,
  messageConfirm
}