<template>
    <nav :class="navClass">
      <ul>
        <li>
          <router-link to="/donut-game" target="_blank">
            <img src="../assets/img/donut/1.png" alt="" v-if="!fileTitle">
            <div v-else>
              <img src="../assets/img/desktop/folder.png" alt="">
              <p v-if="fileTitle">Donut Game</p>
            </div>
          </router-link>
        </li>
        <li>
          <router-link to="/page-404" target="_blank">
            <img src="../assets/img/desktop/memo.png" alt="" v-if="!fileTitle">
            <div v-else>
              <img src="../assets/img/desktop/folder.png" alt="">
              <p v-if="fileTitle">ToDo List</p>
            </div>
          </router-link>
        </li>
      </ul>
    </nav>
</template>

<script>
export default {
  name: 'app-header',
  props: {
    navClass: {
      type: String
    },
    fileTitle: {
      type: Boolean,
      default: false
    }
  }
}
</script>