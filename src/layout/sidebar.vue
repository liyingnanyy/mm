<template>
  <el-menu :router="true" :unique-opened="true" default-active="2" class="el-menu-vertical-demo">
    <el-submenu index="/activity">
      <template slot="title">
        <i class="el-icon-tickets"></i>内容系统
      </template>
        <el-menu-item index="/activity">活动管理</el-menu-item>
        <el-menu-item index="/column">栏目管理</el-menu-item>
        <el-menu-item index="/video">视频管理</el-menu-item>
        <el-menu-item index="/news">文章管理</el-menu-item>
        <el-menu-item index="/dynamic">动态管理</el-menu-item>
        <el-menu-item index="/upload">资料下载</el-menu-item>
    </el-submenu>
    <el-submenu index="2">
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
        <el-menu-item index="/ads">栏目广告位</el-menu-item>
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
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  methods: {
  }
}
</script>

<style>

</style>
