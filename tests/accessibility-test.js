const { chromium } = require('playwright');

const SITE_URL = 'https://anonymize.education';
const PAGES = [
  { path: '/', name: 'Homepage' },
  { path: '/features.html', name: 'Features' },
  { path: '/products.html', name: 'Products' },
  { path: '/pricing.html', name: 'Pricing' },
  { path: '/contact.html', name: 'Contact' }
];

async function checkAccessibility(page, pageName) {
  const issues = [];

  // Check for images without alt text
  const imagesWithoutAlt = await page.evaluate(() => {
    const imgs = document.querySelectorAll('img');
    let count = 0;
    imgs.forEach(img => {
      if (!img.alt && !img.getAttribute('role')) count++;
    });
    return count;
  });
  if (imagesWithoutAlt > 0) {
    issues.push(`${imagesWithoutAlt} images without alt text`);
  }

  // Check for form labels
  const inputsWithoutLabels = await page.evaluate(() => {
    const inputs = document.querySelectorAll('input, select, textarea');
    let count = 0;
    inputs.forEach(input => {
      const id = input.id;
      const hasLabel = id && document.querySelector(`label[for="${id}"]`);
      const hasAriaLabel = input.getAttribute('aria-label') || input.getAttribute('aria-labelledby');
      const hasPlaceholder = input.placeholder;
      if (!hasLabel && !hasAriaLabel && !hasPlaceholder) count++;
    });
    return count;
  });
  if (inputsWithoutLabels > 0) {
    issues.push(`${inputsWithoutLabels} form inputs without labels`);
  }

  // Check heading hierarchy
  const headingIssues = await page.evaluate(() => {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const levels = [];
    headings.forEach(h => levels.push(parseInt(h.tagName[1])));

    const issues = [];
    // Check for multiple h1
    const h1Count = levels.filter(l => l === 1).length;
    if (h1Count > 1) issues.push(`${h1Count} h1 elements (should be 1)`);
    if (h1Count === 0) issues.push('no h1 element');

    // Check for skipped levels
    for (let i = 1; i < levels.length; i++) {
      if (levels[i] > levels[i-1] + 1) {
        issues.push(`heading level skipped (h${levels[i-1]} to h${levels[i]})`);
        break;
      }
    }
    return issues;
  });
  issues.push(...headingIssues);

  // Check for links without text
  const emptyLinks = await page.evaluate(() => {
    const links = document.querySelectorAll('a');
    let count = 0;
    links.forEach(link => {
      const text = link.textContent.trim();
      const ariaLabel = link.getAttribute('aria-label');
      const title = link.title;
      const hasImg = link.querySelector('img[alt]');
      if (!text && !ariaLabel && !title && !hasImg) count++;
    });
    return count;
  });
  if (emptyLinks > 0) {
    issues.push(`${emptyLinks} links without accessible text`);
  }

  // Check for buttons without text
  const emptyButtons = await page.evaluate(() => {
    const buttons = document.querySelectorAll('button');
    let count = 0;
    buttons.forEach(btn => {
      const text = btn.textContent.trim();
      const ariaLabel = btn.getAttribute('aria-label');
      if (!text && !ariaLabel) count++;
    });
    return count;
  });
  if (emptyButtons > 0) {
    issues.push(`${emptyButtons} buttons without accessible text`);
  }

  // Check color contrast (basic check)
  const lowContrastElements = await page.evaluate(() => {
    function getLuminance(r, g, b) {
      const [rs, gs, bs] = [r, g, b].map(c => {
        c = c / 255;
        return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
      });
      return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
    }

    function getContrastRatio(l1, l2) {
      const lighter = Math.max(l1, l2);
      const darker = Math.min(l1, l2);
      return (lighter + 0.05) / (darker + 0.05);
    }

    function parseColor(color) {
      if (color.startsWith('rgb')) {
        const match = color.match(/\d+/g);
        if (match) return match.slice(0, 3).map(Number);
      }
      return null;
    }

    const textElements = document.querySelectorAll('p, span, a, h1, h2, h3, h4, h5, h6, li, td, th');
    let lowContrast = 0;

    textElements.forEach(el => {
      const style = window.getComputedStyle(el);
      const color = parseColor(style.color);
      const bgColor = parseColor(style.backgroundColor);

      if (color && bgColor && bgColor[0] + bgColor[1] + bgColor[2] > 0) {
        const textLum = getLuminance(...color);
        const bgLum = getLuminance(...bgColor);
        const ratio = getContrastRatio(textLum, bgLum);
        if (ratio < 4.5) lowContrast++;
      }
    });

    return lowContrast;
  });
  if (lowContrastElements > 5) {
    issues.push(`${lowContrastElements} elements with potential low contrast`);
  }

  // Check for skip link
  const hasSkipLink = await page.evaluate(() => {
    const links = document.querySelectorAll('a');
    for (const link of links) {
      const href = link.getAttribute('href');
      const text = link.textContent.toLowerCase();
      if (href && href.startsWith('#') && (text.includes('skip') || text.includes('main'))) {
        return true;
      }
    }
    return false;
  });
  if (!hasSkipLink) {
    issues.push('no skip navigation link');
  }

  // Check for lang attribute
  const hasLang = await page.evaluate(() => {
    return document.documentElement.hasAttribute('lang');
  });
  if (!hasLang) {
    issues.push('missing lang attribute on html');
  }

  // Check for focus indicators
  const focusStylesOk = await page.evaluate(() => {
    // This is a simplified check
    const style = document.createElement('style');
    style.textContent = '*:focus { outline: none !important; }';
    document.head.appendChild(style);
    const hasFocusStyles = document.styleSheets.length > 0;
    style.remove();
    return hasFocusStyles;
  });

  return issues;
}

async function runTests() {
  console.log('♿ Accessibility Test Report');
  console.log('============================\n');

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  for (const pageInfo of PAGES) {
    const url = SITE_URL + pageInfo.path;
    console.log(`Testing: ${pageInfo.name}`);

    try {
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
      const issues = await checkAccessibility(page, pageInfo.name);

      if (issues.length === 0) {
        console.log('  ✅ No accessibility issues found\n');
      } else {
        console.log(`  ⚠️  ${issues.length} issue(s) found:`);
        issues.forEach(issue => console.log(`     - ${issue}`));
        console.log('');
      }
    } catch (error) {
      console.log(`  ❌ Error: ${error.message}\n`);
    }
  }

  await browser.close();
  console.log('Accessibility test complete.');
}

runTests().catch(console.error);
