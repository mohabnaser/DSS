import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { execFile } from 'node:child_process';

const distDir = path.resolve('dist');

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
};

const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];
  if (reqPath === '/' || reqPath === '') reqPath = '/index.html';
  const filePath = path.join(distDir, reqPath);
  
  if (!fs.existsSync(filePath)) {
    const indexHtml = fs.readFileSync(path.join(distDir, 'index.html'));
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(indexHtml);
    return;
  }

  const ext = path.extname(filePath);
  const contentType = mimeTypes[ext] || 'application/octet-stream';
  const data = fs.readFileSync(filePath);
  res.writeHead(200, { 'Content-Type': contentType });
  res.end(data);
});

server.listen(4199, '127.0.0.1', async () => {
  console.log('Static server listening on http://127.0.0.1:4199');

  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const outDir = 'C:\\Users\\20100\\.gemini\\antigravity\\brain\\4d94d883-c5a9-4bdc-a743-4791812fda69\\scratch';

  async function capture(url, outFile, width = 1400, height = 1200) {
    return new Promise((resolve, reject) => {
      const fullOut = path.join(outDir, outFile);
      const args = [
        '--headless=new',
        '--disable-gpu',
        '--no-sandbox',
        '--hide-scrollbars',
        `--window-size=${width},${height}`,
        `--screenshot=${fullOut}`,
        url
      ];
      execFile(chromePath, args, { timeout: 15000 }, (error, stdout, stderr) => {
        if (error) {
          console.error(`Error capturing ${url}:`, error.message, stderr);
          resolve(false);
        } else {
          console.log(`Captured ${fullOut}`);
          resolve(true);
        }
      });
    });
  }

  try {
    await capture('http://127.0.0.1:4199/#/', 'shot_dashboard.png');
    await capture('http://127.0.0.1:4199/#/foundations', 'shot_section01.png');
    await capture('http://127.0.0.1:4199/#/process', 'shot_section02.png');
  } finally {
    server.close();
    process.exit(0);
  }
});
