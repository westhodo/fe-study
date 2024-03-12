<template>
    <ul class="select">
      <li><router-link to="/mac/desktop">MAC</router-link></li>
      <li><router-link to="/calculator/calc-savings">CALC</router-link></li>
    </ul>
</template>

<script>

export default {
  name: "select",

}
</script>

<style lang="scss" scoped>
  .select {
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(2, 100px);
    gap: 10px;
    li {
      background-color: #d9d9d9;
      a {
        display: inline-block;
        text-align: center;
        padding: 10px;
        width: 100%;
        height: 100%;
      }
    }
  }
</style>