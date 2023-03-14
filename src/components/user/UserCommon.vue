<!-- 用户页底部常用 -->
<template>
  <div class="user-common">
    <!-- 标题; -->
    <div class="user-common-one">
      <p>我的常用</p>
    </div>
    <!-- 底部选项; -->
    <div class="user-common-two">
      <div class="user-common-two-item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-global_light"></use>
        </svg>
        <p>分销中心</p>
      </div>
      <div class="user-common-two-item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-present"></use>
        </svg>
        <p>累积送礼</p>
      </div>
      <div class="user-common-two-item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-friend_add_light"></use>
        </svg>
        <p>邀请好友</p>
      </div>
      <div class="user-common-two-item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-location_light"></use>
        </svg>
        <p>地址管理</p>
      </div>
      <div class="user-common-two-item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-service_light"></use>
        </svg>
        <p>客服中心</p>
      </div>
      <div class="user-common-two-item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-edit_light"></use>
        </svg>
        <p>意见反馈</p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>
<style lang="less" scoped>
// 最外层的div;
.user-common {
  width: 94%;
  margin: auto;
  display: flex;
  flex-direction: column;
  border-radius: 0.1875rem;
  line-height: .25rem;
  margin-top: .1875rem;
  background-color: #ffffff;

  // 标题;
  .user-common-one {
    width: 100%;
    border-bottom: 0.0313rem solid #a49d9d;
    font-size: .5rem;
    padding-left: .25rem;
  }

  // 底部选项;
  .user-common-two {
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    // 选项每一项;
    .user-common-two-item {
      width: 20%;
      margin: .1875rem;

      // 选项每一项图标;
      .icon {
        width: 1.125rem;
        height: 1.125rem;
        padding-left: .25rem;
      }
    }
  }

}
</style>
