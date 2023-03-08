import {loginApiInstance} from '@/api'

const authApi = {
  login(user, password) {
    const url = '/login'
    const data = {user, password}
    return loginApiInstance.post(url, data)
  }
}

export default authApi
