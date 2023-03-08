import {createStore} from 'vuex'
import auth from '@/store/modules/auth'
import user from '@/store/modules/user'
import orders from '@/store/modules/orders'

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {auth, user, orders},
  strict: true
})
