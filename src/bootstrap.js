#!/usr/bin/env node
import { execSync, spawn } from 'child_process'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const backendDir = join(__dirname, 'backend')
const frontendDir = join(__dirname, 'frontend')

function run(cmd, cwd) {
  console.log(`\n→ ${cmd}`)
  execSync(cmd, { cwd, stdio: 'inherit' })
}

console.log('📦 Installing backend dependencies...')
run('npm install', backendDir)

console.log('\n📦 Installing frontend dependencies...')
run('npm install', frontendDir)

console.log('\n🌱 Seeding database...')
run('node seed.js', backendDir)

console.log('\n🚀 Starting servers...')
const backend = spawn('node', ['server.js'], { cwd: backendDir, stdio: 'inherit' })
const frontend = spawn('npm', ['run', 'dev'], { cwd: frontendDir, stdio: 'inherit', shell: true })

process.on('SIGINT', () => {
  backend.kill()
  frontend.kill()
  process.exit(0)
})

console.log('\n✅ LMS running at:')
console.log('   Frontend → http://localhost:3000')
console.log('   API      → http://localhost:3001/api\n')
