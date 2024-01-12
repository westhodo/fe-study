<template>
    <main>
      <div class="desktop" :class="{ 'wide': wideOpen }">
        <app-header />
        <img src="../assets/img/desktop/background.jpg" alt="">
        <div class="user">
          <div class="photo"><img src="../assets/img/desktop/mimoji.jpg" alt=""></div>
          <p class="name_output">{{ getUsername }}</p>
          <div
            v-if="!getUsername"
          >
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
        <app-nav :navClass="'type2'" :fileTitle="true"/>
        <app-nav :navClass="'type1'" />
      </div>
    </main>
</template>

<script>
import appHeader from "../components/appHeader.vue"
import appNav from "../components/appNav.vue"
export default {
  name: 'index',
  components: {
    'app-header': appHeader,
    'app-nav': appNav
  },
  mounted () {
    this.getUsername = localStorage.getItem('west-username')
    if (this.getUsername) setTimeout(() => this.wideOpen = true, 1000)
  },
  methods: {
    onPressEnter (val) {
      localStorage.setItem('west-username', val)
      this.getUsername = localStorage.getItem('west-username')
      if (this.getUsername) setTimeout(() => this.wideOpen = true, 1000)
    }
  },
  data () {
    return {
      wideOpen: false,
      username: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/scss/desktop.scss';
</style>