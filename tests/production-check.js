const { chromium } = require('playwright');

const SITE = 'https://anonymize.education';
const PAGES = ['/', '/features.html', '/products.html', '/use-cases.html', '/pricing.html', '/contact.html', '/datenschutz.html', '/impressum.html'];

async function checkMeta(page) {
  return await page.evaluate(() => {
    const title = document.title;
    const desc = document.querySelector('meta[name="description"]')?.content;
    const canonical = document.querySelector('link[rel="canonical"]')?.href;
    const viewport = document.querySelector('meta[name="viewport"]')?.content;
    const lang = document.documentElement.lang;
    return { title, desc, canonical, viewport, lang };
  });
}

async function checkLinks(page) {
  return await page.evaluate(() => {
    return Array.from(document.querySelectorAll('a[href]')).map(a => a.href);
  });
}

async function checkAssets(page) {
  return await page.evaluate(() => {
    const imgs = Array.from(document.querySelectorAll('img')).map(i => i.src);
    const css = Array.from(document.querySelectorAll('link[rel="stylesheet"]')).map(l => l.href);
    const js = Array.from(document.querySelectorAll('script[src]')).map(s => s.src);
    return { imgs, css, js };
  });
}

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  const allLinks = new Set();
  const allAssets = { imgs: new Set(), css: new Set(), js: new Set() };
  const results = { pages: [], issues: [] };

  console.log('╔════════════════════════════════════════════════════════════════╗');
  console.log('║         PRODUCTION CHECK - anonymize.education                 ║');
  console.log('╚════════════════════════════════════════════════════════════════╝\n');

  console.log('━━━ PAGE META TAGS ━━━\n');

  for (const path of PAGES) {
    const url = SITE + path;
    await page.goto(url, { waitUntil: 'domcontentloaded' });

    const meta = await checkMeta(page);
    const pageName = path === '/' ? 'Homepage' : path.replace('.html', '');

    const hasTitle = meta.title && meta.title.length > 0;
    const hasDesc = meta.desc && meta.desc.length > 0;
    const hasCanonical = meta.canonical && meta.canonical.length > 0;
    const hasViewport = meta.viewport && meta.viewport.length > 0;
    const hasLang = meta.lang && meta.lang.length > 0;

    console.log(`${pageName}:`);
    console.log(`  Title: ${hasTitle ? '✓' : '✗ MISSING'} ${hasTitle ? '"' + meta.title.slice(0, 40) + '"' : ''}`);
    console.log(`  Description: ${hasDesc ? '✓' : '✗ MISSING'}`);
    console.log(`  Canonical: ${hasCanonical ? '✓' : '✗ MISSING'}`);
    console.log(`  Viewport: ${hasViewport ? '✓' : '✗ MISSING'}`);
    console.log(`  Lang: ${hasLang ? '✓ (' + meta.lang + ')' : '✗ MISSING'}`);

    if (!hasTitle) results.issues.push(`${pageName}: Missing title`);
    if (!hasDesc) results.issues.push(`${pageName}: Missing description`);

    const links = await checkLinks(page);
    links.forEach(l => allLinks.add(l));

    const assets = await checkAssets(page);
    assets.imgs.forEach(i => allAssets.imgs.add(i));
    assets.css.forEach(c => allAssets.css.add(c));
    assets.js.forEach(j => allAssets.js.add(j));
    console.log('');
  }

  console.log('━━━ INTERNAL LINKS ━━━\n');
  const internalLinks = [...allLinks].filter(l => l.startsWith(SITE));
  const uniqueInternal = [...new Set(internalLinks.map(l => l.split('#')[0]))];
  console.log(`Found ${uniqueInternal.length} unique internal links\n`);

  let brokenInternal = 0;
  for (const link of uniqueInternal) {
    try {
      const resp = await page.goto(link, { waitUntil: 'domcontentloaded', timeout: 10000 });
      if (resp.status() >= 400) {
        console.log(`  ✗ ${resp.status()} ${link}`);
        brokenInternal++;
        results.issues.push(`Broken link: ${link}`);
      }
    } catch (e) {
      console.log(`  ✗ ERROR ${link}`);
      brokenInternal++;
    }
  }
  if (brokenInternal === 0) {
    console.log('  ✓ All internal links working');
  }

  console.log('\n━━━ EXTERNAL LINKS ━━━\n');
  const externalLinks = [...allLinks].filter(l => !l.startsWith(SITE) && l.startsWith('http'));
  const uniqueExternal = [...new Set(externalLinks)];
  console.log(`Found ${uniqueExternal.length} external links:\n`);

  for (const link of uniqueExternal) {
    try {
      const resp = await page.goto(link, { waitUntil: 'domcontentloaded', timeout: 15000 });
      const status = resp.status();
      if (status >= 400) {
        console.log(`  ✗ ${status} ${link}`);
        results.issues.push(`External link error: ${link}`);
      } else {
        console.log(`  ✓ ${status} ${link.slice(0, 50)}`);
      }
    } catch (e) {
      console.log(`  ⚠ TIMEOUT ${link.slice(0, 50)}`);
    }
  }

  console.log('\n━━━ ASSETS ━━━\n');
  console.log(`CSS files: ${allAssets.css.size}`);
  console.log(`JS files: ${allAssets.js.size}`);
  console.log(`Images: ${allAssets.imgs.size}\n`);

  // Check CSS
  for (const css of allAssets.css) {
    try {
      const resp = await page.goto(css, { timeout: 5000 });
      console.log(`  CSS: ${resp.status() === 200 ? '✓' : '✗'} ${css.split('/').pop()}`);
    } catch (e) {
      console.log(`  CSS: ✗ ${css.split('/').pop()} (error)`);
    }
  }

  // Check JS
  for (const js of allAssets.js) {
    try {
      const resp = await page.goto(js, { timeout: 5000 });
      console.log(`  JS: ${resp.status() === 200 ? '✓' : '✗'} ${js.split('/').pop()}`);
    } catch (e) {
      console.log(`  JS: ✗ ${js.split('/').pop()} (error)`);
    }
  }

  await browser.close();

  console.log('\n━━━ SUMMARY ━━━\n');
  if (results.issues.length === 0) {
    console.log('✓ All checks passed!');
  } else {
    console.log(`⚠ ${results.issues.length} issue(s) found:`);
    results.issues.forEach(i => console.log(`  - ${i}`));
  }
})();
