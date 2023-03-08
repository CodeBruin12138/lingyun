<script setup lang="ts">
import axios from '@/util/request'
import HomeTopClassify from '@/components/home/HomeTopClassify.vue'
import HomeLikeItem from '@/components/home/HomeLikeItem.vue'
import HomeTopPledge from '@/components/home/HomeTopPledge.vue'
import HomeNewUser from '@/components/home/HomeNewUser.vue'
import HomeEverydayRecommend from '@/components/home/HomeEverydayRecommend.vue'
import HomeChoiceness from '@/components/home/HomeChoiceness.vue'
import { ref, onMounted } from 'vue'
import { useGoodsListStore } from '@/stores/goods'
import { useUniversalStore } from '@/stores/universal'
import { useRouter, useRoute } from 'vue-router'
const goodsListStore = useGoodsListStore()
const universalStore = useUniversalStore()
const count = ref(0)
const isLoading = ref(false)
const router = useRouter()
const route = useRoute()

const images = [
  'https://h2.appsimg.com/a.appsimg.com/upload/brand/upcb/2023/02/25/196/ias_1c93a487013a15a446b69c7d64b2038a_1135x545_85.jpg',
  'https://h2.appsimg.com/a.appsimg.com/upload/brand/upcb/2023/02/21/97/ias_60616acd6729d12be5eb7d5969770d8f_1135x545_85.jpg',
  'https://h2.appsimg.com/a.appsimg.com/upload/brand/upcb/2022/11/01/163/ias_1a2a3e46db4457ad977223f136567ea3_1135x545_85.jpg',
  'https://h2.appsimg.com/a.appsimg.com/upload/brand/upcb/2021/08/12/184/ias_67f14f070915b4a91b6ba98698c35d3c_1135x545_85.jpg'
]
// 在页面加载的时候, 请求数据;
onMounted(() => {
  universalStore.setShowTabBar(true)
  axios
    .get('/goods/getGoodsList', {
      params: {
        pageNum: 1,
        pageSize: 100
      }
    })
    .then((res) => {
      goodsListStore.goodsList = res.data.result.list
    })
})
// 下拉刷新;
function onRefresh() {
  setTimeout(() => {
    count.value++
    isLoading.value = false
  }, 1000)
}
// 跳转商品详情;
function goGoodsInfo(id: number) {
  router.push({
    path: '/goodsDetail/:id',
    query: {
      id
    }
  })
}
// 滚动条滚动的时候, 获取滚动条距离顶部的距离;
window.onscroll = function () {
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
  if (scrollTop > 900) {
    universalStore.setShowBackTop(true)
  } else {
    universalStore.setShowBackTop(false)
  }
}

function dingbu() {
  document.documentElement.scrollTop = 0
}
</script>
<template>
  <!-- 最外层的div; -->
  <div>
    <!-- 下拉刷新; -->
    <van-pull-refresh v-model="isLoading" success-text="刷新成功" @refresh="onRefresh">
      <!-- 顶部搜索的最外层的div; -->
      <div class="home-header">
        <!-- 顶部的搜索部分; -->
        <div class="home-header-one">
          <!-- 扫码; -->
          <div class="home-header-scan">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-scan"></use>
            </svg>
          </div>
          <!-- 搜索框; -->
          <div class="home-header-input">
            <van-search placeholder="万千商品,值得你的拥有" shape="round" />
          </div>
          <!-- 跳转消息页; -->
          <div class="home-header-information">
            <svg class="icon home-header-scan" aria-hidden="true">
              <use xlink:href="#icon-mark"></use>
            </svg>
          </div>
        </div>
      </div>
      <!-- 顶部轮播图; -->
      <div class="home-header-swipe">
        <van-swipe :autoplay="3000" lazy-render>
          <van-swipe-item v-for="image in images" :key="image">
            <img :src="image" class="home-header-swipe-img" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <!-- 轮播下的保证; -->
      <HomeTopPledge></HomeTopPledge>
      <!-- 轮播下的分类按钮; -->
      <HomeTopClassify></HomeTopClassify>
      <!-- 顶部最新人专场 -->
      <HomeNewUser></HomeNewUser>
      <!-- 每日推荐; -->
      <HomeEverydayRecommend></HomeEverydayRecommend>
      <!-- 好物推荐; -->
      <div>
        <p>好物精选</p>
        <HomeChoiceness></HomeChoiceness>
      </div>
      <!-- 猜你喜欢; -->
      <div class="home-like">
        <p>猜你喜欢</p>
        <div class="home-like-item">
          <HomeLikeItem
            @click="goGoodsInfo(item.id)"
            v-for="(item, index) in goodsListStore.goodsList"
            :key="index"
            class="home-like-item-one"
            :goodsData="item"
          ></HomeLikeItem>
        </div>
        <!-- 底部填充; -->
        <div class="home-bottom">
          <p>没有啦, 到底了</p>
        </div>
      </div>
    </van-pull-refresh>
    <div v-show="universalStore.isShowBackTop" class="huidaodingbu" @click="dingbu()">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-top"></use>
      </svg>
    </div>
  </div>
</template>
<style scoped lang="less">
/* 顶部红色底色; */
.home-header {
  height: 7.5rem;
  display: flex;
  justify-content: space-between;
  background-color: red;
  border-radius: 0% 0% 50% 50%;
  //  顶部搜索栏的外部div;
  .home-header-one {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 1.25rem;
    background-color: aqua;
    padding: 0.3125rem;
  }
  // 扫码图标;
  .home-header-scan {
    width: 0.625rem;
    height: 0.625rem;
    color: aliceblue;
  }

  // 顶部搜索栏样式;
  .home-header-input {
    height: 10px;
  }
  // 顶部跳转消息页图标;
  // .home-header-information {
  // }
}
// 顶部轮播图样式;
.home-header-swipe {
  width: 96%;
  height: 3.75rem;
  background-color: aquamarine;
  margin-left: 0.1875rem;
  margin-right: 0.1875rem;
  position: absolute;
  top: 3.125rem;
  .home-header-swipe-img {
    width: 100%;
    height: 100%;
  }
}
// 轮播图下的注释样式;
.header-swipe-down {
  display: flex;
  justify-content: center;
  margin-top: 0.75rem;
  color: red;
  div {
    width: 33.3333%;
    font-size: 0.3125rem;
    color: red;
    svg {
      width: 0.5rem;
      height: 0.5rem;
    }
  }
}
// 猜你喜欢样式;
.home-like {
  width: 100%;
  background-color: #f4f4f4f4;
  .home-like-item {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .home-like-item-one {
      width: 46%;
    }
  }
  // 底部填充div样式;
  .home-bottom {
    margin: auto;
    width: 100%;
    p {
      color: darkgray;
      line-height: 0.8125rem;
      text-align: center;
    }
  }
}
// 回到顶部;
.huidaodingbu {
  width: 0.9375rem;
  height: 0.9375rem;
  background-color: rgb(167, 182, 182);
  border-radius: 100%;
  position: fixed;
  bottom: 2rem;
  right: 1rem;
  color: rgb(2, 186, 237);
  svg {
    width: 0.625rem;
    height: 0.625rem;
    margin: 0.1875rem;
    padding-right: 0.3125rem;
  }
}
</style>
