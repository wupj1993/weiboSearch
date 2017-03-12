<template>
  <div class="world">
    <h1>你好啊世界</h1>
    <h2>{{ text }}</h2>
    <el-button @click="visible = true">按钮</el-button>
    <el-dialog v-model="visible" title="Hello world">
      <p>欢迎使用 Element</p>
    </el-dialog>
  </div>
</template>
<script>
  export default {
    data: function () {
      return {
        text: '少年',
        visible: true
      }
    }
  }
</script>
