import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/login'
import Home from '@/components/home'
import Activity from '@/components/contentSystem/activity/activity'
import Column from '@/components/contentSystem/column/column'
import Video from '@/components/contentSystem/video/video'
import News from '@/components/contentSystem/news/news'
import Dynamic from '@/components/contentSystem/dynamic/dynamic'
import Ads from '@/components/marketing/poster/ads'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'xlz'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      name: 'home',
      path: '/home',
      component: Home,
      children: [
        {path: '/activity', component: Activity},
        {path: '/column', component: Column},
        {path: '/video', component: Video},
        {path: '/news', component: News},
        {path: '/dynamic', component: Dynamic},
        {path: '/ads', component: Ads}
      ]
    }
  ]
})
