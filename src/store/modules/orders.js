import ordersApi from '@/api/ordersApi'

const state = {
  orders: null
}

const getters = {
  orders: state => state.orders
}

const mutations = {
  setOrders(state, data) {
    state.orders = data
  }
}

const actions = {
  getOrders({commit}) {
    return ordersApi.getOrders().then(({data}) => {
      commit('setOrders', data)
    })
  },
  updateStatusOrder({dispatch}, payload) {
    return ordersApi.updateStatusOrder(payload).then(() => {
      dispatch('getOrders')
    })
  },
  deleteOrder({dispatch}, id) {
    return ordersApi.deleteOrder(id).then(() => {
      dispatch('getOrders')
    })
  }
}

export default {state, getters, mutations, actions, namespaced: true}
