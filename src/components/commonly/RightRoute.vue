<!-- 首页顶部右侧的按钮,可通用; -->
<template>
  <svg @click="rightRoute()" class="icon" aria-hidden="true">
    <use class="right-route" xlink:href="#icon-comment"></use>
  </svg>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'
const router = useRouter()
// 跳转到用户消息页;
const rightRoute = () => {
  router.push('/chitchat')
}
</script>
<style lang="less" scoped>
.icon {
  font-size: .8125rem;
  color: aliceblue;
  margin-top: .25rem;
  margin-left: .25rem;
  margin-right: .25rem;
}
</style>
