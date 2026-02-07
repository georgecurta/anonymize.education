const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://anonymize.education/contact.html');

  const form = await page.evaluate(() => {
    const form = document.querySelector('form');
    if (!form) return { exists: false };

    const inputs = Array.from(form.querySelectorAll('input, select, textarea')).map(el => ({
      type: el.type || el.tagName.toLowerCase(),
      name: el.name,
      id: el.id,
      required: el.required,
      hasLabel: el.id ? !!document.querySelector(`label[for="${el.id}"]`) : false
    }));

    return {
      exists: true,
      action: form.action,
      method: form.method,
      inputs: inputs
    };
  });

  console.log('=== CONTACT FORM CHECK ===\n');
  console.log('Form exists:', form.exists ? '✓' : '✗');
  if (form.exists) {
    console.log('Action:', form.action);
    console.log('Method:', form.method.toUpperCase());
    console.log('\nFields:');
    form.inputs.forEach(i => {
      console.log(`  ${i.name} (${i.type}): ${i.required ? 'required' : 'optional'}, ${i.hasLabel ? 'has label ✓' : 'NO LABEL ✗'}`);
    });
  }

  await browser.close();
})();
