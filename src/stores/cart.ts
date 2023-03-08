// 购物车相关状态;
import { reactive } from 'vue'
import { defineStore } from 'pinia'

// 默认购物车相关状态;
export const useCartStore = defineStore(
  'cart',
  () => {
    // 购物车状态;
    const cart = reactive({
      show: true,
      list: [
        {
          id: 7,
          number: 4,
          selected: true,
          goods_info: {
            deletedAt: null,
            goods_classify: 13,
            goods_data: '春季新款女装轻奢冷淡风高级感套装法式名媛气质长裙衬衫连衣裙子',
            goods_discounts: '0.00',
            goods_image: 'ly_3e1347e02e632ab942926d106.jpg',
            goods_name: '春季新款女装轻奢冷淡风高级感套装法式名媛气质长裙衬衫连衣裙子',
            goods_num: 49,
            goods_price: '91.00',
            goods_sell: 0,
            goods_shop: 9,
            id: 67
          }
        }
      ]
    })

    // 修改购物车显示状态;
    function toggleCartShow(data: boolean) {
      cart.show = data
    }
    return { cart, toggleCartShow }
  },
  {
    persist: {
      key: 'ly_crdt',
      storage: localStorage
    }
  }
)
