<!-- 好物推荐的展示项; -->
<template>
  <div class="home-choiceness-item">
    <div class="home-choiceness-item-one">
      <!-- <img :src="`http://lingyunstar.top:12138/${item.goods_image}`" /> -->
    </div>
    <div class="home-choiceness-item-two">
      <div></div>
      <div></div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue'

defineProps({
  // 传入的数据;
  item: {
    type: Object
  }
})
</script>
<style lang="less" scoped>
// 最外层的div;
.home-choiceness-item {
  width: 100%;
  background-color: aquamarine;
  .home-choiceness-item-one {
    width: 100%;
    background-color: aqua;
    img {
      width: 2.5rem;
    }
  }
  .home-choiceness-item-two {
  }
}
</style>
