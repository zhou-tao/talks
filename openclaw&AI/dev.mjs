import { fileURLToPath } from 'node:url'
import { createServer } from 'vite'
import { resolve, dirname } from 'node:path'
import { existsSync } from 'node:fs'

const __dirname = dirname(fileURLToPath(import.meta.url))
process.chdir(__dirname)

// Find slidev client path
const slidevClientPath = resolve(__dirname, 'node_modules', '@slidev', 'client')
if (!existsSync(slidevClientPath)) {
  console.error('Slidev client not found at:', slidevClientPath)
  process.exit(1)
}

const server = await createServer({
  root: __dirname,
  server: {
    port: 3030,
    host: '0.0.0.0'
  },
  configFile: false,
})

await server.listen()

console.log('\n  Slidev is running!')
console.log(`  Local:   http://localhost:3030/\n`)
