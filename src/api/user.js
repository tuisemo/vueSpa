import request from '../utils/request'
const api = {
  getTopics (data) {
    return request({
      url: '/api/getTopics',
      method: 'get',
      params: data
    })
  }
}
export default api