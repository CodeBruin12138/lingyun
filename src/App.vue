<template>
  <router-view></router-view>
  <van-tabbar v-model="active" route v-show="universalStore.isShowTabBar">
    <van-tabbar-item to="/" icon="wap-home">首页</van-tabbar-item>
    <van-tabbar-item to="/discovery" icon="goods-collect">发现</van-tabbar-item>
    <van-tabbar-item to="/chitchat" icon="comment">消息</van-tabbar-item>
    <van-tabbar-item to="/cart" icon="shopping-cart">购物车</van-tabbar-item>
    <van-tabbar-item to="/user" icon="more">我的</van-tabbar-item>
  </van-tabbar>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useUniversalStore } from '@/stores/universal'
const universalStore = useUniversalStore()
const active = ref(0)
</script>

<style scoped></style>
