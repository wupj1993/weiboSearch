<template>
  <div>
    <div id="search">
      <div style="margin-top: 15px;">
        <el-input placeholder="请输入内容" v-model="searchValue">
          <el-select v-model="select" slot="prepend" placeholder="请选择">
            <el-option label="姓名" value="address"></el-option>
            <el-option label="地址" value="city"></el-option>
            <el-option label="邮箱号" value="email"></el-option>
          </el-select>
          <el-button slot="append" icon="search"></el-button>
        </el-input>
      </div>
    </div>
    <div class="table">
      <el-table :data="tableData" @row-click="rowClick" border style="width: 100%">
        <el-table-column prop="name"  label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="gender" label="性别" width="120"
                         :filters="[{ text: '女', value: 'F' }, { text: '男', value: 'M' }]"
                         :filter-method="filterGender">
          <template scope="scope">
            <el-tag :type="scope.row.gender === 'F' ? 'primary' : 'success'" close-transition>{{scope.row.gender === 'F'
              ? '女' : '男'}}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="date" label="生日" sortable width="150">
        </el-table-column>
        <el-table-column prop="address" label="地址" :formatter="formatter">
        </el-table-column>
        <el-table-column prop="email" label="E-mail">
        </el-table-column>
      </el-table>
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400">
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
        tableData: [],
        currentPage: 2
      }
    },
    methods: {
      handleIconClick: function (e) {
        console.log(e)
      },
      formatter: function (row, column) {
        return row.address
      },
      filterGender: function (value, row) {
        return row.gender === value
      },
      rowClick: function (row, event, column) {
        console.log(row)
      },
      handleSizeChange: function (val) {
        console.log(`每页 ${val} 条`)
      },
      handleCurrentChange: function (val) {
        this.currentPage = val
        console.log(`当前页: ${val}`)
      }
    },
    mounted: function () {
      this.$http.get('/static/data/searchData.json').then(function (resp) {
        this.tableData = resp.data
      }, function (error) {
        console.log('error', error)
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
