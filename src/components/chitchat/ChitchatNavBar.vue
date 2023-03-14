<!-- 消息页顶部导航栏模块; -->
<template>
  <div class="chitchat-navigation-bar">
    <!-- 左侧; -->
    <div class="chitchat-navigation-bar-left">
      <!-- 标题; -->
      <div class="chitchat-navigation-bar-left-title">
        <p>消息</p>
      </div>
      <!-- 清除未读消息; -->
      <div class="chitchat-navigation-bar-left-del">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-qingchucachu"></use>
        </svg>
        <p>清除未读消息</p>
      </div>
    </div>
    <!-- 右侧; -->
    <div class="chitchat-navigation-bar-right">
      <!-- 好友列表; -->
      <div class="chitchat-navigation-bar-right-one"> <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-people_list_light"></use>
        </svg></div>
      <!-- 其余功能; -->
      <div> <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-add1"></use>
        </svg></div>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>
<style lang="less" scoped>
// 最外层容器样式;
.chitchat-navigation-bar {
  width: 100%;
  display: flex;
  justify-content: space-between;

  // 左侧样式;
  .chitchat-navigation-bar-left {
    display: flex;

    // 左侧标题样式;
    .chitchat-navigation-bar-left-title {
      font-size: 20px;
      font-weight: bold;
    }

    // 清除未读消息样式;
    .chitchat-navigation-bar-left-del {
      display: flex;
      align-items: center;
      margin-left: 10px;

      // 清除未读消息图标样式;
      .icon {
        width: .8125rem;
        height: .8125rem;
      }

      // 清除未读消息文字样式;
      p {
        margin-left: .0125rem;
        color: darkgray;
        font-size: .375rem;
      }
    }

  }

  // 右侧样式;
  .chitchat-navigation-bar-right {
    display: flex;
    margin-right: .25rem;



    // 右侧图标样式;
    .icon {
      width: .8125rem;
      height: .8125rem;
      padding-top: .5rem;
    }

    // 右侧第一个图标样式;
    .chitchat-navigation-bar-right-one {
      .icon {
        padding-left: .3125rem;
      }
    }
  }
}
</style>