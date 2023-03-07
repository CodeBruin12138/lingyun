import { reactive } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore(
  'user',
  () => {
    // 用户基础信息;
    const userInfo = reactive({
      user_name: 123456789,
      user_portrait: 'ly_123456789.jpg',
      user_title: 'ly_123456789',
      user_age: 18,
      user_explained: '',
      user_sex: 0
    })
    // 修改用户信息;
    function setUserInfo(data: any) {
      userInfo.user_name = data.user_name
      userInfo.user_portrait = data.user_portrait
      userInfo.user_title = data.user_title
      userInfo.user_age = data.user_age
      userInfo.user_explained = data.user_explained
      userInfo.user_sex = data.user_sex
    }

    return { userInfo, setUserInfo }
  },
  {
    // 持久化;
    persist: {
      // 存储的key;
      key: 'ly_ud',
      storage: localStorage
    }
  }
)
