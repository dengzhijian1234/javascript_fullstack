import Vue from 'vue'
import Router from 'vue-router'
import StarNotes from '@/components/StarNotes'
import starBanner from '@/components/starBanner/starBanner'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'StarNotes',
      component: StarNotes,
      meta: {
        title: '星辰笔记'
      }
    },
    {
      path: '/starBanner',
      name: 'starBanner',
      component: starBanner,
      meta: {
        title: '欢迎'
      }
    }
  ]
})
