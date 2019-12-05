import Vue from 'vue'
import Router from 'vue-router'
import StarNotes from '@/components/StarNotes'
import starBanner from '@/components/starBanner/starBanner'
import starLogin from '@/components/login/starLogin'
import starRegister from '@/components/register/starRegister'
import noteClass from '@/components/noteClass/noteClass'
import noteList from '@/components/noteList/noteList'

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
    },
    {
      path: '/starLogin',
      name: 'starLogin',
      component: starLogin,
      meta: {
        title: '登入'
      }
    },
    {
      path: '/starRegister',
      name: 'starRegister',
      component: starRegister,
      meta: {
        title: '注册'
      }
    },
    {
      path: '/noteClass',
      name: 'noteClass',
      component: noteClass,
      meta: {
        title: '笔记分类'
      }
    },
    {
      path: '/noteList',
      name: 'noteList',
      component: noteList,
      meta: {
        title: '笔记列表'
      }
    }
  ]
})
