<template>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data: function () {
      return {
        tableData: []
      }
    },
    mounted: function () {
      this.$http.get('/static/data/data.json').then(function (resp) {
        this.tableData = resp.data
      }, function (error) {
        console.log(error)
      })
    }

  }
</script>
