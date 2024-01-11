<template>
    <header>
      <button>
        <img src="../assets/img/desktop/apple.png" alt="">
      </button>
      <div class="acc">
        <p>TIME AREA</p>
      </div>
    </header>
    <ul class="tooltip" v-show="mouseover">
      <li>ㅇㅇ의 MACBOOK</li>
      <li>설정</li>
      <li>로그아웃</li>
    </ul>
</template>

<script>
export default {
  name: 'app-header'
}
</script>

<style>

</style>