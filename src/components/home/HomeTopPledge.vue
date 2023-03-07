<template>
  <div class="home-top-pledge">
    <div>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-tianmaozhengpinbaozhang"></use>
      </svg>
      <p>100%正品保证</p>
    </div>
    <div>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-servicejiayipeisan"></use>
      </svg>
      <p>假一赔十</p>
    </div>
    <div>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-yuanxingshou"></use>
      </svg>
      <p>24小时安心售后</p>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="less" scoped>
.home-top-pledge {
  display: flex;
  justify-content: space-around;
  margin-top: 0.5rem;
  div {
    display: flex;
    font-size: 0.3125rem;
    p {
      color: red;
      line-height: 0.25rem;
    }
  }
  svg {
    width: 0.75rem;
    height: 0.75rem;
  }
}
</style>
