import { createRouter, createWebHistory } from 'vue-router'

import index from '../page/index'
import desktop from '../page/deskTop'
import page404 from '../page/page404'
import donutGame from '../page/donutGame'
import toDoList from '../page/toDoList'

const routes = [
  {
    path: '/',
    redirect: '/desktop',
    component: index,
    children: [
      { path: '/desktop', name: 'desktop', component: desktop  },
      { path: '/page-404', name: 'page404', component: page404 },
      { path: '/donut-game', name: 'donut-game', component: donutGame },
      { path: '/to-do-list', name: 'to-do-list', component: toDoList },
    ]
  },
]

const router = createRouter({
  history: createWebHistory('/fe-study/'),
  routes
});

export { router }