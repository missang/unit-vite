
import { createPinia } from 'pinia'
import { createApp } from 'vue'

import dayjs from 'dayjs'
import App from './App.vue'
import './styles/styles.less'
import './styles/font/iconfont.css'
import api from './api/index'

import uviewPlus from 'uview-plus'
const app = createApp(App)
app.config.globalProperties.$api = api
app.config.globalProperties.$dayjs = dayjs

// 挂载过滤对象的空值
app.config.globalProperties.$isEmpty = (item:any) => {
  let obj:any = {}
  for (var v in item) {
    if (item[v] || item[v] === 0 || item[v] === false) {
      obj[v] = item[v]
    }
  }
  return obj
}

app.config.globalProperties.$navigateTo = (url:string) => {
  uni.navigateTo({
    url
  })
}

app.config.globalProperties.$isNavigateTo = (url:string) => {
  uni.navigateTo({
    url
  })
}

app.use(uviewPlus)
app.use(createPinia())
app.mount('#app')

uni.$u.config.unit = 'rpx'