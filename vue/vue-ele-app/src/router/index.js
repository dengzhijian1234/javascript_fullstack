import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Goods from '@/components/goods/goods'
import Ratings from "@/components/ratings/ratings"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'goods',
      component: Goods
    },
    {
      path: '/goods',
      name: 'goods',
      component: Goods
    },
    {
      path: '/',
      name: 'ratings',
      component: Ratings
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: Ratings
    }
  ]
})
