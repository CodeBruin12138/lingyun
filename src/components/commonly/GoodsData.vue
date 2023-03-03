<template>
  <div>
    <ul>
      {{
        goods.goods_name
      }}
    </ul>
    <img :src="`http://lingyunstar.top:12138/${goods.goods_image}`" />
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({
  goods: {
    type: Object,
    required: true
  }
})
</script>
<style scoped>
div {
  width: 40%;
}
ul {
  font-size: 0.1875rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1; /*行数*/
  -webkit-box-orient: vertical;
  display: -moz-box;
  -moz-line-clamp: 2;
  -moz-box-orient: vertical;
  word-wrap: break-word;
  word-break: break-all;
  white-space: normal;
}
img {
  width: 3.75rem;
  height: 3.75rem;
}
</style>
