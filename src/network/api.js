export function uploadInfo() {
  uni.request({
    url: 'https://www.example.com/request', // 仅为示例，并非真实接口地址。
    method: 'POST',
    data: {
      text: 'uni.request'
    },
    header: {
      'custom-header': 'hello' // 自定义请求头信息
    },
    success: (res) => {
      console.log(res.data)
      this.text = 'request success'
    }
  })
}
