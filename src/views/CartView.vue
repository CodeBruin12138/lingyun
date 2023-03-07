<template>
  <h1>购物车</h1>
  <ul>
    <li v-for="(item, index) in cart.cartList" :key="index">
      <input type="checkbox" v-model="item.selected" />
      <p>商品名:{{ item.goods_info.goods_name }}</p>

      价格:{{ item.goods_info.goods_price }} 数量:{{ item.number }} 总价:{{
        item.goods_info.goods_price * item.number
      }}
    </li>
  </ul>
</template>
<script lang="ts" setup>
// 导入;
import { onMounted, reactive } from 'vue'
import axios from '@/util/request'
// 定义常量;
const cart = reactive({
  cartList: [
    {
      id: 7,
      number: 4,
      selected: true,
      goods_info: {
        deletedAt: null,
        goods_classify: 13,
        goods_data: '春季新款女装轻奢冷淡风高级感套装法式名媛气质长裙衬衫连衣裙子',
        goods_discounts: '0.00',
        goods_image: 'ly_3e1347e02e632ab942926d106.jpg',
        goods_name: '春季新款女装轻奢冷淡风高级感套装法式名媛气质长裙衬衫连衣裙子',
        goods_num: 49,
        goods_price: '91.00',
        goods_sell: 0,
        goods_shop: 9,
        id: 67
      }
    }
  ]
})

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
          // token准确, 调用加入购物车接口;
          axios
            .get('/cart/getCartList', {
              headers: {
                Authorization: token
              }
            })
            .then((res) => {
              if (res.data.code === 0) {
                // 调用接口成功;
                cart.cartList = res.data.result.list
                console.info(res.data.result.list[0])
              }
            })
        }
      })
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
