<template>
  <div>
    <h1>{{userInfo}}</h1>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'mypage',
  computed: {
    ...mapState('users', ['userInfo'])
  }
}
</script>
