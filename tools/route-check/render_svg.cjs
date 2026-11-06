// Render Mermaid files to SVG, headless (Playwright of the project root, as tools/docs/check_mermaid.cjs;
// Mermaid 10.9.1 from cdnjs: the same version as the flows dashboard). One browser for all the pairs. Fails when
// Mermaid reports a syntax error. The SVG gets a white background.
// Usage (from the project root): node tools/route-check/render_svg.cjs <in.mmd> <out.svg> [<in> <out> ...]
const path = require('path');
const fs = require('fs');
const { chromium } = require(require.resolve('playwright', { paths: [process.cwd()] }));

(async () => {
  const args = process.argv.slice(2);
  if (!args.length || args.length % 2) {
    console.error('usage: render_svg.cjs <in.mmd> <out.svg> [<in> <out> ...]');
    process.exit(2);
  }
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setContent('<!doctype html><html><body></body></html>');
  await page.addScriptTag({ url: 'https://cdnjs.cloudflare.com/ajax/libs/mermaid/10.9.1/mermaid.min.js' });
  await page.evaluate(() => window.mermaid.initialize({ startOnLoad: false, securityLevel: 'strict', flowchart: { htmlLabels: false } }));
  let failed = 0;
  for (let i = 0; i < args.length; i += 2) {
    const [input, output] = [args[i], args[i + 1]];
    const res = await page.evaluate(async ({ src, n }) => {
      try {
        const { svg } = await window.mermaid.render(`d${n}`, src);
        return { svg };
      } catch (e) {
        return { error: String(e && e.message ? e.message : e).slice(0, 400) };
      }
    }, { src: fs.readFileSync(input, 'utf8'), n: i });
    if (res.error) {
      console.error('mermaid error in', input, ':', res.error);
      failed++;
      continue;
    }
    // white background on the root <svg>: the files stay readable in a dark viewer
    const svg = res.svg.replace(/<svg\b[^>]*>/, (tag) =>
      /\sstyle="/.test(tag) ? tag.replace(/\sstyle="/, ' style="background-color: #ffffff; ') : tag.replace('<svg', '<svg style="background-color: #ffffff"'));
    fs.mkdirSync(path.dirname(output), { recursive: true });
    fs.writeFileSync(output, svg);
  }
  await browser.close();
  console.log(`svg: ${args.length / 2 - failed} written${failed ? `, ${failed} failed` : ''}`);
  process.exit(failed ? 1 : 0);
})();
