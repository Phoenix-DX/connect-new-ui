import cfg from './device-classes.json';

/* Device classes on <html>/<body>, as OutSystems UI sets them at runtime. Captured viewports win (nearest captured width
   with the same orientation); widths never captured use the fallback breakpoints (confirm them by capturing). */
type Entry = { viewport: string; body: string[]; html: string[] };

/* The operating-system class comes from the user agent at run time, as OutSystems UI computes it (GetOS_Legacy,
   OutSystemsUI_2_23.controller.js): ipad/iphone → ios, android, windows, mac → osx. The captures only show the OS of the
   capture machine, so it is never copied from them. */
const OS_TOKENS = new Set(['ios', 'android', 'windows', 'osx', 'linux']);
export function osToken(userAgent: string = navigator.userAgent): string | null {
  const ua = userAgent.toLowerCase();
  if (ua.includes('ipad') || ua.includes('iphone')) return 'ios';
  if (ua.includes('android')) return 'android';
  if (ua.includes('windows')) return 'windows';
  if (ua.includes('mac')) return 'osx';
  return null;
}
const withRuntimeOs = (tokens: string[]): string[] => {
  const os = osToken();
  const rest = tokens.filter((t) => !OS_TOKENS.has(t));
  return os ? [...rest, os] : rest;
};
export function deviceTokens(
  width = window.innerWidth,
  height = window.innerHeight,
): { body: string[]; html: string[] } {
  const orient = width > height ? 'landscape' : 'portrait';
  const list = (cfg.captured as Entry[]).map((e) => ({
    ...e,
    w: Number(e.viewport.split('x')[0]),
    h: Number(e.viewport.split('x')[1]),
  }));
  const same = list.filter((e) => (e.w > e.h ? 'landscape' : 'portrait') === orient);
  const pool = same.length ? same : list;
  const exact = pool.find((e) => e.w === width);
  if (exact) return { body: exact.body, html: exact.html };
  const kind = width <= cfg.fallback.phoneMax ? 'phone' : width <= cfg.fallback.tabletMax ? 'tablet' : 'desktop';
  const near = pool
    .filter((e) => e.body.includes(kind) || e.html.includes(kind))
    .sort((p, q) => Math.abs(p.w - width) - Math.abs(q.w - width))[0];
  if (near) return { body: near.body, html: near.html };
  return { body: [kind, orient], html: [] };
}

export function applyDeviceClasses() {
  const captured = deviceTokens();
  const t = { body: withRuntimeOs(captured.body), html: captured.html.filter((c) => !OS_TOKENS.has(c)) };
  for (const [el, want] of [
    [document.body, t.body],
    [document.documentElement, t.html],
  ] as const) {
    for (const c of cfg.tokens) if (!want.includes(c)) el.classList.remove(c);
    for (const c of want) el.classList.add(c);
  }
}
