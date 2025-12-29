const { chromium, devices } = require('playwright');
const fs = require('fs');

(async () => {
  if (!fs.existsSync('screenshots')) fs.mkdirSync('screenshots');

  const browser = await chromium.launch({ args: ['--no-sandbox'] });
  try {
    // Mobile viewport (iPhone 12)
    const iPhone = devices['iPhone 12'];
    const contextMobile = await browser.newContext({ ...iPhone });
    const pageMobile = await contextMobile.newPage();
    await pageMobile.goto('http://127.0.0.1:3000', { waitUntil: 'networkidle' });
    await pageMobile.screenshot({ path: 'screenshots/home-mobile.png', fullPage: true });

    // Mobile menu open state (click menu)
    const menuButton = await pageMobile.$('button[aria-label="Toggle menu"]');
    if (menuButton) {
      await menuButton.click();
      await pageMobile.waitForTimeout(400);
      await pageMobile.screenshot({ path: 'screenshots/home-mobile-menu-open.png', fullPage: true });
    }

    await contextMobile.close();

    // Tablet viewport
    const contextTablet = await browser.newContext({ viewport: { width: 768, height: 1024 }, userAgent: 'Mozilla/5.0 (iPad; CPU OS 13_2_3 like Mac OS X)' });
    const pageTablet = await contextTablet.newPage();
    await pageTablet.goto('http://127.0.0.1:3000', { waitUntil: 'networkidle' });
    await pageTablet.screenshot({ path: 'screenshots/home-tablet.png', fullPage: true });
    await contextTablet.close();

    // Desktop viewport
    const contextDesktop = await browser.newContext({ viewport: { width: 1366, height: 768 } });
    const pageDesktop = await contextDesktop.newPage();
    await pageDesktop.goto('http://127.0.0.1:3000', { waitUntil: 'networkidle' });
    await pageDesktop.screenshot({ path: 'screenshots/home-desktop.png', fullPage: true });
    await contextDesktop.close();

    console.log('Screenshots saved to screenshots/');
  } catch (err) {
    console.error('Error capturing screenshots:', err);
  } finally {
    await browser.close();
  }
})();
