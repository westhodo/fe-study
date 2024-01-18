<template>
  <div class="page" :class="{ 'max_wide' : maximize }">
    <app-button />
    <div class="page_404">
      <h2>🚧뚝딱뚝딱🚧</h2>
      <iframe src="https://lottie.host/embed/e15fe7f6-d3f7-40ac-999f-602b9e191640/3ukDgHodMk.json"></iframe>
      <h3>🔥 열심히 만드는 중 🔥</h3>
    </div>
  </div>
</template>

<script>
import { ref } from "vue"
import appButton from '../components/appButton.vue'
export default {
  name: 'page-404',
  setup () {
    const maximize = ref(false)
    return {
      maximize
    }
  },
  components: {
    'app-button': appButton
  }
}
</script>

<style lang="scss" scoped>
/*=============================================================
  PAGE 404
=============================================================*/
.page {
  position: absolute;
  top: 30%;
  left: 10%;
  transform: translate(-10%, -30%);
  width: 60%;
  height: 60%;
  z-index: 4;
  transition: .3s;
  &.max_wide {
    width: 100%;
    height: 100%;
    border-radius: 0;
    box-shadow: none;
    top: calc(50% - 30px);
    left: 50%;
    transform: translate(-50%, calc((-50%) + 60px));
    .page_404 {
      height: calc(100% - 30px);
    }
  }
  .page_404 {
    padding: 2em;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    border-radius: 0 0 15px 15px;
    height: 100%;
    box-shadow: 0px 0px 15px rgba($color: #000000, $alpha: .3);
    iframe {
      border: 0;
      outline: none;
      zoom: 2;
    }
  }
  .window_btn {
    position: absolute;
    top: -30px;
    left: 0%;
    background-color: #F6F6F6;
    width: 100%;
    height: 30px;
    border-radius: 10px 10px 0 0;
    padding: 0 10px;
    border-bottom: 1px solid rgba(0, 0, 0, .3);
    z-index: 2;
  }
}

@media all and (max-width: 768px) {
  .page {
    width: 100%;
    height: 100%;
    transform: translate(0);
    top: 25px;
    left: 0;
  }
  .window_btn {
    display: none;
  }
}
</style>