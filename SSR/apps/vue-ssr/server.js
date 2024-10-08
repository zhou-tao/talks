import express from 'express'
import { renderToString } from 'vue/server-renderer'
import { createApp } from './app.js'

const server = express()

server.get('/', (req, res) => {
  
  // 模拟后端进行数据查询、逻辑处理
  fetch('http://localhost:8080/fruits').then(res => res.json()).then(data => {
    const ssrContext = {
      fruits: data
    }

    const app = createApp(ssrContext)

    renderToString(app).then((html) => {
      res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Vue SSR Example</title>
          <link rel="stylesheet" href="/style/main.css"></link>
          <script type="importmap">
            {
              "imports": {
                "vue": "https://unpkg.com/vue@3/dist/vue.esm-browser.js"
              }
            }
          </script>
          <script type="module" src="/client.js"></script>
        </head>
        <body>
          <div id="app">${html}</div>
        </body>
      </html>
      `)
    })
  })
})

server.use(express.static('.'))

server.listen(3001, () => {
  console.log('App running at:')
  console.log()
  console.log(' http://localhost:3001')
})
