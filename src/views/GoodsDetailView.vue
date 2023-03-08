<!-- 商品详情页; -->
<template>
  <!-- 最外层的div; -->
  <div>
    <!-- 顶部导航栏; -->
    <GoodsDetailTopNavBar></GoodsDetailTopNavBar>
    <!-- 商品详情; -->
    <img :src="`http://www.lingyunstar.top:12138/${goods.goodsDetail.goods_image}`" />
    <p>{{ goods.goodsDetail.goods_name }}</p>
    {{ goods.goodsDetail }}

    <button @click="addCart()">加入购物车</button>
  </div>
</template>
<script setup lang="ts">
import { onMounted, reactive, onBeforeUnmount } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from '@/util/request'
import { useUniversalStore } from '@/stores/universal'
import GoodsDetailTopNavBar from '@/components/goods/GoodsDetailTopNavBar.vue'
import { showSuccessToast } from 'vant'
const universalStore = useUniversalStore()
const route = useRoute()
const router = useRouter()
// 商品信息;
const goods = reactive({
  goodsDetail: {
    id: 72,
    goods_name: '杜小宅花房姑娘棉纱小宅裙小清新碎花连衣裙宽松中长款裙子夏季女',
    goods_price: '52.00',
    goods_num: 76,
    goods_image: 'ly_3e1347e02e632ab942926d10a.jpg',
    goods_discounts: '0.00',
    goods_shop: 9,
    goods_classify: 39,
    goods_sell: 0,
    goods_data: '杜小宅花房姑娘棉纱小宅裙小清新碎花连衣裙宽松中长款裙子夏季女',
    createdAt: '2023-03-07T06:25:30.000Z',
    updatedAt: '2023-03-07T06:25:30.000Z',
    deletedAt: null
  }
})
// 加入购物车;
function addCart() {
  // 首先判断用户token是否准确;
  const token = localStorage.getItem('ly_at')
  // 调用接口判断token是否准确;
  axios
    .get('/user/verifyUserToken', {
      headers: {
        // 携带token;
        Authorization: token
      }
    })
    .then((res) => {
      // 如果返回正确;
      if (res.data.code === 0) {
        // token准确, 调用加入购物车接口;
        axios
          .post(
            '/cart/addCart',
            {
              goods_id: route.query.id
            },
            {
              headers: {
                Authorization: token
              }
            }
          )
          .then((res) => {
            if (res.data.code === 0) {
              router.push('/cart')
              // 加入购物车成功;
              showSuccessToast('加入购物车成功!')
            }
          })
      } else {
        // token不准确, 跳转到登录页面;
        router.push('/login')
      }
    })
}

// 在页面加载的时候, 根据商品ID请求商品数据;
onMounted(() => {
  // 隐藏底部状态栏;
  universalStore.setShowTabBar(false)
  // 根据id请求商品详情数据;
  axios.get(`/goods/getGoodsDetail/${route.query.id}`).then((res) => {
    if (res.data.code === 0) {
      // 把数据赋值给goodsDetail;
      goods.goodsDetail = res.data.result
    }
  })
})
// 在页面卸载的时候;
onBeforeUnmount(() => {
  // 显示底部状态栏;
  universalStore.setShowTabBar(true)
})
</script>
<style scoped>
img {
  width: 100%;
}
</style>
