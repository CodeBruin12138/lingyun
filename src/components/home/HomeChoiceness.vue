<!-- 好物推荐; -->
<template>
  <div class="home-choiceness">
    <div class="home-choiceness-one">111</div>
    <div class="home-choiceness-two">
      <HomeChoicenessItem
        :item="item"
        v-for="(item, index) in goodsList"
        :key="index"
      ></HomeChoicenessItem>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue'
import axios from '@/util/request'
let goodsList: any = []

onMounted(() => {
  axios.get('/goods/getGoodsList').then((res) => {
    goodsList = res.data.result.list
  })
})
</script>
<style lang="less" scoped>
// 最外层的div;
.home-choiceness {
  width: 100%;
  background-color: aquamarine;
  .home-choiceness-one {
  }
  .home-choiceness-two {
    display: flex;
    overflow-x: auto;
  }
}
</style>
