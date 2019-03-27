import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/login'
import Home from '@/components/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
      meta: {
        title: 'xlz'
      }
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        title: 'xlz'
      }
    }
  ]
})
