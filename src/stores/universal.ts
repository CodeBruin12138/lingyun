import { ref } from 'vue'
import { defineStore } from 'pinia'

// 用于存放一些全局控制的数据;
export const useUniversalStore = defineStore(
  'universal',
  () => {
    // 是否显示tabbar;
    const isShowTabBar = ref(true)
    const page_num = ref(1)

    // 控制tabbar的显示与隐藏;
    function setShowTabBar(data: boolean) {
      isShowTabBar.value = data
    }
    // 增加分页;
    function addPageNum() {
      page_num.value++
    }
    // 重置分页;
    function resetPageNum() {
      page_num.value = 1
    }
    return { isShowTabBar, setShowTabBar, addPageNum, page_num, resetPageNum }
  },
  {
    persist: {
      key: 'ly_df',
      storage: localStorage
    }
  }
)
