import calc from '@/page/calculator/calc'
import savings from '@/page/calculator/calc-savings'
import deposit from '@/page/calculator/calc-deposit'

const calcRoute = {
    path: '/calculator/calc-savings',
    component: calc,
    children: [
      { path: '/calculator/calc-savings', name: 'savings', component: savings },
      { path: '/calculator/calc-deposit', name: 'deposit', component: deposit },
    ]
}

export default calcRoute