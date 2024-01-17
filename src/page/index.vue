<template>
    <main>
      <div class="desktop" :class="{ 'wide': currentOpen }">
        <app-header :customClass="currentOpen ? 'open' : ''" />
        <img src="../assets/img/desktop/background.jpg" alt="">
        <router-view />
        <app-nav :navClass="'type2'" :fileTitle="true"/>
        <app-nav :navClass="'type1'" />
      </div>
    </main>
</template>

<script>
import { ref } from "vue"
import appHeader from "../components/appHeader.vue"
import appNav from "../components/appNav.vue"

export default {
  name: "index",
  setup() {
    let currentOpen = ref(false)
    return { currentOpen }
  },
  components: {
    'app-header': appHeader,
    'app-nav': appNav
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/scss/desktop.scss';
</style>