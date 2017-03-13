<template>
  <div>
    <div id="search">
      <div style="margin-top: 15px;">
        <el-input placeholder="请输入内容" v-model="searchValue">
          <el-select v-model="select" slot="prepend" placeholder="请选择">
            <el-option label="地区" value="address"></el-option>
            <el-option label="订单号" value="city"></el-option>
            <el-option label="用户电话" value="3"></el-option>
          </el-select>
          <el-button slot="append" icon="search"></el-button>
        </el-input>
      </div>
    </div>
    <div class="table">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="date" label="日期" sortable width="150">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="address" label="地址" :formatter="formatter">
        </el-table-column>
        <el-table-column prop="tag" label="标签" width="120"
                         :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
                         :filter-method="filterTag">
          <template scope="scope">
            <el-tag :type="scope.row.tag === '家' ? 'primary' : 'success'" close-transition>{{scope.row.tag}}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template scope="scope">
            <el-button size="small">查看
            </el-button>
            <el-button size="small" type="danger">删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination
          layout="prev, pager, next"
          :total="1000">
        </el-pagination>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    data: function () {
      return {
        searchValue: '',
        select: '',
        tableData: ''
      }
    },
    methods: {
      handleIconClick: function (e) {
        console.log(e)
      },
      formatter: function (row, column) {
        return row.address
      },
      filterTag: function (value, row) {
        return row.tag === value
      }
    },
    mounted: function () {
      this.$http.get('/static/data/searchData.json').then(function (resp) {
        this.tableData = resp.data
      }, function (error) {
        console.log(error)
      })
    }

  }
</script>
<style>
  .el-select .el-input {
    width: 110px;
  }

  #search {
    width: 70%;
    margin: 0 auto;

  }

  .table {
    padding: 5%;
  }
</style>
