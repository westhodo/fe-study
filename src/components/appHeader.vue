<template>
    <header>
      <button @click="openTooltipHnalder">
        <img src="../assets/img/desktop/apple.png" alt="">
      </button>
      <button class="acc">
        <p>{{ nowTime }}</p>
      </button>
    </header>
    <ul class="tooltip" :class="{ 'on': openTooltip }">
      <li><p>이 Mac의 관하여</p></li>
      <li class="division"></li>
      <li @click="logout"><p>{{ this.$parent.getUsername }} 로그아웃...</p></li>
    </ul>
    <div class="dim" :class="{ 'on': openTooltip }" @click="closeTooltipHnalder"></div>
</template>

<script>
export default {
  name: 'app-header',
  mounted () {
    setInterval(this.updateTime, 1000);
  },
  methods: {
    updateTime () {
      const date = new Date();
      const years = date.getFullYear();
      const month = String(date.getMonth() +1).padStart(2, "0")
      const day = String(date.getDate()).padStart(2, "0")
      const hour = String(date.getHours()).padStart(2, "0")
      const min = String(date.getMinutes()).padStart(2, "0")
      this.nowTime = `${years}년 ${month}월 ${day}일 ${hour}시 ${min}분`
    },
    logout () {
      this.closeTooltipHnalder()
      localStorage.removeItem('west-username')
      this.$parent.wideOpen = false
      this.$parent.getUsername = undefined
      this.$parent.username = ''
    },
    openTooltipHnalder () {
      this.openTooltip = true
    },
    closeTooltipHnalder () {
      this.openTooltip = false
    }
  },
  data () {
    return {
      nowTime: '',
      getUsername: '',
      openTooltip: false
    }
  }
}
</script>

<style>

</style>