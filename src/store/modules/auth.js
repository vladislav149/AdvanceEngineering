import authApi from '@/api/authApi'

const state = {
  credentials: {
    token: localStorage.getItem('token') || null,
    userRole: localStorage.getItem('userRole') || null
  }
}

const getters = {
  getUserRole: state => state.credentials.userRole
}

const mutations = {
  setToken(state, token) {
    state.credentials.token = token
    localStorage.setItem('token', token)
  },
  setUserRole(state, userRole) {
    state.credentials.userRole = userRole
    localStorage.setItem('userRole', userRole)
  },
  deleteToken(state) {
    state.credentials.token = null
    localStorage.removeItem('token')
  },
  deleteUserRole(state) {
    state.credentials.userRole = null
    localStorage.removeItem('userRole')
  }
}

const actions = {
  login({commit}, {user, password}) {
    return authApi.login(user, password).then(({data}) => {
      commit('setToken', data.token)
      commit('setUserRole', data.role)
    })
  },
  logout({commit}) {
    return new Promise(resolve => {
      commit('deleteToken')
      commit('deleteUserRole')
      resolve()
    })
  }
}

export default {state, getters, mutations, actions, namespaced: true}
