<template>
  <div>
    {{userInfo}}
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
