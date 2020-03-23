import Vue from 'vue'
import Router from 'vue-router'
// import index from '@/components/index'
// import home from '@/components/home'
import index from '../views/index.vue'
import classify from '../views/classify.vue'
import find from '../views/find.vue'
import cart from '../views/cart.vue'
import user from '../views/user.vue'
import huawei from '../views/huawei.vue'
import honour from '../views/honour.vue'
import digital from '../views/digital.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: index
    },
    {
      path:'/classify',
      component: classify
    },
    {
      path:'/find',
      component: find
    },
    {
      path:'/cart',
      component: cart
    },
    {
      path:'/user',
      component: user
    },
    {
      path:'/huawei',
      component: huawei
    },
    {
      path:'/honour',
      component: honour
    },
    {
      path:'/digital',
      component: digital
    }
  ]
})
