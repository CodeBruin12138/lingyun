<template>
  <div class="login-test">
    <!-- 顶部的返回按钮; -->
    <LoginNavBar></LoginNavBar>
    <!-- 登录页的顶部标题; -->
    <LoginTitle></LoginTitle>
    <!-- 用户名; -->
    <LoginInputOne></LoginInputOne>
    <!-- 密码; -->
    <LoginInputTwo></LoginInputTwo>
    <!-- 记住用户登录及忘记密码; -->
    <RememberAndForget></RememberAndForget>
    <!-- 登录按钮; -->
    <LoginButton></LoginButton>
    <!-- 注册按钮; -->
    <RegisterButton></RegisterButton>
  </div>
</template>
<script setup lang="ts">
import LoginTitle from '@/components/login/LoginTitle.vue';
import LoginNavBar from '@/components/login/LoginNavBar.vue';
import RegisterButton from '@/components/login/RegisterButton.vue';
import LoginButton from '@/components/login/LoginButton.vue';
import LoginInputOne from '@/components/login/LoginInputOne.vue';
import RememberAndForget from '@/components/login/RememberAndForget.vue';
import LoginInputTwo from '@/components/login/LoginInputTwo.vue';
import { useUniversalStore } from '@/stores/universal';
import { onBeforeMount, onBeforeUnmount } from 'vue';
const universalStore = useUniversalStore();
// 在进入登录页面时,隐藏底部导航栏;
onBeforeMount(() => {
  universalStore.setShowTabBar(false);
})
// 在离开登录页面时,显示底部导航栏;
onBeforeUnmount(() => {
  universalStore.setShowTabBar(true);
})
</script>
<style lang="less" scoped>
.login-test {
  width: 100%;
  height: 100%;
}
</style>
