import {defaultApiInstance} from '@/api'

const userApi = {
  getUser() {
    const url = '/user'
    return defaultApiInstance.get(url)
  }
}

export default userApi
