<!-- 搜索页顶部导航; -->
<template>
  <div class="search-top">
    <!-- 左侧图标; -->
    <div class="search-top-left">
      <svg @click="gohome()" class="icon" aria-hidden="true">
        <use xlink:href="#icon-back_android"></use>
      </svg>
    </div>
    <!-- 中心标题; -->
    <div class="search-top-center">
      搜索
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
// 点击左侧图标，返回首页;
const gohome = () => {
  router.push('/')
}


</script>
<style lang="less" scoped>
// 最外层容器样式;
.search-top {
  width: 100%;
  display: flex;
  margin: .25rem 0;

  // 左侧图标样式;
  .search-top-left {
    display: flex;
    align-items: center;
    margin-left: .25rem;
    width: 30%;

    // 左侧图标样式;
    .icon {
      width: .8125rem;
      height: .8125rem;
      color: darkgrey;
    }
  }

  // 中心标题样式;
  .search-top-center {
    font-size: 20px;
    font-weight: bold;
    padding-left: 1.25rem;

  }
}
</style>
