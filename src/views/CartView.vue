<template>
  <div><h1>购物车</h1></div>
  <div v-if="cartStore.cart.show">123</div>
  <div v-if="!cartStore.cart.show">
    {{ cartStore.cart.list }}
  </div>
</template>
<script lang="ts" setup>
// 导入;
import { onMounted } from 'vue'
import axios from '@/util/request'
import { useCartStore } from '@/stores/cart'
const cartStore = useCartStore()

// 生命周期函数;
// 进入页面的时候, 调用接口获取用户购物车数据;
onMounted(() => {
  console.log(!cartStore.cart.show)
  // 获取token;
  const token = localStorage.getItem('ly_at')
  // 判断token是否存在且是否正确;
  if (token) {
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
          // 修改购物车显示状态;
          cartStore.toggleCartShow(false)
          // token准确, 调用加入购物车接口;
          axios
            .get('/cart/getCartList', {
              headers: {
                Authorization: token
              }
            })
            .then((res) => {
              // 如果返回正确;
              if (res.data.code === 0) {
                // 调用接口成功;
                // 修改购物车数据;
                cartStore.cart.list = res.data.result.list
              }
            })
        } else {
          // 如果返回错误;
          // 修改购物车显示状态;
          cartStore.toggleCartShow(true)
        }
      })
  } else {
    // 如果token不存在;
    // 修改购物车显示状态;
    cartStore.toggleCartShow(true)
  }
})
</script>
<style lang="less" scoped>
p {
  color: red;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
