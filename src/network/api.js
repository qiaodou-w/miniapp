import request from '@/network/request'

export function uploadInfo(formData) {
  return request({
    url: '/mp/info/upload',
    data: formData
  })
}
