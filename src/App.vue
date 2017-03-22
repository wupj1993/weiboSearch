<template>
  <div id="app">
    <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">
        <router-link to="/">首页</router-link>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">统计</template>
        <el-menu-item index="2-1">
          <router-link to="/count/lineBar">折线图</router-link>
        </el-menu-item>
        <el-menu-item index="2-2">
          <router-link to="/count/pie">饼图</router-link>
        </el-menu-item>
        <el-menu-item index="2-3">
          <router-link to="/count/chineseMap">柱状图</router-link>
        </el-menu-item>
      </el-submenu>
      <el-menu-item index="3">
        <router-link to="/search">搜索</router-link>
      </el-menu-item>
      <el-menu-item index="4">
        <router-link to="/count/chineseMap">地图分布</router-link>
      </el-menu-item>
      <el-menu-item index="5">
        <router-link to="/about">关于</router-link>
      </el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data: function () {
      return {
        activeIndex: '1'
      }
    },
    methods: {
      handleSelect: function (e) {
        console.log(e)
      }
    }
  }

</script>

<style>

</style>
