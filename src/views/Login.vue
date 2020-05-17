<template>
  <v-container fill-height style="max-width:550px">

    <v-layout align-center>
      <v-card style="width:100%">
        <v-alert
          class="mb-3"
          :value="isError"
          type="error"
        >
          로그인 실패
        </v-alert>
        <v-alert
          class="mb-3"
          :value="loginSuccess"
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
                @click="login"
            >
                로그인
            </v-btn>
        </div>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  name: 'login',
  data () {
    return {
      email: null,
      password: null,
      isError: false,
      loginSuccess: false,
      allUsers: [
        { id: 1, name: 'tester1', email: 'example1@example.com', password: '1234' },
        { id: 2, name: 'tester2', email: 'example2@example.com', password: '1234' }
      ]
    }
  },
  methods: {
    login () {
      let selectedUser = null
      this.allUsers.forEach(user => {
        if (user.email === this.email) {
          selectedUser = user
        }
      })
      selectedUser === null
        ? (this.isError = true)
        : selectedUser.password !== this.password
          ? (this.isError = true)
          : (this.loginSuccess = true)
    }
  }
}
</script>
