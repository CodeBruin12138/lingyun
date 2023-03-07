<template>
  <div class="home-top-classify">
    <div class="home-top-classify-div">
      <div class="home-top-classify-one">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-a-mubiaodaohang"></use>
        </svg>
      </div>
      海外购
    </div>
    <div class="home-top-classify-div">
      <div class="home-top-classify-two">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-a-youhuiyouhuiquan"></use>
        </svg>
      </div>
      新人专享
    </div>
    <div class="home-top-classify-div">
      <div class="home-top-classify-three">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-a-xiangjipaizhao"></use>
        </svg>
      </div>
      直播
    </div>
    <div class="home-top-classify-div">
      <div class="home-top-classify-four">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-a-paihanghuodong"></use>
        </svg>
      </div>
      积分商城
    </div>
    <div class="home-top-classify-div">
      <div class="home-top-classify-five">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-a-shangdiandianpu"></use>
        </svg>
      </div>
      附近门店
    </div>
  </div>
</template>
<style scoped lang="less">
// 最外层的div;
.home-top-classify {
  display: flex;
  justify-content: space-around;
  margin-bottom: 10%;
  // 每个分类最外层;
  div {
    width: 20%;
    height: 10%;
  }

  .home-top-classify-div {
    border-radius: 100%;
    width: 1.25rem;
    height: 1.25rem;
    margin: auto;
    margin-top: 1%;
    font-size: 0.3125rem;
    text-align: center;
    line-height: 0.9375rem;
    // 图标外的圆型div通用样式;
    div {
      width: 1.25rem;
      height: 1.25rem;
      border-radius: 100%;
      box-shadow: 5px 5px 19px #f0f0f0, -5px -5px 19px #ffffff;
    }
    // 图标;
    .icon {
      padding: 15% 15% 0 0;
      width: 70%;
      height: 70%;
      fill: #fff;
    }
    // 图标外圆单独样式;
    .home-top-classify-one {
      background-color: pink;
    }
    .home-top-classify-two {
      background-color: rgb(245, 236, 140);
      .icon {
        padding-left: 15%;
      }
    }
    .home-top-classify-three {
      background-color: rgb(67, 153, 224);
      .icon {
        padding-left: 15%;
      }
    }
    .home-top-classify-four {
      background-color: rgb(192, 24, 52);
      .icon {
        padding-left: 15%;
      }
    }
    .home-top-classify-five {
      background-color: rgb(148, 104, 224);
      .icon {
        padding-left: 15%;
      }
    }
  }
}
</style>
