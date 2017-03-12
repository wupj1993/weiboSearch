<template>
  <div class="count">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="line-height: 36px;">卡片名称</span>
        <el-button style="float: right;" type="primary">操作按钮</el-button>
      </div>
      <div v-for="o in 4" class="text item">
        {{'列表内容 ' + o }}
      </div>
    </el-card>
  </div>
</template>
<script>
  export default {

  }
</script>
<style scoped>
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
</style>
