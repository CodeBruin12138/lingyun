<template>
  <div>{{ msg }}</div>
  <button @click="$emit('xiugaimingzhi')">修改名字</button>
</template>
<script lang="ts" setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>
