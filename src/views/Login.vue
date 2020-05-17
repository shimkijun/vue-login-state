<template>
  <v-container fill-height style="max-width:550px">

    <v-layout align-center>
      <v-card style="width:100%">
        <v-alert
          class="mb-3"
          :value="isLoginError"
          type="error"
        >
          로그인 실패
        </v-alert>
        <v-alert
          class="mb-3"
          :value="isLogin"
          type="success"
        >
          로그인 완료
        </v-alert>
        <v-toolbar flat>
            <v-toolbar-title>로그인</v-toolbar-title>
        </v-toolbar>
        <div class="pa-3">
            <v-text-field
                v-model="email"
                label="이메일을 입력하세요"
            />
            <v-text-field
                v-model="password"
                type="password"
                label="비밀번호를 입력하세요"
            />
            <v-btn
                color="primary"
                depressed
                large
                block
                @click="login({
                  email,
                  password
                })"
            >
                로그인
            </v-btn>
            <v-btn @click="getTest">get테스트</v-btn>
            <v-btn @click="postTest">post테스트</v-btn>
        </div>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import axios from 'axios'

export default {
  name: 'login',
  data () {
    return {
      email: null,
      password: null
    }
  },
  computed: {
    ...mapState('users', ['isLogin', 'isLoginError'])
  },
  methods: {
    ...mapActions('users', ['login']),
    getTest () {
      axios.get('https://reqres.in/api/users?page=2')
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.error(err)
        })
        .then(() => {
          console.log('test')
        })
    },
    postTest () {
      axios.post('https://reqres.in/api/register', {
        email: 'eve.holt@reqres.in',
        password: 'pistol'
      })
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
