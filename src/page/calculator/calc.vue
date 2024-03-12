<template>
  <div class="tab_menu">
    <router-link
      v-for="(menu, idx) in tabMenu"
      :key="idx"
      :to="menu.path"
      :class="{ active:menu.active }"
      @click="activeHandler(idx)"
    >
        {{ menu.name }}
    </router-link>
  </div>
  <router-view />
</template>

<script>
import { reactive } from 'vue'

export default {
  name: "calc",
  setup () {
    let tabMenu = reactive([
      { name: '👈🏻', path: '/', active: false },
      { name: '적금계산기', path: 'calc-savings', active: true },
      { name: 'TEST2', path: 'calc-deposit', active: false },
    ])

    const activeHandler = ((idx) => {
      tabMenu.forEach((item) => item.active = false)
      tabMenu[idx].active = true

    })
    return {
      tabMenu,
      activeHandler
    }
  }
}
</script>

<style lang="scss" scoped>
.tab_menu {
  display: inline-flex;
  align-items: center;
  height: 50px;
  gap: 20px;
  margin: 0 2em;
  a {
    &.active {
      position: relative;
      &::after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 0;
        display: block;
        width: 100%;
        height: 2px;
        background-color: #000;
      }
    }

  }
}
h2 {
  margin-top: 30px;
}



</style>