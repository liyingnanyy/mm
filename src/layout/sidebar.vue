<template>
  <el-menu :router="true" :default-active="$route.path" :unique-opened="true" class="el-menu-vertical-demo" :default-openeds="[1]">
    <el-submenu :index="item1.path" v-for="( item1, index ) in sideList" :key="item1.id" @click="saveIndex(index)">
      <template slot="title">
        <i :class="item1.class"></i><span>{{item1.title+ index}}</span>
      </template>
       <el-menu-item-group>
          <el-menu-item :index="item2.path" @click="saveIndex(index + '-' + index2)" v-for="(item2, index2) in item1.children" :key="item2.id" :route="{
            path: item2.path
          }">{{item2.title}}</el-menu-item>
       </el-menu-item-group>
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
      sliderActiveIndex: window.sessionStorage.getItem('sliderActiveIndex') || 'activity',
      // 等下不好用
      sideList: [
        {
          title: '内容系统',
          path: '1',
          id: 1,
          class: 'el-icon-tickets',
          children: [
            {
              title: '活动管理',
              path: '/home/activity',
              id: 1.1
            },
            {
              title: '栏目管理',
              path: '/home/column',
              id: 1.2
            },
            {
              title: '视频管理',
              path: '/home/video',
              id: 1.3
            },
            {
              title: '文章管理',
              path: '/home/news',
              id: 1.4
            },
            {
              title: '动态管理',
              path: '/home/dynamic',
              id: 1.5
            },
            {
              title: '资料下载',
              path: '/home/upload',
              id: 1.6
            }
          ]
        },
        {
          title: '代理系统',
          path: '2',
          id: 2,
          class: 'el-icon-document',
          children: [
            {
              title: '代理列表',
              path: '/home/agentList',
              id: 2.1
            },
            {
              title: '代理设置',
              path: '/home/agentSetting',
              id: 2.2
            },
            {
              title: '分钱设置',
              path: '/home/percent',
              id: 2.3
            },
            {
              title: '推广页面设置',
              path: '/home/spread',
              id: 2.4
            }
          ]
        },
        {
          title: '营销系统',
          path: '/home/coupon',
          id: 3,
          class: 'el-icon-news',
          children: [
            {
              title: '优惠券',
              path: '/home/coupon',
              id: 3.1
            },
            {
              title: '订阅推送',
              path: '/home/subscribe',
              id: 3.2
            },
            {
              title: '机构海报',
              path: '/home/mechanism',
              id: 3.3
            },
            {
              title: '栏目广告位',
              path: '/home/ads',
              id: 3.4
            },
            {
              title: '合伙人海报',
              path: '/home/partner',
              id: 3.5
            },
            {
              title: '活动/栏目海报',
              path: '/home/al-poster',
              id: 3.6
            },
            {
              title: '短信群发',
              path: '/home/short-message',
              id: 3.7
            }
          ]
        },
        {
          title: '数据管理',
          path: '/home/order',
          id: 4,
          class: 'el-icon-date',
          children: [
            {
              title: '订单管理',
              path: '/home/order',
              id: 1
            },
            {
              title: '用户关系管理',
              path: '/home/user',
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
              path: '/home/renovation',
              id: 3.1
            },
            {
              title: '客户端菜单',
              path: '/home/client',
              id: 3.2
            },
            {
              title: '公众号设置',
              path: '/home/wx-config',
              id: 3.3
            },
            {
              title: '代理指南',
              path: '/home/guide',
              id: 3.4
            },
            {
              title: '学生手册',
              path: '/home/student',
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
  },
  methods: {
    saveIndex (index) {
      this.sliderActiveIndex = index
      window.sessionStorage.setItem('sliderActiveIndex', index)
      console.log(index)
    }
  },
  created () {
    console.log(this.$route.path)
  }
}
</script>

<style>

</style>
