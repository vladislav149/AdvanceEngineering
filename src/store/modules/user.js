import userApi from '@/api/userApi'

const state = {
  user: {
    user: '',
    name: '',
    role: ''
  }
}

const getters = {
  user: state => state.user
}

const mutations = {
  updateUser(state, {user, name, role}) {
    state.user.user = user
    state.user.name = name
    state.user.role = role
    localStorage.setItem('userRole', role)
  }
}

const actions = {
  updateUser({commit}) {
    return userApi.getUser().then(({data}) => {
      commit('updateUser', data)
    })
  }
}

export default {state, getters, mutations, actions, namespaced: true}
