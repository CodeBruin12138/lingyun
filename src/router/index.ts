import { createRouter, createWebHistory } from 'vue-router'
import axios from '@/util/request'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      // 首页;
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      //发现页;
      path: '/discovery',
      name: 'discovery',
      component: () => import('@/views/DiscoveryView.vue')
    },
    {
      //消息页;
      path: '/chitchat',
      name: 'chitchat',
      component: () => import('@/views/ChitchatView.vue')
    },
    {
      //购物车页;
      path: '/cart',
      name: 'cart',
      component: () => import('@/views/CartView.vue')
    },
    {
      //登陆测试页;
      path: '/loginTest',
      name: 'loginTest',
      component: () => import('@/views/LoginTest.vue')
    },
    {
      //用户页;
      path: '/user',
      name: 'user',
      component: () => import('@/views/UserView.vue'),
      // 进入路由前判断是否有token并校验token是否正确;
      beforeEnter: (to, from, next) => {
        // 获取本地存储token;
        const token = localStorage.getItem('ly_at')
        // 如果存在token;
        if (token) {
          // 对获取到的token进行验证;
          axios
            .get('/user/verifyUserToken', {
              headers: {
                Authorization: token
              }
            })
            .then((res) => {
              // 如果token正确,则跳转到用户页;
              if (res.data.code === 0) {
                next()
                return
              }
              // 如果token不正确,则跳转到登录页;
              next('/login')
            })
        } else {
          // 如果不存在token,则跳转到登录页;
          next('/login')
        }
      },
      children: []
    },
    //商品详情页;
    {
      path: '/goodsDetail/:id',
      name: 'goodsDetail',
      component: () => import('@/views/GoodsDetailView.vue')
    },
    // 登录页;
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue')
    },
    // 搜索页;
    {
      path: '/search',
      name: 'search',
      component: () => import('@/views/SearchView.vue')
    },
    // 订单页;
    {
      path: '/order',
      name: 'order',
      component: () => import('@/views/OrderView.vue'),
      // 进入路由前判断是否有token并校验token是否正确;
      beforeEnter: (to, from, next) => {
        // 获取本地存储token;
        const token = localStorage.getItem('ly_at')
        // 如果存在token;
        if (token) {
          // 对获取到的token进行验证;
          axios
            .get('/user/verifyUserToken', {
              headers: {
                Authorization: token
              }
            })
            .then((res) => {
              // 如果token正确,则跳转到用户页;
              if (res.data.code === 0) {
                next()
                return
              }
              // 如果token不正确,则跳转到登录页;
              next('/login')
            })
        } else {
          // 如果不存在token,则跳转到登录页;
          next('/login')
        }
      }
    },
    // 测试页;
    {
      path: '/test',
      name: 'test',
      component: () => import('@/views/TestView.vue')
    },
    // 404页;
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: () => import('@/views/NotFoundView.vue')
    }
  ]
})

export default router
