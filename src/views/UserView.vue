<!-- 用户页; -->
<script lang="ts" setup>
import { reactive } from 'vue'
import { useUserStore } from '@/stores/user'
import UserOrderForm from '@/components/user/UserOrderForm.vue'
import UserAccountInformation from '@/components/user/UserAccountInformation.vue'
import UserTopData from '@/components/user/UserTopData.vue'
import UserTop from '@/components/user/UserTop.vue'
import UserCommon from '@/components/user/UserCommon.vue'
const userStore = useUserStore()
const userInfo = reactive(userStore.userInfo)
</script>
<template>
  <div class="user">
    <!-- 用户头像及部分信息展示; -->
    <div class="user-one">
      <UserTop></UserTop>
      <UserTopData :user="userInfo" class="user-top-data"></UserTopData>
    </div>
    <!-- 用户页的用户订单及其余账户信息展示; -->
    <div class="user-two">
      <!-- 账户信息; -->
      <UserAccountInformation class="user-account-information"></UserAccountInformation>
      <!-- 我的订单; -->
      <UserOrderForm class="user-order-form"></UserOrderForm>
      <!-- 用户页底部常用; -->
      <UserCommon></UserCommon>
    </div>
  </div>
</template>
<style lang="less" scoped>
// 最外层容器;
.user {
  width: 100%;
  height: 100%;
  background-color: #f4f4f4f4;

  // 用户头像及部分信息展示;
  .user-one {
    width: 100%;
    height: 30%;
    background: linear-gradient(90deg, #ffaeab, #ff0303);

    .user-top-data {}
  }

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

    // 我的订单;
    .user-order-form {
      // position: absolute;
      // top: 26%;
      // left: 3%;
    }
  }
}
</style>
