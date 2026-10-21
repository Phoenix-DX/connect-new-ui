import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import lighthouse from 'lighthouse';
import type { Browser } from 'playwright';
import { afterAll, beforeAll, expect, it } from 'vitest';
import { freePort, launchChromeForCdp, serveDemo, type StaticServer } from '../e2e/harness';
import { APP_DIR, DEMO_ARGS, DEMO_ENV, viteBuild } from '../viteBuild';
import { BUDGETS, CATEGORIES, METRICS, PAGES, type Category, type Metric, type PageName } from './budgets';

/* Lighthouse on the demo build (ADR-12, ADR-13; guide: docs/guides/pwa.md "Lighthouse"). The demo is built into a
   temp folder (never dist-demo/), served by its own serve.mjs, and each page is audited once with Lighthouse's default
   mobile emulation (simulated throttling, storage reset, so every run is a first visit). `?latency=0` turns off the
   demo's artificial mock delay, so the scores measure the app. Reports stay on this machine, in the gitignored
   lighthouse-reports/ (HTML and JSON per page, summary.json); nothing is uploaded. Budget misses are printed as
   warnings. */

const REPORT_DIR = join(APP_DIR, 'lighthouse-reports');
const work = mkdtempSync(join(tmpdir(), 'pwa-lighthouse-'));
let server: StaticServer;
let browser: Browser;
let debuggingPort = 0;

interface PageResult {
  page: PageName;
  scores: Record<Category, number>;
  metrics: Record<Metric, number>;
}

beforeAll(async () => {
  const dir = await viteBuild(join(work, 'demo'), DEMO_ENV, DEMO_ARGS);
  server = await serveDemo(dir, await freePort());
  debuggingPort = await freePort();
  browser = await launchChromeForCdp(debuggingPort);
}, 180_000);

afterAll(async () => {
  await browser.close();
  await server.stop();
  rmSync(work, { recursive: true, force: true });
});

function budgetWarnings(result: PageResult): string[] {
  const budget = BUDGETS[result.page];
  if (!budget) return [`${result.page}: no budget yet`];
  const warnings: string[] = [];
  for (const category of CATEGORIES) {
    if (result.scores[category] < budget.scores[category])
      warnings.push(`${result.page} ${category}: ${result.scores[category]} < budget ${budget.scores[category]}`);
  }
  for (const metric of METRICS) {
    if (result.metrics[metric] > budget.metrics[metric])
      warnings.push(`${result.page} ${metric}: ${result.metrics[metric]} > budget ${budget.metrics[metric]}`);
  }
  return warnings;
}

it('audits HomeFeed, Search and OrbitLanding of the demo build (mobile)', async () => {
  rmSync(REPORT_DIR, { recursive: true, force: true });
  mkdirSync(REPORT_DIR, { recursive: true });
  const results: PageResult[] = [];
  for (const page of PAGES) {
    const run = await lighthouse(`${server.origin}${page.path}?latency=0`, {
      port: debuggingPort,
      output: ['html', 'json'],
      logLevel: 'error',
      onlyCategories: [...CATEGORIES],
    });
    if (!run) throw new Error(`Lighthouse returned no result for ${page.name}`);
    expect(run.lhr.runtimeError, page.name).toBeUndefined();
    const [html, json] = run.report;
    writeFileSync(join(REPORT_DIR, `${page.name}.report.html`), html ?? '');
    writeFileSync(join(REPORT_DIR, `${page.name}.report.json`), json ?? '');
    const score = (category: Category) => Math.round((run.lhr.categories[category]?.score ?? 0) * 100);
    const metric = (id: Metric) => {
      const value = run.lhr.audits[id]?.numericValue ?? Number.NaN;
      return id === 'cumulative-layout-shift' ? Math.round(value * 1000) / 1000 : Math.round(value);
    };
    for (const category of CATEGORIES)
      expect(run.lhr.categories[category]?.score, `${page.name} ${category}`).not.toBeNull();
    results.push({
      page: page.name,
      scores: Object.fromEntries(CATEGORIES.map((c) => [c, score(c)])) as Record<Category, number>,
      metrics: Object.fromEntries(METRICS.map((m) => [m, metric(m)])) as Record<Metric, number>,
    });
  }
  const warnings = results.flatMap(budgetWarnings);
  writeFileSync(
    join(REPORT_DIR, 'summary.json'),
    JSON.stringify({ date: new Date().toISOString(), lighthouse: '13.4.1', results, warnings }, null, 2) + '\n',
  );
  // process.stdout, not console: vitest's agent reporter hides the console of passing tests
  const row = (cells: (string | number)[]) =>
    cells.map((cell, i) => (i === 0 ? String(cell).padEnd(13) : String(cell).padStart(7))).join('');
  process.stdout.write(
    [
      '',
      'Lighthouse 13.4.1, mobile emulation, demo build',
      row(['page', 'perf', 'a11y', 'bp', 'FCP ms', 'LCP ms', 'TBT ms', 'CLS']),
      ...results.map((r) => row([r.page, ...CATEGORIES.map((c) => r.scores[c]), ...METRICS.map((m) => r.metrics[m])])),
      warnings.length > 0
        ? ['Budget warnings:', ...warnings.map((w) => `  WARNING ${w}`)].join('\n')
        : 'Budgets: all met',
      `Reports (local only): ${REPORT_DIR}`,
      '',
    ].join('\n'),
  );
});
