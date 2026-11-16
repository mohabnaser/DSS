// Usage: node scratch/snap.mjs <route> <outName> [width] [height]
import http from 'node:http'
import fs from 'node:fs'
import path from 'node:path'
import { execFile } from 'node:child_process'

const [, , route = 'foundations', outName = 'snap', width = '1440', height = '5000'] = process.argv
const distDir = path.resolve('dist')
const mime = { '.html': 'text/html', '.js': 'application/javascript', '.css': 'text/css', '.woff2': 'font/woff2', '.woff': 'font/woff', '.ttf': 'font/ttf', '.svg': 'image/svg+xml', '.png': 'image/png' }

const server = http.createServer((req, res) => {
  let p = req.url.split('?')[0]
  if (p === '/') p = '/index.html'
  const f = path.join(distDir, p)
  if (!fs.existsSync(f)) { res.writeHead(404); res.end(); return }
  res.writeHead(200, { 'Content-Type': mime[path.extname(f)] || 'application/octet-stream' })
  res.end(fs.readFileSync(f))
})

server.listen(4199, '127.0.0.1', () => {
  const out = path.resolve('scratch', `${outName}.png`)
  execFile('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
    '--headless=new', '--no-sandbox', '--disable-gpu', '--hide-scrollbars',
    `--user-data-dir=${path.resolve('scratch', 'chrome-prof')}`,
    `--window-size=${width},${height}`, '--virtual-time-budget=6000',
    `--screenshot=${out}`, `http://127.0.0.1:4199/#/${route}`,
  ], { timeout: 40000 }, (err, so, se) => {
    console.log(err ? 'ERR ' + err.message.slice(0, 200) : 'done', String(se).slice(-600))
    console.log(fs.existsSync(out) ? 'OK ' + out + ' ' + fs.statSync(out).size : 'MISSING')
    server.close(); process.exit(0)
  })
})
