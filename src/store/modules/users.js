import router from '../../router/index'

const state = {
  userInfo: null,
  isLogin: false,
  isLoginError: false,
  allUsers: [
    { id: 1, name: 'tester1', email: 'example1@example.com', password: '1234' },
    { id: 2, name: 'tester2', email: 'example2@example.com', password: '1234' }
  ]
}

const getters = {

}

const mutations = {
  loginSuccess (state, payload) {
    state.isLogin = true
    state.isLoginError = false
    state.userInfo = payload
  },
  loginError (state) {
    state.isLogin = false
    state.isLoginError = true
  },
  logout (state) {
    state.isLogin = false
    state.isLoginError = false
    state.userInfo = null
  }
}

const actions = {
  login ({ state, commit }, loginObj) {
    let selectedUser = null
    state.allUsers.forEach(user => {
      if (user.email === loginObj.email) {
        selectedUser = user
      }
    })
    if (selectedUser === null || selectedUser.password !== loginObj.password) {
      commit('loginError')
    } else {
      commit('loginSuccess', selectedUser)
      router.push('mypage')
    }
  },
  logout ({ commit }) {
    commit('logout')
    router.push({ name: 'home' })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
