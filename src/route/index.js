import { createRouter, createWebHistory } from 'vue-router'

import index from '../page/index'
import page404 from '../page/page404'
import donutGame from '../page/donutGame'
import toDoList from '../page/toDoList'

const routes = [
  { path: '/', name: 'index', component: index },
  { path: '/page-404', name: 'page404', component: page404 },
  { path: '/donut-game', name: 'donut-game', component: donutGame },
  { path: '/to-do-list', name: 'to-do-list', component: toDoList },
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export { router }