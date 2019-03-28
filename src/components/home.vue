<template>
  <el-container>
    <el-header>
      <div class="wrapper">
        <Headers/>
      </div>
    </el-header>
    <el-container class="content">
      <el-aside width="200px">
        <Sidebar/>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Headers from '@/layout/header.vue'
import Sidebar from '@/layout/sidebar.vue'
export default {
  components: {
    Headers,
    Sidebar
  }
}
</script>

<style>
 .el-header {
  width: 100%;
  /* border-bottom: 1px solid #ccc; */
  background: #fff;
  padding: 0 30px;
  height: 80px;
  overflow: hidden;
  -moz-box-shadow: 1px 1px 2px #999;
  -webkit-box-shadow: 1px 1px 2px #999;
  box-shadow: 1px 1px 2px #999;
}
.wrapper {
  max-width: 1200px;
  min-width: 1200px;
  margin: 0 auto;
}
.content {
  margin-top: 15px;
}
</style>
