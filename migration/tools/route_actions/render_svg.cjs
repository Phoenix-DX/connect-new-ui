// Render one Mermaid file to SVG, headless (Playwright of the project root, as migration/tools/check_mermaid.cjs;
// Mermaid 10.9.1 from cdnjs: the same version as the flows dashboard). Fails when Mermaid reports a syntax error.
// Usage (from the project root): node migration/tools/route_actions/render_svg.cjs <in.mmd> <out.svg>
const path = require('path');
const fs = require('fs');
const { chromium } = require(require.resolve('playwright', { paths: [process.cwd()] }));

(async () => {
  const [input, output] = process.argv.slice(2);
  const text = fs.readFileSync(input, 'utf8');
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setContent('<!doctype html><html><body></body></html>');
  await page.addScriptTag({ url: 'https://cdnjs.cloudflare.com/ajax/libs/mermaid/10.9.1/mermaid.min.js' });
  const res = await page.evaluate(async (src) => {
    window.mermaid.initialize({ startOnLoad: false, securityLevel: 'strict', flowchart: { htmlLabels: false } });
    try {
      const { svg } = await window.mermaid.render('d', src);
      return { svg };
    } catch (e) {
      return { error: String(e && e.message ? e.message : e).slice(0, 400) };
    }
  }, text);
  await browser.close();
  if (res.error) {
    console.error('mermaid error:', res.error);
    process.exit(1);
  }
  fs.mkdirSync(path.dirname(output), { recursive: true });
  fs.writeFileSync(output, res.svg);
  console.log('svg', output, `${Math.round(res.svg.length / 1024)} kB`);
})();
