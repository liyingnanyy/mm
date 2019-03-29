<template>
  <el-menu :router="true" :unique-opened="true" default-active="2" class="el-menu-vertical-demo">
    <el-submenu :index="item1.path" v-for="item1 in sideList" :key="item1.id">
      <template slot="title">
        <i :class="item1.class"></i><span>{{item1.title}}</span>
      </template>
        <el-menu-item :index="item2.path" v-for="item2 in item1.children" :key="item2.id">{{item2.title}}</el-menu-item>
        <!-- <el-menu-item index="/column">栏目管理</el-menu-item>
        <el-menu-item index="/video">视频管理</el-menu-item>
        <el-menu-item index="/news">文章管理</el-menu-item>
        <el-menu-item index="/dynamic">动态管理</el-menu-item>
        <el-menu-item index="/upload">资料下载</el-menu-item> -->
    </el-submenu>
    <!-- <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-document"></i>代理系统
      </template>
        <el-menu-item index="/list">代理列表</el-menu-item>
        <el-menu-item index="/setting">代理设置</el-menu-item>
        <el-menu-item index="2-3">分钱设置</el-menu-item>
        <el-menu-item index="2-4">推广页面设置</el-menu-item>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title">
        <i class="el-icon-news"></i>营销系统
      </template>
        <el-menu-item index="3-1">优惠券</el-menu-item>
        <el-menu-item index="3-2">订阅推送</el-menu-item>
        <el-menu-item index="3-3">机构海报</el-menu-item>
        <el-menu-item index="/ads" >栏目广告位</el-menu-item>
        <el-menu-item index="3-4">合伙人海报</el-menu-item>
        <el-menu-item index="3-5">活动/栏目海报</el-menu-item>
        <el-menu-item index="3-6">短信群发</el-menu-item>
    </el-submenu>
    <el-submenu index="4">
      <template slot="title">
        <i class="el-icon-date"></i>数据管理
      </template>
        <el-menu-item index="4-1">订单管理</el-menu-item>
        <el-menu-item index="4-2">用户关系管理</el-menu-item>
    </el-submenu>
    <el-submenu index="5">
      <template slot="title">
        <i class="el-icon-printer"></i>基础设置
      </template>
        <el-menu-item index="5-1">机构装修</el-menu-item>
        <el-menu-item index="5-2">客户端菜单</el-menu-item>
        <el-menu-item index="5-3">公众号设置</el-menu-item>
        <el-menu-item index="5-4">代理指南</el-menu-item>
        <el-menu-item index="5-5">学生手册</el-menu-item>
    </el-submenu> -->
  </el-menu>
</template>

<script>
export default {
  data () {
    return {
      sideList: [
        {
          title: '内容系统',
          path: '/activity',
          id: 1,
          class: 'el-icon-tickets',
          children: [
            {
              title: '活动管理',
              path: '/activity',
              id: 1.1
            },
            {
              title: '栏目管理',
              path: '/column',
              id: 1.2
            },
            {
              title: '视频管理',
              path: '/video',
              id: 1.3
            },
            {
              title: '文章管理',
              path: '/news',
              id: 1.4
            },
            {
              title: '动态管理',
              path: '/dynamic',
              id: 1.5
            },
            {
              title: '资料下载',
              path: '/upload',
              id: 1.6
            }
          ]
        },
        {
          title: '代理系统',
          path: '/agentList',
          id: 2,
          class: 'el-icon-document',
          children: [
            {
              title: '代理列表',
              path: '/agentList',
              id: 2.1
            },
            {
              title: '代理设置',
              path: '/agentSetting',
              id: 2.2
            },
            {
              title: '分钱设置',
              path: '/percent',
              id: 2.3
            },
            {
              title: '推广页面设置',
              path: '/spread',
              id: 2.4
            }
          ]
        },
        {
          title: '营销系统',
          path: '/coupon',
          id: 3,
          class: 'el-icon-news',
          children: [
            {
              title: '优惠券',
              path: '/coupon',
              id: 3.1
            },
            {
              title: '订阅推送',
              path: '/subscribe',
              id: 3.2
            },
            {
              title: '机构海报',
              path: '/mechanism',
              id: 3.3
            },
            {
              title: '栏目广告位',
              path: '/ads',
              id: 3.4
            },
            {
              title: '合伙人海报',
              path: '/partner',
              id: 3.5
            },
            {
              title: '活动/栏目海报',
              path: '/al-poster',
              id: 3.6
            },
            {
              title: '短信群发',
              path: '/short-message',
              id: 3.7
            }
          ]
        },
        {
          title: '数据管理',
          path: '4',
          id: 4,
          class: 'el-icon-date',
          children: [
            {
              title: '订单管理',
              path: '/activity',
              id: 1
            },
            {
              title: '用户关系管理',
              path: '/column',
              id: 2
            }
          ]
        },
        {
          title: '基础设置',
          path: '5',
          id: 5,
          class: 'el-icon-setting',
          children: [
            {
              title: '机构装修',
              path: '/activity',
              id: 3.1
            },
            {
              title: '客户端菜单',
              path: '/column',
              id: 3.2
            },
            {
              title: '公众号设置',
              path: '/video',
              id: 3.3
            },
            {
              title: '代理指南',
              path: '/ads',
              id: 3.4
            },
            {
              title: '学生手册',
              path: '/ads',
              id: 3.5
            }
          ]
        },
        {
          title: '更多功能',
          id: 6,
          path: '/more',
          class: 'el-icon-more'
        }
      ]
    }
  }
}
</script>

<style>

</style>
