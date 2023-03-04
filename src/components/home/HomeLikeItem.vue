<!-- 首页猜你喜欢的物品展示组件; -->
<script lang="ts" setup>
import { defineProps } from 'vue'
// props;
defineProps({
  // 传入的数据
  goodsData: Object
})
</script>
<template>
  <div class="home-like-item">
    <img :src="`http://lingyunstar.top:12138/${goodsData?.goods_image}`" />
    <p class="home-like-item-title">{{ goodsData?.goods_name }}</p>
    <div class="home-like-item-price">
      <p class="home-like-item-price-one">￥{{ goodsData?.goods_price }}</p>
      <span class="home-like-item-price-font">￥{{ goodsData?.goods_price }}</span>
      <span>已售{{ goodsData?.goods_num }}件</span>
    </div>
  </div>
</template>
<style lang="less" scoped>
// 最外层的div;
.home-like-item {
  width: 46%;
  height: 30%;
  border-radius: 5%;
  margin: 1%;
  padding: 1%;
  background-color: white;
  // 商品图片;
  img {
    border-radius: 5%;
    width: 100%;
    height: 100%;
  }
}
// 商品介绍;
.home-like-item-title {
  font-size: 0.4375rem;
  margin: 0 auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
// 商品价格;
.home-like-item-price {
  width: 100%;
  display: flex;
  justify-content: space-around;
  font-size: 0.4375rem;
  span {
    font-size: 0.3125rem;
    margin-left: 3%;
    margin-top: 8%;
  }
  .home-like-item-price-font {
    text-decoration: line-through;
    color: rgb(163, 162, 162);
    margin: 8% 0;
  }
}
.home-like-item-price-one {
  color: red;
  font-weight: bolder;
  margin-left: 0;
  font-size: 0.375;
}
</style>
