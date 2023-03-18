<!-- 订单顶部导航栏 -->
<template>
  <div class="order-nav-bar">
    <!-- 左侧图标; -->
    <div @click="goBack()">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-back"></use>
      </svg>
    </div>
    <!-- 标题; -->
    <div class="order-nav-bar-title">
      <p>我的订单</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter();

// 跳转到前一个页面;
const goBack = () => {
  router.go(-1);
}
</script>
<style lang="less" scoped>
// 最外层容器;
.order-nav-bar {
  width: 100%;
  display: flex;

  // 左侧图标;
  .icon {
    width: .75rem;
    height: .75rem;
    margin: 0.5rem 0 0 0.5rem;
  }

  // 标题;
  .order-nav-bar-title {
    font-size: .5625rem;
    padding-left: 23%;
  }
}
</style>
