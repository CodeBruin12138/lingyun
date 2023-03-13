<!-- 用户账户信息; -->
<template>
  <div class="user-account-information">
    <div>
      <p class="user-money">9999.99元</p>
      <p>钱包</p>
    </div>
    <div>
      <p>9999分</p>
      <p>积分</p>
    </div>
    <div>
      <p>99张</p>
      <p>优惠券</p>
    </div>
    <div>
      <p>99张</p>
      <p>卡包</p>
    </div>
  </div>
</template>
<script setup lang="ts">


</script>
<style lang="less" scoped>
.user-account-information {
  width: 92%;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  margin: auto;
  padding-left: .125rem;
  padding-right: .125rem;
  border-radius: .1875rem;

  div {
    width: 25%;

    p {
      text-align: center;
      white-space: nowrap;
      overflow: hidden;
    }
  }
}

.user-money {
  color: red
}
</style>
