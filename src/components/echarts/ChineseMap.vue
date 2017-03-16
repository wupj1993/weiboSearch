<template>
  <div class="china-map">
    <chart id="map" :options="map" ref="map" auto-resize></chart>
  </div>
</template>
<style>
  .echarts {
    height: 300px;
  }
</style>
<script>
  export default {
    data: function () {
      return {
        map: ''
      }
    },
    mounted: function () {

    },
    methods: {
    }
  }
</script>

