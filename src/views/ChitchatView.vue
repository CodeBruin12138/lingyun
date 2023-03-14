<!-- 消息页的主页面，用于展示消息列表，以及消息的详情; -->
<template>
  <div class="chitchat">
    <!-- 顶部导航栏; -->
    <ChitchatNavBar></ChitchatNavBar>
    <!-- 搜索; -->
    <!-- 消息列表; -->


  </div>
</template>
<script setup lang="ts">
import ChitchatNavBar from '@/components/chitchat/ChitchatNavBar.vue'


</script>
<style lang="less" scoped>
// 最外层容器样式;
.chitchat {
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  backdrop-filter: blur(10px);
}
</style>
