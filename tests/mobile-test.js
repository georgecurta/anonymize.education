const { chromium, devices } = require('playwright');

const SITE_URL = 'https://anonymize.education';
const PAGES = [
  { path: '/', name: 'Homepage' },
  { path: '/features.html', name: 'Features' },
  { path: '/products.html', name: 'Products' },
  { path: '/pricing.html', name: 'Pricing' },
  { path: '/contact.html', name: 'Contact' }
];

const MOBILE_DEVICES = [
  'iPhone 12',
  'iPhone SE',
  'Pixel 5',
  'Galaxy S9+'
];

const TABLET_DEVICES = [
  'iPad Mini',
  'iPad Pro 11'
];

async function testDevice(browser, deviceName, page) {
  const device = devices[deviceName];
  if (!device) {
    console.log(`  ⚠️  Device ${deviceName} not found`);
    return { device: deviceName, status: 'not found' };
  }

  const context = await browser.newContext({
    ...device,
    ignoreHTTPSErrors: true
  });

  const browserPage = await context.newPage();
  const results = {
    device: deviceName,
    viewport: `${device.viewport.width}x${device.viewport.height}`,
    pages: []
  };

  for (const pageInfo of PAGES) {
    const url = SITE_URL + pageInfo.path;
    try {
      const response = await browserPage.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
      const status = response.status();

      // Check for layout issues
      const hasHorizontalScroll = await browserPage.evaluate(() => {
        return document.documentElement.scrollWidth > document.documentElement.clientWidth;
      });

      // Check if nav toggle is visible on mobile
      const navToggleVisible = await browserPage.evaluate(() => {
        const toggle = document.querySelector('.nav__toggle');
        if (!toggle) return 'no toggle';
        const style = window.getComputedStyle(toggle);
        return style.display !== 'none';
      });

      // Check text readability (font size)
      const minFontSize = await browserPage.evaluate(() => {
        const elements = document.querySelectorAll('p, span, a, li');
        let min = 100;
        elements.forEach(el => {
          const size = parseFloat(window.getComputedStyle(el).fontSize);
          if (size < min) min = size;
        });
        return min;
      });

      // Check touch target sizes
      const smallTouchTargets = await browserPage.evaluate(() => {
        const clickables = document.querySelectorAll('a, button, input, select');
        let small = 0;
        clickables.forEach(el => {
          const rect = el.getBoundingClientRect();
          if (rect.width > 0 && rect.height > 0) {
            if (rect.width < 44 || rect.height < 44) small++;
          }
        });
        return small;
      });

      results.pages.push({
        page: pageInfo.name,
        status: status,
        horizontalScroll: hasHorizontalScroll,
        navToggle: navToggleVisible,
        minFontSize: minFontSize.toFixed(1) + 'px',
        smallTouchTargets: smallTouchTargets
      });
    } catch (error) {
      results.pages.push({
        page: pageInfo.name,
        status: 'error',
        error: error.message
      });
    }
  }

  await context.close();
  return results;
}

async function runTests() {
  console.log('🔍 Mobile Browser Compatibility Test');
  console.log('=====================================\n');

  const browser = await chromium.launch({ headless: true });

  console.log('📱 MOBILE DEVICES\n');
  for (const deviceName of MOBILE_DEVICES) {
    console.log(`Testing: ${deviceName}`);
    const results = await testDevice(browser, deviceName, PAGES);
    console.log(`  Viewport: ${results.viewport}`);
    for (const page of results.pages) {
      const issues = [];
      if (page.horizontalScroll) issues.push('horizontal scroll');
      if (page.smallTouchTargets > 5) issues.push(`${page.smallTouchTargets} small touch targets`);
      if (parseFloat(page.minFontSize) < 12) issues.push(`small font: ${page.minFontSize}`);

      const status = page.status === 200 ? '✅' : '❌';
      const issueStr = issues.length > 0 ? ` ⚠️ ${issues.join(', ')}` : '';
      console.log(`  ${status} ${page.page}: ${page.status}${issueStr}`);
    }
    console.log('');
  }

  console.log('📟 TABLET DEVICES\n');
  for (const deviceName of TABLET_DEVICES) {
    console.log(`Testing: ${deviceName}`);
    const results = await testDevice(browser, deviceName, PAGES);
    console.log(`  Viewport: ${results.viewport}`);
    for (const page of results.pages) {
      const issues = [];
      if (page.horizontalScroll) issues.push('horizontal scroll');

      const status = page.status === 200 ? '✅' : '❌';
      const issueStr = issues.length > 0 ? ` ⚠️ ${issues.join(', ')}` : '';
      console.log(`  ${status} ${page.page}: ${page.status}${issueStr}`);
    }
    console.log('');
  }

  await browser.close();
  console.log('Mobile compatibility test complete.');
}

runTests().catch(console.error);
