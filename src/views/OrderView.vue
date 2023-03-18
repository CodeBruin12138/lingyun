<!-- 订单页面; -->
<template>
  <div class="order">
    <!-- 订单顶部导航栏; -->
    <OrderNavBar />
  </div>
</template>
<script setup lang="ts">
import { onBeforeMount, onBeforeUnmount } from 'vue';
import OrderNavBar from '@/components/order/OrderNavBar.vue';
import { useUniversalStore } from '@/stores/universal';
const universalStore = useUniversalStore();
// 在进入订单页面时,隐藏底部导航栏;
onBeforeMount(() => {
  universalStore.setShowTabBar(false);
})
// 在离开订单页面时,显示底部导航栏;
onBeforeUnmount(() => {
  universalStore.setShowTabBar(true);
})
</script>
<style lang="less" scoped></style>
 