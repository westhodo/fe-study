<template>
    <div class="window_btn">
      <button @click="routeGoHome" title="닫기"></button>
      <button @click="routeGoBack" title="뒤로가기"></button>
      <button
        @click="isMaximize"
        :class="{ 'off' : disable }"
        :title="disable ? '사용할 수 없음' : '화면 확대/축소'"
      ></button>
    </div>
</template>

<script>
import {
  getCurrentInstance
} from "vue"
import { useRouter } from 'vue-router'

export default {
  name: 'app-button',
  setup () {

    const instance = getCurrentInstance()
    let parent = instance.parent.proxy
    const router = useRouter()

    const routeGoHome = (() => router.push('/'))
    const routeGoBack = (() => router.go(-1))
    const isMaximize = (() => parent.maximize = !parent.maximize)

    return {
      routeGoHome,
      routeGoBack,
      isMaximize
    }
  },
  props: {
    disable: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>

/*=============================================================
  HEADER
=============================================================*/
header {
  width: 100%;
  height: 0;
  overflow: hidden;
  line-height: 30px;
  background-color: rgba(0, 0, 0, .2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 0 10px;
  transition: .3s;
  &.open {
    height: 25px;
  }
  button {
    color: #fff;
    border-radius: 5px;
    font-size: 12px;
    padding: 0 5px;
    &:nth-of-type(1) {
      width: 50px;
      height: inherit;
    }
    &:hover {
      background-color: rgba(255, 255, 255, .3);
    }
    img {
      width: 16px;
      height: 16px;
    }
  }
  + .tooltip {
    opacity: 0;
    visibility: hidden;
    transition: .3s;
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 5px;
    position: absolute;
    left: 10px;
    top: 25px;
    font-size: 12px;
    max-width: 200px;
    width: 200px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .2);
    z-index: 3;
    &.on {
      opacity: 1;
      visibility: visible;
    }
    li {
      padding: 5px;
      &.division {
        padding: 0;
        height: 1px;
        width: 95%;
        margin: 0 auto;
        background-color: rgba(0, 0, 0, 0.2);
      }
      p {
        padding: 5px 10px;
      }
      &:nth-of-type(1) {
        p {
          font-weight: 700;
        }
      }
      &:not(&:nth-of-type(1)) {
        p {
          border-radius: 5px;
          &:hover {
            color: #fff;
            background-color: #2692FB;
            cursor: default;
          }
        }
      }
    }
  }
}
.dim {
  opacity: 0;
  visibility: hidden;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  z-index: 1;
  &.on {
    opacity: 1;
    visibility: visible;
  }
}
</style>