<template>
    <nav :class="navClass">
      <ul>
        <li v-for="file in navMenuList" :key="file">
          <router-link :to="file.path">
            <img
              :src="require(`@/assets/img/${file.icon === '' ? 'desktop/folder.png' : file.icon }`)"
              alt=""
            >
            <p v-if="fileTitle">{{ file.name }}</p>
          </router-link>
        </li>
      </ul>
    </nav>
</template>

<script>
import {
  reactive,
  getCurrentInstance
} from 'vue'
export default {
  name: 'app-nav',
  setup () {
    let navMenuList = reactive([])
    const instance = getCurrentInstance()

    navMenuList = [{
        name: 'Donut Game',
        icon: 'donut/10.png',
        path: '/donut-game'
      },
      // {
      //   name: 'Error 404',
      //   icon: '',
      //   path: '/page-404'
      // },
      {
        name: 'ToDo List',
        icon: 'desktop/memo.png',
        path: '/to-do-list'
      },
    ]
    if (instance.proxy.navClass === 'type2') navMenuList.map((nav) => nav.icon = '')

    return {
      navMenuList
    }
  },
  props: {
    navClass: {
      type: String,
      default: ''
    },
    fileTitle: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="scss" scoped>
/*=============================================================
  NAV
=============================================================*/
nav {
  opacity: 0;
  visibility: hidden;
  ul {
    display: flex;
    gap: 20px;
    padding: 10px 20px;
    li {
      a {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 100%;
        font-size: 12px;
        gap: 4px;
        text-align: center;
        img {
          width: 52px;
          height: 52px;
          border-radius: 10px;
          object-fit: cover;
        }
        p {
          color: #fff;
          word-break: break-all;
        }
      }
    }
  }
  &.type1 {
    position: absolute;
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.4);
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    ul {
      li {
        a {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          height: 100%;
          font-size: 12px;
          gap: 4px;
          img {
            // background-color: #fff;
            // box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
          }
          p {
            display: none;
          }
        }
      }
    }
  }
  &.type2 {
    ul {
      flex-direction: column;
      align-items: flex-end;
      padding: 20px;
      li {
        width: 70px;
      }
    }
  }
}
</style>