// F25 browser check: the HostSurvey "Unable to Host" device back on a `vite preview` build with the mocks.
// Usage (from the project root, Node 24): node migration/refactor/handoffs/F25/browser-check.mjs http://localhost:<port>
// Stack: HomeFeed → OrbitLanding (Orbit service) → EventDetail (event card) → HostSurvey ("View Host Survey"). HomeFeed
// is the first entry, so the second back does not go to the first entry (there CommonUI redirects to HomeFeed:
// isInitialLocation). The survey of the event is set to Unable to Host through the page's own mock
// (DataActionGetHostSurvey, then ActionPostHostSurvey: the MSW store of src/pages/HostSurvey/mocks.ts; no server).
// Browser back once → EventDetail (one screen, its URL); wait; back again → OrbitLanding. Then the same with the
// confirmed survey. Each run with and without prefers-reduced-motion.
import { createRequire } from 'node:module';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../../../..');
const require = createRequire(join(root, 'app/package.json'));
const { chromium } = require('playwright');

const origin = process.argv[2];
if (!origin) throw new Error('usage: browser-check.mjs <origin>');
const MODULE = '/api/Connect2_OrbitMobile_MUI';
const pause = (ms) => new Promise((r) => setTimeout(r, ms));

async function launch() {
  try {
    return await chromium.launch({ channel: 'chrome' });
  } catch {
    return chromium.launch();
  }
}

/** The screens in #transitionContainer, and which one is active. */
const screens = (page) =>
  page.evaluate(() =>
    [...document.querySelectorAll('#transitionContainer > .screen-container')].map((c) => {
      const block = c.querySelector('[data-block]')?.getAttribute('data-block') ?? '';
      return `${c.classList.contains('active-screen') ? '*' : ''}${block}`;
    }),
  );
const where = async (page) => {
  const url = new URL(page.url());
  const idx = await page.evaluate(() => window.history.state?.idx ?? null);
  return { path: url.pathname, idx, screens: await screens(page) };
};

async function run(browser, reducedMotion, unableToHost) {
  const context = await browser.newContext({ viewport: { width: 390, height: 844 }, reducedMotion });
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', (e) => errors.push(String(e)));
  page.on('console', (m) => {
    if (m.type() === 'error' && /RangeError|Maximum call stack/.test(m.text())) errors.push(m.text());
  });
  const steps = [];
  try {
    await page.goto(`${origin}/UBTConnect/HomeFeed?mocksession=unlocked`);
    const orbit = page.locator('[id="b5-l2-53_1-l2-100_0-$b10"]');
    await orbit.waitFor({ timeout: 20000 });
    await pause(800);
    await orbit.click();
    await page.locator('.orbit-card-cont').first().waitFor({ timeout: 20000 });
    await pause(800);
    await page.locator('.orbit-card-cont').first().click();
    await page.locator('.orbit-host-survey-link-new').waitFor({ timeout: 20000 });
    await pause(800);
    const eventId = new URL(page.url()).searchParams.get('In_EventId');
    if (unableToHost) {
      const status = await page.evaluate(
        async ({ base, id }) => {
          const post = (action, body) =>
            fetch(`${base}/${action}`, {
              method: 'POST',
              headers: { 'content-type': 'application/json' },
              body: JSON.stringify(body),
            }).then((r) => r.json());
          const { data } = await post('ScreenBlock_HostSurvey/DataActionGetHostSurvey', { In_EventId: id });
          data.Response.SurveyInfo.HostProfileSurveyStatus = 'unable_to_host';
          await post('ActionPostHostSurvey', { GetHostSurvey: data.Response });
          const after = await post('ScreenBlock_HostSurvey/DataActionGetHostSurvey', { In_EventId: id });
          return after.data.Response.SurveyInfo.HostProfileSurveyStatus;
        },
        { base: MODULE, id: eventId },
      );
      steps.push({ step: 'mock survey status', status });
    }
    steps.push({ step: 'EventDetail', ...(await where(page)) });
    await page.locator('.orbit-host-survey-link-new').click();
    await page.waitForURL(/\/UBTConnect\/HostSurvey/);
    if (unableToHost) await page.getByText('This Survey is no longer available').waitFor({ timeout: 20000 });
    else await page.locator('.orbit-host-survey-header-summary').waitFor({ timeout: 20000 });
    await pause(800);
    steps.push({ step: 'HostSurvey', ...(await where(page)) });

    await page.goBack({ timeout: 5000 }).catch(() => null);
    await pause(150);
    steps.push({ step: 'back 1 (+150 ms)', ...(await where(page)) });
    await pause(1500);
    steps.push({ step: 'back 1 (+1650 ms)', ...(await where(page)) });

    await page.goBack({ timeout: 5000 }).catch(() => null);
    await pause(1500);
    steps.push({ step: 'back 2 (+1500 ms)', ...(await where(page)) });
  } catch (error) {
    steps.push({ step: 'error', message: String(error) });
  } finally {
    await context.close();
  }
  const at = (name) => steps.find((s) => s.step === name);
  const pass =
    at('back 1 (+1650 ms)')?.path === '/UBTConnect/EventDetail' &&
    at('back 1 (+1650 ms)')?.screens.length === 1 &&
    at('back 2 (+1500 ms)')?.path === '/UBTConnect/OrbitLanding' &&
    errors.length === 0 &&
    (!unableToHost || at('mock survey status')?.status === 'unable_to_host');
  return { reducedMotion, survey: unableToHost ? 'Unable to Host' : 'Confirmed', pass, errors, steps };
}

const browser = await launch();
const results = [];
for (const reducedMotion of ['no-preference', 'reduce']) {
  for (const unableToHost of [true, false]) results.push(await run(browser, reducedMotion, unableToHost));
}
await browser.close();
console.log(JSON.stringify(results, null, 2));
process.exitCode = results.every((r) => r.pass) ? 0 : 1;
