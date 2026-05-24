import { createServer } from 'vite'
import { resolve } from 'path'

const root = resolve('.')
const server = await createServer({
  root,
  server: { port: 3030 },
  optimizeDeps: { include: [] }
})
await server.listen()
const addr = server.httpServer.address()
console.log(`Slidev running at http://localhost:${addr.port}`)
if (addr.family === 'IPv6') {
  console.log(`Also at http://[::1]:${addr.port}`)
}
