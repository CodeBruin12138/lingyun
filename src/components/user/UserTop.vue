<!-- 用户页顶部组件,包括设置按钮及部分跳转按钮; -->
<template>
  <div class="user-top">
    <svg @click="userTopInformation()" class="icon" aria-hidden="true">
      <use xlink:href="#icon-comment"></use>
    </svg>
    <svg @click="userTopConfiguration()" class="icon" aria-hidden="true">
      <use xlink:href="#icon-shezhi3"></use>
    </svg>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
// 跳转到用户消息页;
const userTopInformation = () => {
  router.push('/chitchat')
}
// 跳转到用户设置页;
const userTopConfiguration = () => {
  router.push('/')
}
</script>
<style lang="less" scoped>
// 最外层容器;
.user-top {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  color: aliceblue;
  padding-top: .1875rem;

  .icon {
    width: 15%;
    font-size: .8125rem;
    margin-top: .3125rem;
  }

}
</style>
