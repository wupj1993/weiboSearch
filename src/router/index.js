import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui' // 引入element-ui
import Home from '@/components/Home'
import Map from '@/components/Map'
import Count from '@/components/Count'
import Search from '@/components/Search'
import About from '@/components/About'

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
      name: 'Count',
      component: Count
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
