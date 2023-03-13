<!-- 首页顶部的搜索及扫码组件; -->
<template>
  <div class="home-top">
    <ScannedItem></ScannedItem>
    <SearchBox></SearchBox>
    <RightRoute></RightRoute>
  </div>
</template>
<script lang="ts" setup>
import ScannedItem from '@/components/commonly/ScannedItem.vue'
import SearchBox from '@/components/commonly/SearchBox.vue'
import RightRoute from '@/components/commonly/RightRoute.vue'



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
