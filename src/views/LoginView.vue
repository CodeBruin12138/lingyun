<template>
  <van-cell-group inset>
    <van-field v-model="user.user_name" label="用户名" placeholder="请输入用户名" />
    <van-field v-model="user.user_pwd" type="password" label="密码" placeholder="请输入密码" />
    <van-button block type="primary" native-type="submit">登录</van-button>
  </van-cell-group>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'

const user = reactive({
  user_name: '',
  user_pwd: ''
})
</script>
