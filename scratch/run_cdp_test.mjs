import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { pathToFileURL } from 'node:url';

const cdpPath = pathToFileURL('C:/Users/20100/AppData/Local/Temp/opencode/cdp.mjs').href;
const { open } = await import(cdpPath);

const distDir = path.resolve('dist');

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
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
  res.writeHead(200, { 'Content-Type': contentType });
  res.end(fs.readFileSync(filePath));
});

server.listen(4199, '127.0.0.1', async () => {
  console.log('Server started on :4199');

  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const userDir = 'C:\\Users\\20100\\AppData\\Local\\Temp\\opencode\\chrome-cdp-test';
  const chrome = spawn(chromePath, [
    '--headless=new',
    '--disable-gpu',
    '--no-sandbox',
    '--remote-debugging-port=9225',
    `--user-data-dir=${userDir}`,
  ]);

  await new Promise((r) => setTimeout(r, 1500));

  try {
    const page = await open(9225, 1440, 1100);
    const outDir = 'C:/Users/20100/AppData/Local/Temp/opencode';

    await page.go('http://127.0.0.1:4199/#/foundations');
    await page.shot(`${outDir}/test_s01.png`);
    console.log('Saved test_s01.png');

    await page.evaluate(() => {
      const el = document.querySelector('.concept-grid');
      if (el) el.scrollIntoView({ block: 'center' });
    });
    await new Promise((r) => setTimeout(r, 600));
    await page.shot(`${outDir}/test_s01_cards.png`);
    console.log('Saved test_s01_cards.png');

    await page.evaluate(() => {
      const el = document.getElementById('exam-practice');
      if (el) el.scrollIntoView({ block: 'start' });
    });
    await new Promise((r) => setTimeout(r, 600));
    await page.shot(`${outDir}/test_s01_exam.png`);
    console.log('Saved test_s01_exam.png');

    await page.close();
  } catch (err) {
    console.error('CDP error:', err);
  } finally {
    chrome.kill();
    server.close();
    process.exit(0);
  }
});
