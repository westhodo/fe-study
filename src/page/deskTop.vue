<template>
    <div class="screen">
      <div class="user">
        <div class="photo"><img src="../assets/img/desktop/mimoji.jpg" alt=""></div>
        <p class="name_output">{{ getUsername }}</p>
        <div v-if="!getUsername">
          <input
            type="text"
            class="name_input"
            placeholder="이름 입력"
            v-model="username"
            @keyup.enter="onPressEnter(username)"
          >
          <p class="info_text">Touch ID를 활성화 하려면 <br> 사용자 이름이 필요합니다.</p>
        </div>
      </div>
    </div>
</template>

<script>
import {
  ref,
  getCurrentInstance,
  onMounted
} from "vue"

export default {
  name: "desktop",
  setup() {
    const instance = getCurrentInstance()
    const parent = instance.parent.parent.proxy
    let getUsername = ref(undefined)
    const username = ref('')

    const loginHandler = (() => {
      if (getUsername.value) {
        setTimeout(() => parent.currentOpen = true, 1000)
        setTimeout(() => parent.getUsername = getUsername, 1000)
      }
    })

    const mounted = onMounted (() => {
      getUsername.value = localStorage.getItem('west-username')
      loginHandler()
    })

    const onPressEnter = ((val) => {
      localStorage.setItem('west-username', val)
      getUsername.value = localStorage.getItem('west-username')
      loginHandler()
    })

    return {
      mounted,
      getUsername,
      username,
      onPressEnter,
      loginHandler
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/scss/desktop.scss';
</style>