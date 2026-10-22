import { readItem, writeItem } from '@/platform/storage/storage';

/* Review markers (`<NotCaptured>`, platform/feedback/NotCaptured.tsx) frame what the migration built without a capture. They
   are a reviewer's aid, so built apps (demo PWA, production) never show them, and the dev server shows them only on
   request: `?review=1` shows them for the tab, `?review=0` hides them again (user, 2026-10-16: the framed Trove dialog
   looked like an error in a demo; user, 2026-10-17: off by default on the dev server too). Tests and Storybook turn
   them on with setReviewMarkers (src/test/setup.ts, .storybook/preview.ts). */
const REVIEW_KEY = 'ubtc-review:markers';

export function setReviewMarkers(on: boolean): void {
  writeItem('session', REVIEW_KEY, on ? '1' : '0');
}

export function showReviewMarkers(): boolean {
  if (!import.meta.env.DEV) return false;
  const param = new URL(window.location.href).searchParams.get('review');
  if (param === '0' || param === '1') setReviewMarkers(param === '1');
  return readItem('session', REVIEW_KEY) === '1';
}
