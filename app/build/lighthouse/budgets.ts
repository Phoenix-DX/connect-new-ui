/* Lighthouse budgets of the demo build (ADR-12, ADR-13; guide: docs/guides/pwa.md "Lighthouse"). Set from the first
   run (2026-10-16, Lighthouse 13.4.1, mobile emulation, simulated throttling) with a margin for run-to-run noise:
   category score minus 5; FCP, LCP and TBT plus 20 % (at least 200 ms), rounded up to 100 ms; CLS plus 0.05, rounded up
   to 0.01. A miss is a warning, not a failure. Tighten them by ADR. */

export const PAGES = [
  { name: 'HomeFeed', path: '/UBTConnect/HomeFeed' },
  { name: 'Search', path: '/UBTConnect/Search' },
  { name: 'OrbitLanding', path: '/UBTConnect/OrbitLanding' },
] as const;
export type PageName = (typeof PAGES)[number]['name'];

export const CATEGORIES = ['performance', 'accessibility', 'best-practices'] as const;
export type Category = (typeof CATEGORIES)[number];

export const METRICS = [
  'first-contentful-paint',
  'largest-contentful-paint',
  'total-blocking-time',
  'cumulative-layout-shift',
] as const;
export type Metric = (typeof METRICS)[number];

export interface Budget {
  /** minimum category score, 0-100 */
  scores: Record<Category, number>;
  /** maximum metric value */
  metrics: Record<Metric, number>;
}

export const BUDGETS: Partial<Record<PageName, Budget>> = {
  // first run: 44 / 90 / 96; FCP 9680, LCP 14704, TBT 0, CLS 0.244
  HomeFeed: {
    scores: { performance: 39, accessibility: 85, 'best-practices': 91 },
    metrics: {
      'first-contentful-paint': 11700,
      'largest-contentful-paint': 17700,
      'total-blocking-time': 200,
      'cumulative-layout-shift': 0.3,
    },
  },
  // first run: 56 / 95 / 100; FCP 9302, LCP 14102, TBT 8, CLS 0
  Search: {
    scores: { performance: 51, accessibility: 90, 'best-practices': 95 },
    metrics: {
      'first-contentful-paint': 11200,
      'largest-contentful-paint': 17000,
      'total-blocking-time': 300,
      'cumulative-layout-shift': 0.05,
    },
  },
  // first run: 55 / 92 / 100; FCP 13053, LCP 18152, TBT 0, CLS 0.011
  OrbitLanding: {
    scores: { performance: 50, accessibility: 87, 'best-practices': 95 },
    metrics: {
      'first-contentful-paint': 15700,
      'largest-contentful-paint': 21800,
      'total-blocking-time': 200,
      'cumulative-layout-shift': 0.07,
    },
  },
};
