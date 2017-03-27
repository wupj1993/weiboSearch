<template>
  <div>
    <chart :options="pie" ref="pie" auto-resize></chart>
  </div>
</template>
<style>
  .echarts {
    margin: 0 auto;
    width: 90% !important;
    height: 400px;
  }
</style>
<script>
  import 'echarts/theme/dark'
  export default {
    data: function () {
      return {
        pie: ''
      }
    },
    mounted: function () {
      this.$http.get('/static/data/pie.json').then(function (resp) {
        this.pie = resp.data
      }, function (error) {
        console.log('error', error)
      })
    }
  }
</script>
