import Vue from 'vue'
import Router from 'vue-router'
import Offers from '@/components/Offers'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Offers',
      component: Offers
    }
  ]
})
