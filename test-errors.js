const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  page.on('pageerror', err => {
    console.log('Page Error:', err.toString());
  });
  
  page.on('console', msg => {
    if (msg.type() === 'error' || msg.type() === 'warning') {
      console.log(`Console ${msg.type().toUpperCase()}:`, msg.text());
    }
  });

  await page.goto('http://localhost:8083', { waitUntil: 'networkidle0' });
  await page.goto('http://localhost:8083/framework', { waitUntil: 'networkidle0' });
  
  await browser.close();
})();
