<!-- 搜索页面; -->
<template>
  <div class="search">
    <!-- 搜索页顶部导航; -->
    <SearchTop></SearchTop>
    <!-- 搜索框; -->
  </div>
</template>
<script setup lang="ts">
import { onBeforeUnmount } from 'vue'
import { useUniversalStore } from '@/stores/universal'
import SearchTop from '@/components/search/SearchTop.vue'
const universalStore = useUniversalStore()



// 销毁组件时;
onBeforeUnmount(() => {
  // 显示底部导航栏;
  universalStore.setShowTabBar(true)
})

</script>
<style lang="less" scoped></style>
