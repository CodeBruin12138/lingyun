<!-- 用户页头像及部分信息展示组件; -->
<template>
  <div class="user-top-data">
    <!-- 用户头像; -->
    <div class="user-top-data-avatar">
      <img :src="`http://lingyunstar.top:12138/${user.user_portrait}`" alt="用户头像" />
    </div>
    <!-- 用户名; -->
    <div class="user-top-data-name">
      <span>{{ user.user_title }}</span>
      <span>{{ user.user_name }}</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue'
defineProps<{
  // 用户信息;
  user: {
    // 用户账号;
    user_name: string
    // 用户头像;
    user_portrait: string
    // 用户网名;
    user_title: string
  }
}>()
</script>
<style lang="less" scoped>
// 最外层容器;
.user-top-data {
  width: 100%;
  display: flex;

  // 用户头像;
  .user-top-data-avatar {
    width: 25%;
    padding: 0.625rem 0 0.625rem 0.625rem;

    // 头像图片;
    img {
      width: 80%;
      border-radius: 50%;
    }
  }

  // 用户名;
  .user-top-data-name {
    display: flex;
    flex-direction: column;
    color: #ffffff;
    font-size: .4375rem;
    justify-content: center;
    width: 50%;
    white-space: nowrap;
    overflow: hidden;
  }
}
</style>
