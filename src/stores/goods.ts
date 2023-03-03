import { reactive } from 'vue'
import { defineStore } from 'pinia'

// 默认商品列表;
export const useGoodsListStore = defineStore('goodsList', () => {
  let goodsList = reactive([])
  function setGoodsList(data: any) {
    goodsList = data
  }
  return { goodsList, setGoodsList }
})
