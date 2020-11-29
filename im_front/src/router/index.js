import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'Login',
      path: '/login',
      component: () => import('../components/Login')
    },
    {
      name: 'Main',
      path: '/main',
      component: () => import('../components/Main')
    },
    {
      mame: 'Room',
      path: '/room',
      component: () => import('../components/Room')
    }
  ]
})
