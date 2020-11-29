import Vue from 'vue'
import VueRouter from 'vue-router'
import Luckysheet from '../components/luckysheet.vue'

Vue.use(VueRouter)

const router =new VueRouter({
 routes: [
    {
      path:'/',redirect:'/home'
    },
    {
        path:'/home',component: Luckysheet 
    }
  ]
}) 

export default router
