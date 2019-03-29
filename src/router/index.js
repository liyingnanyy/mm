import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/login/login'
import Home from '@/components/home'
import Activity from '@/components/contentSystem/activity/activity'
import Column from '@/components/contentSystem/column/column'
import Video from '@/components/contentSystem/video/video'
import News from '@/components/contentSystem/news/news'
import Dynamic from '@/components/contentSystem/dynamic/dynamic'
import Upload from '@/components/contentSystem/dataDownload/upload'
import AgentList from '@/components/agentSystem/agentList/agentList'
import AgentSet from '@/components/agentSystem/agentSetting/agentSetting'
import Percent from '@/components/agentSystem/percent/percent'
import Spread from '@/components/agentSystem/spread'
import Coupon from '@/components/marketing/coupon/coupon'
import Ads from '@/components/marketing/poster/ads'
import Mechanism from '@/components/marketing/poster/mechanism'
import Subscribe from '@/components/marketing/subscribe/subscribe'
import Partner from '@/components/marketing/poster/partner'
import Alposter from '@/components/marketing/poster/al-poster'
import Shortmessage from '@/components/marketing/short-message/short-message'
import Order from '@/components/datamanagement/order'
import User from '@/components/datamanagement/user'
import Renovation from '@/components/basics/renovation/renovation'
import Client from '@/components/basics/client/client'
import wxconfig from '@/components/basics/wx-config/wx-config'
import Guide from '@/components/basics/guide/guide'
import Student from '@/components/basics/student/student'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home/activity'
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
        {path: 'activity', component: Activity},
        {path: 'column', component: Column},
        {path: 'video', component: Video},
        {path: 'news', component: News},
        {path: 'dynamic', component: Dynamic},
        {path: 'upload', component: Upload},
        {path: 'agentList', component: AgentList},
        {path: 'agentSetting', component: AgentSet},
        {path: 'percent', component: Percent},
        {path: 'spread', component: Spread},
        {path: 'ads', component: Ads},
        {path: 'coupon', component: Coupon},
        {path: 'subscribe', component: Subscribe},
        {path: 'mechanism', component: Mechanism},
        {path: 'al-poster', component: Alposter},
        {path: 'partner', component: Partner},
        {path: 'short-message', component: Shortmessage},
        {path: 'order', component: Order},
        {path: 'user', component: User},
        {path: 'renovation', component: Renovation},
        {path: 'client', component: Client},
        {path: 'wx-config', component: wxconfig},
        {path: 'guide', component: Guide},
        {path: 'student', component: Student}
      ]
    }
  ]
})
