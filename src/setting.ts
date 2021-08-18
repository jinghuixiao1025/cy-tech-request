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


export {
  httpCodesConfig
}