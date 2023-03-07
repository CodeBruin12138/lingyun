<!-- 首页的每日推荐组件; -->
<template>
  <div class="home-everyday-recommend">
    <div class="home-everyday-recommend-one">每日疯抢</div>
    <div class="home-everyday-recommend-two">
      <div class="home-everyday-recommend-two-item-one">拼团特惠</div>
      <div class="home-everyday-recommend-two-item-two">新品推荐</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
// 每日推荐的最外层div;
.home-everyday-recommend {
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  .home-everyday-recommend-one {
    width: 46%;
    height: 100%;
    background-color: aquamarine;
    margin-right: 1%;
    border-radius: 5%;
  }
  .home-everyday-recommend-two {
    width: 46%;
    height: 100%;
    margin-left: 1%;
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    border-radius: 5%;

    .home-everyday-recommend-two-item-one {
      width: 100%;
      height: 46%;
      background-color: red;
      border-radius: 5%;
    }
    .home-everyday-recommend-two-item-two {
      width: 100%;
      height: 46%;
      background-color: blueviolet;
      border-radius: 5%;
    }
  }
}
</style>
