import { reactive } from 'vue'
import { defineStore } from 'pinia'

// 默认商品列表;
export const useGoodsListStore = defineStore(
  'goodsList',
  () => {
    const goods = reactive({
      goodsList: [
        {
          id: 1
        }
      ]
    })
    function setGoodsList(data: any) {
      goods.goodsList = goods.goodsList.concat(data)
    }
    return { goods, setGoodsList }
  },
  {
    persist: {
      key: 'ly_gsls',
      storage: localStorage
    }
  }
)
