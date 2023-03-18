<!-- 登录页顶部导航栏 -->
<template>
  <div class="login-nav-bar">
    <svg class="icon" aria-hidden="true" @click="goHome()">
      <use xlink:href="#icon-back"></use>
    </svg>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter();
// 点击图标返回首页;
const goHome = () => {
  router.push('/');
}
</script>
<style lang="less" scoped>
// 最外层容器;
.login-nav-bar {
  width: 94%;
  margin: auto;
  padding-top: .3125rem;

  // 图标样式;
  .icon {
    width: .75rem;
    height: .75rem;
  }
}
</style>
