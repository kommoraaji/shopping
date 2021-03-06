import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/index',
      component: () => import('@/components/pages/index.vue'),
      children: [{
          path: '/home',
          component: () => import('@/components/views/home.vue')
        },
        {
          path: '/shoppingcar',
          component: () => import('@/components/views/shoppingcar.vue'),
          name: "购物车"
        },
        {
          path: '/mine',
          component: () => import('@/components/views/mine.vue'),
          name: '我的订单'
        },
        {
          path: '',
          redirect: '/home'
        }
      ]
    },
    {
      path: '/categories',
      component: () => import('@/components/pages/categories.vue')
    },
    {
      path: '/sort',
      component: () => import('@/components/pages/sort.vue'),
      name: '商品分类'
    },
    {
      path: '/details',
      component: () => import('@/components/pages/details.vue'),
      name: "商品详情"
    },
    {
      path: '/login',
      component: () => import('@/components/pages/login.vue')
    },
    {
      path: '/registered',
      component: () => import('@/components/pages/registered.vue')
    },
    {
      path: '/order',
      component: () => import('@/components/pages/order.vue'),
      name: '确认订单'
    },
    {
      path: '/address',
      component: () => import('@/components/pages/address.vue'),
      name: '地址管理'
    },
    {
      path: '/coupon',
      component: () => import('@/components/pages/coupon.vue'),
      name: '我的优惠券'
    },
    {
      path: '/myqr',
      component: () => import('@/components/pages/myqr.vue'),
      name: '我的二维码'
    },
    {
      path: '/userdetail',
      component: () => import('@/components/pages/userdetail.vue')
    },
    {
      path: '/setting',
      component: () => import('@/components/pages/setting.vue')
    },
    {
      path: '*',
      redirect: '/index'
    }
  ]
})
