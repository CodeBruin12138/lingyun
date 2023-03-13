<!-- 搜索框组件; -->
<template>
  <div class="search-box">
    <svg class="icon" aria-hidden="true">
      <use class="search-box-icon" xlink:href="#icon-search"></use>
    </svg>
    <input type="text" value="每天都要开开心心" class="search-box-input">
  </div>
</template>
<script lang="ts" setup></script>
<style lang="less" scoped>
.search-box {
  margin: auto;
  background-color: #ffff;
  border-radius: 0.625rem;
  padding: .0625rem;
  width: 100%;
  height: 0.625rem;
  display: flex;

  // 搜索框图标;
  .icon {
    font-size: .5rem;
    margin-top: 0.0938rem;
    margin-left: 0.2188rem;
    margin-right: 0.0938rem;
    color: darkgrey;
  }

  // 输入框;
  .search-box-input {
    border: none;
    background: none;
    // 取消选中搜索框时的外边框;
    outline: none;
  }
}
</style>
