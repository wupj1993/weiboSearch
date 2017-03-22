let data = [
  {'name': '大庆', 'value': 11},
  {'name': '海门', 'value': 111},
  {'name': '鄂尔多斯', 'value': 21},
  {'name': '招远', 'value': 41},
  {'name': '舟山', 'value': 51},
  {'name': '齐齐哈尔', 'value': 1},
  {'name': '盐城', 'value': 1},
  {'name': '赤峰', 'value': 1},
  {'name': '青岛', 'value': 1},
  {'name': '乳山', 'value': 1},
  {'name': '金昌', 'value': 1},
  {'name': '泉州', 'value': 1},
  {'name': '莱西', 'value': 1},
  {'name': '日照', 'value': 1}
]
const geoCoordMap = {
  '大庆': [125.03, 46.58],
  '海门': [121.15, 31.89],
  '鄂尔多斯': [109.781327, 39.608266],
  '招远': [120.38, 37.35],
  '舟山': [122.207216, 29.985295],
  '齐齐哈尔': [123.97, 47.33],
  '盐城': [120.13, 33.38],
  '赤峰': [118.87, 42.28],
  '青岛': [120.33, 36.07],
  '乳山': [121.52, 36.89],
  '金昌': [102.188043, 38.520089],
  '泉州': [118.58, 24.93],
  '莱西': [120.53, 36.86],
  '日照': [119.46, 35.42]
}

function convertData (data) {
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
  'backgroundColor': '#404a59',
  'title': {
    'text': '全国主要城市空气质量',
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
      'color': '#fff'
    }
  },
  'geo': {
    'map': 'china',
    'label': {
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
      'data': convertData(data),
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
      'data': convertData(data),
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
          'color': '#f4e925',
          'shadowBlur': 10,
          'shadowColor': '#333'
        }
      },
      'zlevel': 1
    }
  ]
}
