<template>
  <div class="about">
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="item in 4">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
  export default {
    data: function () {
      return {
        listData: [
          {name: '中国', age: 5000},
          {name: '美国', age: 3},
          {name: '韩国', age: 5}
        ]
      }
    }
  }
</script>
<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
