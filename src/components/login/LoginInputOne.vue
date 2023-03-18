<!-- 登录页的用户名输入框组件; -->
<template>
  <div class="login-input-one">
    <input type="text" maxlength="20" placeholder="请输入用户名" :value="value">
  </div>
</template>
<script setup lang="ts">

defineProps({
  // 输入框的默认值;
  value: {
    type: String,
    default: ''
  }
})
</script>
<style lang="less" scoped>
.login-input-one {
  width: 90%;
  height: 1.25rem;
  border-radius: .1875rem;
  margin: auto;
  background-color: #f3f0f3;
  padding-left: .25rem;
  padding-right: .25rem;
  padding-bottom: .0625rem;
  margin-bottom: .3125rem;

  input {
    background-color: #f3f0f3;
    border: none;
    width: 100%;
    height: 100%;
    font-size: .5rem;
    line-height: .625rem;
    color: #4B4453;
    text-align: left;
  }
}
</style>
