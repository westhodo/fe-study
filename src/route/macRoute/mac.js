import mac from '@/page/mac/mac'
import desktop from '@/page/mac/deskTop'
import page404 from '@/page/mac/page404'
import donutGame from '@/page/mac/donutGame'
import toDoList from '@/page/mac/toDoList'

const macRoute = {
    path: '/mac/desktop',
    component: mac,
    children: [
      { path: '/mac/desktop', name: 'desktop', component: desktop  },
      { path: '/mac/page-404', name: 'page404', component: page404 },
      { path: '/mac/donut-game', name: 'donut-game', component: donutGame },
      { path: '/mac/to-do-list', name: 'to-do-list', component: toDoList },
    ]
}

export default macRoute