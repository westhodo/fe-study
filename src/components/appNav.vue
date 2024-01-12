<template>
    <nav :class="navClass">
      <ul>
        <li>
          <router-link to="/donut-game">
            <div v-if="fileTitle">
              <img src="../assets/img/desktop/folder.png" alt="">
              <p>Donut Game</p>
            </div>
            <img src="../assets/img/donut/1.png" alt="" v-else>
          </router-link>
        </li>
        <li>
          <router-link to="/page-404">
            <div v-if="fileTitle">
              <img src="../assets/img/desktop/folder.png" alt="">
              <p>ToDo List</p>
            </div>
            <img src="../assets/img/desktop/memo.png" alt="" v-else>
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