<!-- 登录页记住用户登录及忘记密码模块; -->
<template>
  <div class="remember-and-forget">
    <div class="remember"><input type="checkbox">记住我</div>
    <div class="forget">忘记密码了?</div>
  </div>
</template>
<script setup lang="ts">


</script>
<style lang="less" scoped>
// 最外层容器;
.remember-and-forget {
  width: 94%;
  height: 1.25rem;
  display: flex;
  justify-content: space-between;
  margin: auto;
  padding-top: .125rem;
  color: #0A2063;

  // 记住用户登录;
  .remember {}

  // 忘记密码;
  .forget {}
}
</style>
