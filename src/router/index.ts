import { createRouter, createWebHistory } from 'vue-router'

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
      //用户页;
      path: '/user',
      name: 'user',
      component: () => import('@/views/UserView.vue')
    },
    {
      // 登录页;
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue')
    }
  ]
})

export default router
