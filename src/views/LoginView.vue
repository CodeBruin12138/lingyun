<template>
  <van-cell-group inset class="qwer">
    <van-field v-model="user.user_name" label="用户名" placeholder="请输入用户名" />
    <van-field v-model="user.user_pwd" type="password" label="密码" placeholder="请输入密码" />
    <van-button block type="primary" native-type="submit" @click="login()">登录</van-button>
  </van-cell-group>
</template>
<script lang="ts" setup>
import { reactive, onBeforeMount, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { showNotify } from 'vant'
import { useUserStore } from '@/stores/user'
import { useUniversalStore } from '@/stores/universal'
import axios from '@/util/request'
const userStore = useUserStore()
const universalStore = useUniversalStore()
const router = useRouter()
const user = reactive({
  user_name: '1677898900754',
  user_pwd: 'Admin@12138..'
})
// 生命周期;
onBeforeMount(() => {
  // 隐藏状态栏;
  universalStore.setShowTabBar(false)
  //判断是否登录,如果登录,跳转到用户页;
  if (localStorage.getItem('ly_at')) {
    router.push('/user')
  }
})
onUnmounted(() => {
  // 显示状态栏;
  universalStore.setShowTabBar(true)
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
</script>
<style scoped lang="less">
.qwer {
  position: absolute;
  top: 20%;
}
</style>
