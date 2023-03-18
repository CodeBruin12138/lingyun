<template>
  <div class="login-test">
    <!-- 顶部的返回按钮; -->
    <LoginNavBar></LoginNavBar>
    <!-- 登录页的顶部标题; -->
    <LoginTitle></LoginTitle>
    <!-- 用户名; -->
    <LoginInputOne :value="user.user_name"></LoginInputOne>
    <!-- 密码; -->
    <LoginInputTwo :value="user.user_pwd"></LoginInputTwo>
    <!-- 记住用户登录及忘记密码; -->
    <RememberAndForget></RememberAndForget>
    <!-- 登录按钮; -->
    <LoginButton @click="login()"></LoginButton>
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
import { onBeforeMount, onBeforeUnmount, reactive } from 'vue';
import { useUserStore } from '@/stores/user';
import axios from '@/util/request';
import { useRouter } from 'vue-router';
import { showNotify } from 'vant';
const userStore = useUserStore();
const router = useRouter();
const universalStore = useUniversalStore();
const user = reactive({
  user_name: '1677898900754',
  user_pwd: 'Admin@12138..'
})
//登录按钮;
const login = () => {
  axios.post('/user/login', user).then((res) => {
    //判断是否登录成功;
    if (res.data.code === 0) {
      //登陆成功,提醒;
      showNotify({
        message: res.data.message,
        type: 'success',
        duration: 1000
      })
      //保存用户信息;
      userStore.setUserInfo(res.data.result.user)
      //保存token
      localStorage.setItem('ly_at', res.data.result.token)
      //跳转到用户页;
      router.push('/user')
    } else {
      //登录失败,根据不同的状态码,提示不同的信息;
      switch (res.data.code) {
        case 10001:
          showNotify({
            message: res.data.message,
            type: 'danger',
            duration: 1000
          })
          console.log('用户名或密码为空')
          break
        case 10002:
          showNotify({
            message: res.data.message,
            color: '#ad0000',
            background: '#ffe1e1',
            duration: 1000
          })
          console.log('用户名不存在')
          break
        case 10007:
          showNotify({
            message: res.data.message,
            type: 'warning',
            duration: 1000
          })
          console.log('密码错误')
          break
        default:
          showNotify({
            message: res.data.message,
            type: 'warning',
            duration: 1000
          })
          break
      }
    }
  })
}
// 在进入登录页面时,隐藏底部导航栏;
onBeforeMount(() => {
  // 隐藏状态栏;
  universalStore.setShowTabBar(false);
  //判断是否登录,如果登录,跳转到用户页;
  if (localStorage.getItem('ly_at')) {
    router.push('/user')
  }
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
