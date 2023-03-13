<!-- 用户页; -->
<script lang="ts" setup>
import { reactive } from 'vue'
import { useUserStore } from '@/stores/user'
import UserOrderForm from '@/components/user/UserOrderForm.vue'
import UserAccountInformation from '@/components/user/UserAccountInformation.vue'
const userStore = useUserStore()
const userInfo = reactive(userStore.userInfo)
</script>
<template>
  <div class="user-home">
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
    <!-- 用户页的用户订单及其余账户信息展示; -->
    <div class="user-two">
      <!-- 账户信息; -->
      <UserAccountInformation class="user-account-information"></UserAccountInformation>
      <!-- 我的订单; -->
      <UserOrderForm class="user-order-form"></UserOrderForm>
    </div>
  </div>
</template>
<style lang="less" scoped>
// 最外层容器;
.user-home {
  width: 100%;
  height: 100%;
  background-color: #f4f4f4f4;
  // background-color: aquamarine;

  // 用户页的用户订单及其余账户信息展示样式;
  .user-two {
    width: 100%;
    position: absolute;
    top: 26%;

    // 账户信息;
    .user-account-information {
      margin: auto;
      margin-bottom: .375rem;
    }
  }



}

// 我的订单;
.user-order-form {
  // position: absolute;
  // top: 26%;
  // left: 3%;
}

.user {
  width: 100%;
  height: 30%;
  background: linear-gradient(90deg, #ffaeab, #ff0303);

  // 顶部设置;
  .user-top {
    width: 100%;
    height: 50px;
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
