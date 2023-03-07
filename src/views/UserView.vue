<!-- 用户页; -->
<script lang="ts" setup>
import { reactive } from 'vue'
import { useUserStore } from '@/stores/user'
const userStore = useUserStore()
const userInfo = reactive(userStore.userInfo)
</script>
<template>
  <div class="user">
    <!-- 顶部设置; -->
    <div class="user-top"></div>
    <!-- 个人信息; -->
    <div class="user-info">
      <div class="user-info-img">
        <img :src="`http://lingyunstar.top:12138/${userInfo.user_portrait}`" />
      </div>
      <div class="user-info-name">
        <!-- 用户名; -->
        <p>{{ userInfo.user_title }}</p>
        <!-- 用户账号; -->
        <span>{{ userInfo.user_name }}</span>
        <br />
        <!-- 说明; -->
        <span>{{ userInfo.user_explained }}</span>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
// 最外层容器;
.user {
  width: 100%;
  height: 30%;
  background: linear-gradient(90deg, #abdcff, #0396ff);
  // 顶部设置;
  .user-top {
    width: 100%;
    height: 50px;
    // background: blue;
  }
  // 顶部个人信息;
  .user-info {
    display: flex;
    margin-top: 1.25rem;
    margin-left: 0.5rem;
    // 头像;
    .user-info-img {
      width: 2.5rem;
      height: 2.5rem;
      margin-right: 0.5rem;
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .user-info-name {
      width: 60%;
      line-height: 0.3rem;
      p {
        font-size: 0.5rem;
        color: aliceblue;
      }
      span {
        font-size: 0.3125rem;
        color: aliceblue;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
      }
    }
  }
}
</style>
