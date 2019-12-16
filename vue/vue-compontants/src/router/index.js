import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import a from '@/components/pages/a'
import parent from '@/components/views/parent'
import form from '@/components/form/form'
import Show from '@/components/form/show'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'Show',
      component: Show
    }
  ]
})
