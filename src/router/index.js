import Vue from 'vue'
import Router from 'vue-router'
import BodyMain from '@/components/BodyMain'
import BodySubject from '@/components/BodySubject'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      component: BodyMain
    },
    {
      path: '/p/:id',
      component: BodySubject
    }
  ]
})
