/*
 * survey.js: app-level static survey for OutSystems 11 Reactive / Mobile apps.
 *
 * Inject on any screen of the app while logged in, then run:
 *   await __osSurvey.run()                      // all modules except platform/plugins
 *   await __osSurvey.run({ include: /^(<MainModule>|<ModulePrefix>_)/ })   // narrow by module name
 *
 * It reads /<App>/moduleservices/moduleinfo, downloads every compiled screen/block file
 * (*.mvc.js) of the selected modules and saves survey-<App>.json. These files are static
 * application code: they contain no user data. No clicks, no navigation, no service calls.
 *
 * Options:
 *   include        RegExp on module name (default: everything)
 *   exclude        RegExp on module name (default: OutSystems platform modules and *Plugin). OutSystems UI is KEPT:
 *                  its pattern blocks (Dropdown, DatePicker, Tabs, Sidebar...) are built once in the foundation (P-OSUI)
 *   controllers    also download <Module>.controller.js of modules that own screens (default false; large)
 *   concurrency    parallel fetches (default 6)
 *   download       trigger a file download (default true)
 * Returns a short summary; the full JSON stays in __osSurvey.last (read with __osSurvey.chunk(i)).
 */
(() => {
  if (window.__osSurvey) return 'already-installed';
  const app = location.pathname.split('/')[1];
  let LAST = null;

  async function run(opts = {}) {
    const o = Object.assign({
      include: /.*/,
      exclude: /^(OutSystems|OutSystemsReactView|OutSystemsReactWidgets|OutSystemsManifestLoader|OutSystemsSettings|Debugger|ServiceCenter|Users|RichWidgets|.*Plugin)$/,
      controllers: false, concurrency: 6, download: true,
    }, opts);
    const info = await (await fetch(`/${app}/moduleservices/moduleinfo`, { credentials: 'include' })).json();
    const all = Object.entries(info.manifest?.urlVersions ?? {}).map(([u, v]) => ({ path: u, url: new URL(u + (v || ''), location.origin).href }));
    const moduleOf = p => p.split('/').pop().split('.')[0];
    const mvc = all.filter(x => x.path.endsWith('.mvc.js') && o.include.test(moduleOf(x.path)) && !o.exclude.test(moduleOf(x.path)));

    const sources = {}, failed = [];
    const queue = [...mvc];
    const worker = async () => {
      while (queue.length) {
        const x = queue.shift();
        try { const r = await fetch(x.url, { credentials: 'include' }); if (!r.ok) throw new Error('HTTP ' + r.status); sources[x.path.split('/').pop()] = await r.text(); }
        catch (e) { failed.push(x.path + ' (' + e.message + ')'); }
      }
    };
    await Promise.all(Array.from({ length: o.concurrency }, worker));

    if (o.controllers) {
      const screenModules = new Set(Object.entries(sources).filter(([, t]) => /OSView\.BaseView\.BaseWebScreen/.test(t)).map(([k]) => k.split('.')[0]));
      for (const m of screenModules) {
        const x = all.find(a => a.path.endsWith(`/${m}.controller.js`));
        if (!x) continue;
        try { sources[`${m}.controller.js`] = await (await fetch(x.url, { credentials: 'include' })).text(); } catch (e) { failed.push(x.path); }
      }
    }

    const out = {
      kind: 'survey', app, collectedAt: new Date().toISOString(), origin: location.origin,
      manifest: all.map(x => x.path),
      sources, failed,
    };
    const text = JSON.stringify(out);
    LAST = text;
    if (o.download) {
      const a = Object.assign(document.createElement('a'), { href: URL.createObjectURL(new Blob([text], { type: 'application/json' })), download: `survey-${app}.json` });
      document.body.appendChild(a); a.click(); a.remove();
    }
    return { file: `survey-${app}.json`, bytes: text.length, chunks200k: Math.ceil(text.length / 200000), files: Object.keys(sources).length, manifestEntries: all.length, failed: failed.length };
  }

  const chunk = (i, size = 200000) => (LAST ? LAST.slice(i * size, (i + 1) * size) : null);
  window.__osSurvey = { run, chunk, version: 1 };
  return 'installed';
})();
