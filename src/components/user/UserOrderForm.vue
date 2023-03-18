<!-- 用户页,我的订单组件; -->
<template>
  <div class="user-order-form">
    <!-- 标题; -->
    <div class="user-order-form-one">
      <p>我的订单</p>
      <div class="user-order-form-one-right" @click="myOrder()">
        <span>查看全部</span>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-right"></use>
        </svg>
      </div>
    </div>
    <!-- 图标; -->
    <div class="user-order-form-two">
      <div>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-daifukuan"></use>
        </svg>
        <p>待付款</p>
      </div>
      <div>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-daifahuo2"></use>
        </svg>
        <p>待发货</p>
      </div>
      <div>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-daishouhuo"></use>
        </svg>
        <p>待收货</p>
      </div>
      <div>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-daipingjia2"></use>
        </svg>
        <p>待评价</p>
      </div>
      <div>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-tuikuanshouhou"></use>
        </svg>
        <p>退款/售后</p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const myOrder = () => {
  router.push('/order')
}
</script>
<style lang="less" scoped>
// 用户页,我的订单组件最外层;
.user-order-form {
  margin: auto;
  width: 94%;
  border-radius: 0.1875rem;
  background-color: #ffffff;
}

// 订单顶部的介绍;
.user-order-form-one {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #949292;

  // 左边标题;
  p {
    font-size: .5rem;
    color: #333;
    padding-left: .25rem;
  }

  // 右边带图标的标题;
  .user-order-form-one-right {
    margin-right: .0625rem;
    padding-top: .5rem;

    // 右边标题;
    span {
      font-size: .4rem;
      color: #949292;
      padding-right: .1rem;
    }

    // 右边标题;
    .icon {
      font-size: .4rem;
      color: #949292;
      padding-right: .1rem;
    }


  }
}

// 图标;
.user-order-form-two {
  display: flex;
  margin-left: 0.0625rem;
  margin-right: 0.0625rem;
  justify-content: space-between;
  margin-top: .25rem;

  div {
    text-align: center;

    .icon {
      font-size: .9375rem;
      color: red;
    }
  }



}
</style>