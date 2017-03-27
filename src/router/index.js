import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui' // 引入element-ui
import Home from '@/components/Home'
import Map from '@/components/Map'
import Count from '@/components/Count'
import Search from '@/components/Search'
import About from '@/components/About'
import LineBar from '@/components/echarts/LineBar'
import Pie from '@/components/echarts/Pie'
import ChineseMap from '@/components/echarts/ChineseMap'
import ProvinceMap from '@/components/echarts/ProvinceMap'

Vue.use(Router)
Vue.use(ElementUI)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/map',
      name: 'Map',
      component: Map
    },
    {
      path: '/count',
      component: Count
    },
    {
      path: '/count/lineBar',
      name: 'LineBar',
      component: LineBar
    },
    {
      path: '/count/pie',
      name: 'Pie',
      component: Pie
    },
    {
      path: '/count/province',
      name: 'ProvinceMap',
      component: ProvinceMap
    },
    {
      path: '/count/chineseMap',
      name: 'ChineseMap',
      component: ChineseMap
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
