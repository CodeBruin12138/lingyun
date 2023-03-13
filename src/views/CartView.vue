<template>
  <div><h1>购物车</h1></div>
  <div v-if="cartStore.cart.show">暂未登录,当前购物车为空!请前往登录!</div>
  <div v-if="!cartStore.cart.show">
    <!-- <CartGoodsHome> -->
    <!-- <CartGoodsItem></CartGoodsItem> -->
    <!-- </CartGoodsHome> -->
    {{ cartStore.cart.cartGoods }}
  </div>
</template>
<script lang="ts" setup>
// 导入;
import { onMounted } from 'vue'
import axios from '@/util/request'
import { useCartStore } from '@/stores/cart'
// import CartGoodsHome from '@/components/cart/CartGoodsHome.vue'
// import CartGoodsItem from '@/components/cart/CartGoodsItem.vue'
const cartStore = useCartStore()

// 生命周期函数;
// 进入页面的时候, 调用接口获取用户购物车数据;
onMounted(() => {
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
                // 对数据进行处理, 抽取商品店铺;
                for (let i = 0; i < res.data.result.list.length; i++) {
                  // 获取商品所属店铺;
                  let CartGoodsId = res.data.result.list[i].goods_info.goods_shop
                  // 遍历数据, 判断商品所属店铺是否存在;
                  for (let j = 0; j < cartStore.cart.cartGoods.length; j++) {
                    // 如果店铺不存在, 则把商品店铺添加到店铺中;
                    if (cartStore.cart.cartGoods[j].cartGoodsShopId !== CartGoodsId) {
                      // 把商品店铺添加到店铺中;
                      cartStore.cart.cartGoods.push({
                        cartGoodsShopId: CartGoodsId,
                        cartGoodsList: []
                      })
                    } else {
                      // 如果店铺存在, 则把商品添加到店铺中;
                      cartStore.cart.cartGoods[j].cartGoodsList.push(res.data.result.list[i])
                    }
                  }
                }
                // 修改购物车数据;
                // cartStore.cart.list = res.data.result.list
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
