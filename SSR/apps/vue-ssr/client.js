import { createApp } from './app.js'

// 模拟后端进行数据查询、逻辑处理(注水前请求)
fetch('http://localhost:8080/fruits').then(res => res.json()).then(data => {
  const ssrContext = {
    fruits: data
  }
  createApp(ssrContext).mount('#app')
})
