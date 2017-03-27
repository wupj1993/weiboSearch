<template>
  <div class="fujian-map">
    <chart id="map" :options="map" ref="map" auto-resize></chart>
  </div>
</template>
<style>
  .echarts {
    margin: 0 auto;
    width: 90% !important;
    height: 400px;
  }

  .fujian-map {
    margin-top: 5%;
  }
</style>
<script>
  import ECharts from 'vue-echarts/components/ECharts.vue'
  import fuJianMap from '../../js/fujian.json'
  ECharts.registerMap('fuJianMap', fuJianMap)
  function convertData (data, geoCoordMap) {
    let res = []
    for (let i = 0; i < data.length; i++) {
      let geoCoord = geoCoordMap[data[i].name]
      if (geoCoord) {
        res.push({
          name: data[i].name,
          value: geoCoord.concat(data[i].value)
        })
      }
    }
    return res
  }
  export default {
    data: function () {
      return {
        map: ''
      }
    },
    mounted: function () {
      let data = [
        {'name': '泉州', 'value': 1}
      ]
      const geoCoordMap = {
        '泉州': [118.58, 24.93]
      }
      this.map = {
        'backgroundColor': '#404a59',
        'title': {
          'text': '福建省空气质量',
          'subtext': 'data from PM25.in',
          'sublink': 'http://www.pm25.in',
          'left': 'center',
          'textStyle': {
            'color': '#fff'
          }
        },
        'tooltip': {
          'trigger': 'item'
        },
        'legend': {
          'orient': 'vertical',
          'y': 'bottom',
          'x': 'right',
          'data': ['pm2.5'],
          'textStyle': {
            'color': '#ff241e'
          }
        },
        'geo': {
          'map': 'fuJianMap',
          'label': {
            'normal': {
              'show': true,
              'textStyle': {
                'color': '#e6f4f1'
              }
            },
            'emphasis': {
              'show': true
            }
          },
          'roam': true,
          'itemStyle': {
            'normal': {
              'areaColor': '#323c48',
              'borderColor': '#111'
            },
            'emphasis': {
              'areaColor': '#2a333d'
            }
          }
        },
        'series': [
          {
            'name': 'pm2.5',
            'type': 'scatter',
            'coordinateSystem': 'geo',
            'data': convertData(data, geoCoordMap),
            'symbolSize': val => val[2] / 10,
            'label': {
              'normal': {
                'formatter': '{b}',
                'position': 'right',
                'show': false
              },
              'emphasis': {
                'show': true
              }
            },
            'itemStyle': {
              'normal': {
                'color': '#ddb926'
              }
            }
          },
          {
            'name': 'Top 5',
            'type': 'effectScatter',
            'coordinateSystem': 'geo',
            'data': convertData(data, geoCoordMap),
            'symbolSize': function (val) {
              return val[2] / 10
            },
            'showEffectOn': 'render',
            'rippleEffect': {
              'brushType': 'stroke'
            },
            'hoverAnimation': true,
            'label': {
              'normal': {
                'formatter': '{b}',
                'position': 'right',
                'show': true
              }
            },
            'itemStyle': {
              'normal': {
                'color': '#31a7f4',
                'shadowBlur': 10,
                'shadowColor': '#333'
              }
            },
            'zlevel': 1
          }
        ]
      }
    },
    methods: {}
  }
</script>
