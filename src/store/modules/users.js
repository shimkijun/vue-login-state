import router from '../../router/index'
import axios from 'axios'

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
  login ({ dispatch }, loginObj) {
    axios
      .post('https://reqres.in/api/login', loginObj)
      .then(res => {
        const token = res.data.token
        localStorage.setItem('access_token', token)
        dispatch('getMemberInfo')
      })
      .catch(err => {
        alert('이메일과 비밀번호를 확인하세요')
        console.log(err)
      })

    // let selectedUser = null
    // state.allUsers.forEach(user => {
    //   if (user.email === loginObj.email) {
    //     selectedUser = user
    //   }
    // })
    // if (selectedUser === null || selectedUser.password !== loginObj.password) {
    //   commit('loginError')
    // } else {
    //   commit('loginSuccess', selectedUser)
    //   router.push('mypage')
    // }
  },
  logout ({ commit }) {
    commit('logout')
    router.push({ name: 'home' })
  },
  getMemberInfo ({ commit }) {
    const token = localStorage.getItem('access_token')
    const config = {
      headers: {
        'access-token': token
      }
    }
    axios
      .get('https://reqres.in/api/users/2', config)
      .then(response => {
        const userInfo = {
          id: response.data.data.id,
          first_name: response.data.data.first_name,
          last_name: response.data.data.last_name,
          avatar: response.data.data.avatar
        }
        commit('loginSuccess', userInfo)
        router.push('mypage')
      })
      .catch(err => {
        alert('이메일과 비밀번호를 확인하세요')
        console.log(err)
      })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
