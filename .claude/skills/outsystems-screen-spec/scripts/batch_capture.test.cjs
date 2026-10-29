'use strict';
// Run: node --test .claude/skills/outsystems-screen-spec/scripts/batch_capture.test.cjs
const test = require('node:test');
const assert = require('node:assert');
const { openVia } = require('./batch_capture.cjs');

/* a fake Playwright page that records the order of the calls openVia makes */
function fakePage(log) {
  const loc = sel => ({
    first: () => loc(sel),
    nth: () => loc(sel),
    waitFor: async opts => { log.push(`wait ${opts.state} ${sel}`); },
    click: async () => { log.push(`click ${sel}`); },
  });
  return {
    url: () => 'https://host/App/Target',
    goto: async u => { log.push(`goto ${new URL(u).pathname}`); },
    waitForLoadState: async () => {},
    waitForSelector: async () => {},
    locator: loc,
    waitForURL: async () => { log.push('url'); },
  };
}

test('via: the click target is visible before the hold/abort handler or the runtime restart runs', async () => {
  const log = [];
  const sc = { via: { from: '/App/Source', click: '.card', nth: 0 } };
  await openVia(fakePage(log), sc, { settleMs: 1 }, 'https://host/', 'https://host/App/Target',
    async () => { log.push('beforeClick'); }, false);
  assert.deepStrictEqual(log, ['goto /App/Source', 'wait visible .card', 'beforeClick', 'click .card', 'url']);
});

test('via without beforeClick still waits for the target before the click', async () => {
  const log = [];
  const sc = { via: { from: '/App/Source', click: '.card' } };
  await openVia(fakePage(log), sc, { settleMs: 1 }, 'https://host/', 'https://host/App/Target', null, false);
  assert.deepStrictEqual(log, ['goto /App/Source', 'wait visible .card', 'click .card', 'url']);
});
