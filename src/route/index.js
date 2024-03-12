import { createRouter, createWebHashHistory } from 'vue-router'
import macRoute from './macRoute/mac'
import selectRoute from './selectRoute/select'
import calcRoute from './calcRoute/calc'

const routes = [
  { ...selectRoute },
  { ...macRoute },
  { ...calcRoute },
]

const router = createRouter({
  history: createWebHashHistory('/fe-study/'),
  routes
});

export { router }