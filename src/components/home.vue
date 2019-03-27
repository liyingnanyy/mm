<template>
  <el-container>
    <el-header>
      <Headers />
    </el-header>
    <el-container>
      <el-aside width="200px">
        <Sidebar />
      </el-aside>
      <el-main>
        <!-- <router-view></router-view> -->
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
</style>
