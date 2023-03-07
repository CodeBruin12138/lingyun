商品详情页的顶部导航栏;
<template>
  <!-- 最外层的div; -->
  <div class="goods-detail-top-nav-bar">
    <!-- 左边按钮; -->
    <div @click="tiaozhuan()">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-back"></use>
      </svg>
    </div>
    <!-- 中间的标题; -->
    <div></div>
    <!-- 右边按钮; -->
    <div>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-more"></use>
      </svg>
    </div>
  </div>
</template>
<script lang="ts" setup>
function tiaozhuan() {
  // 跳转到首页;
  window.location.href = '/'
}
</script>
<style lang="less" scoped>
// 最外层的div;
.goods-detail-top-nav-bar {
  display: flex;
  justify-content: space-between;
}
</style>
