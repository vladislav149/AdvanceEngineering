import {defaultApiInstance} from '@/api'

const ordersApi = {
  getOrders() {
    const url = '/events'
    return defaultApiInstance.get(url)
  },
  newOrder(data) {
    const url = '/events'
    return defaultApiInstance.post(url, data)
  },
  updateStatusOrder(data) {
    const url = '/events/' + data.id
    return defaultApiInstance.put(url, data)
  },
  deleteOrder(id) {
    const url = '/events/' + id
    return defaultApiInstance.delete(url)
  }
}

export default ordersApi
