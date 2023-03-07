import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'

// 用于存放一些全局控制的数据;
export const useUniversalStore = defineStore(
  'universal',
  () => {
    // 是否显示tabbar;
    const isShowTabBar = ref(true)

    // 控制tabbar的显示与隐藏;
    function setShowTabBar(data: boolean) {
      isShowTabBar.value = data
    }

    return { isShowTabBar, setShowTabBar }
  },
  {
    persist: {
      key: 'ly_df',
      storage: localStorage
    }
  }
)
