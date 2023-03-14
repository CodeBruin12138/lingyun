<!-- 首页顶部的搜索及扫码组件; -->
<template>
  <div class="home-top">
    <ScannedItem></ScannedItem>
    <SearchBox @click="toRouter()"></SearchBox>
    <RightRoute></RightRoute>
  </div>
</template>
<script lang="ts" setup>
import ScannedItem from '@/components/commonly/ScannedItem.vue'
import SearchBox from '@/components/commonly/SearchBox.vue'
import RightRoute from '@/components/commonly/RightRoute.vue'
import { useUniversalStore } from '@/stores/universal'
import { useRouter } from 'vue-router'
const universalStore = useUniversalStore()
const router = useRouter()
// 点击首页顶部的搜索框，跳转到搜索页面并隐藏底部导航栏;
const toRouter = () => {
  router.push('/search')
  universalStore.setShowTabBar(false)
}
</script>
<style lang="less" scoped>
.home-top {
  width: 100%;
  height: 1.25rem;
  display: flex;
  justify-content: space-between;
  background-color: red;
}
</style>
