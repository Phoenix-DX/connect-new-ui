import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { captureScrollPosition, scrollFix } from './actions';

const rect = (top: number) => ({
  top,
  bottom: top,
  left: 0,
  right: 0,
  width: 0,
  height: 0,
  x: 0,
  y: top,
  toJSON: () => ({}),
});

describe('Updates_SingleList scroll anchor nodes (US:3369-3384, 3440-3460)', () => {
  beforeEach(() => {
    localStorage.clear();
    document.body.innerHTML =
      '<div class="active-screen screen-container"><div data-dx-scroll-anchor-id="980096"></div></div>';
    const container = document.querySelector('.active-screen.screen-container') as HTMLElement;
    const anchor = container.firstElementChild as HTMLElement;
    container.getBoundingClientRect = () => rect(100);
    anchor.getBoundingClientRect = () => rect(600);
    container.scrollTop = 1800;
  });
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('CaptureScrollPosition stores the anchor id and its offset from the container top', () => {
    captureScrollPosition('980096');
    expect(localStorage.getItem('scrollAnchorId')).toBe('980096');
    expect(localStorage.getItem('scrollAnchorDelta')).toBe('500');
  });

  it('CaptureScrollPosition stores nothing for an unknown anchor', () => {
    captureScrollPosition('none');
    expect(localStorage.getItem('scrollAnchorId')).toBeNull();
  });

  it('ScrollFix scrolls the container so that the anchor sits at the stored delta, then removes the keys', async () => {
    localStorage.setItem('scrollAnchorId', '980096');
    localStorage.setItem('scrollAnchorDelta', '200');
    const container = document.querySelector('.active-screen.screen-container') as HTMLElement;
    scrollFix('');
    await new Promise((resolve) =>
      window.requestAnimationFrame(() => {
        resolve(null);
      }),
    );
    expect(container.scrollTop).toBe(1800 + 500 - 200);
    expect(localStorage.getItem('scrollAnchorId')).toBeNull();
    expect(localStorage.getItem('scrollAnchorDelta')).toBeNull();
  });

  it('ScrollFix with an input anchor id uses it; without any id it does nothing', async () => {
    const container = document.querySelector('.active-screen.screen-container') as HTMLElement;
    scrollFix('');
    await new Promise((resolve) =>
      window.requestAnimationFrame(() => {
        resolve(null);
      }),
    );
    expect(container.scrollTop).toBe(1800);
    scrollFix('980096');
    await new Promise((resolve) =>
      window.requestAnimationFrame(() => {
        resolve(null);
      }),
    );
    expect(container.scrollTop).toBe(1800 + 500);
  });

  it('ScrollFix gives up after 180 frames when the anchor never appears', () => {
    const raf = vi.spyOn(window, 'requestAnimationFrame').mockImplementation((cb) => {
      cb(0);
      return 0;
    });
    localStorage.setItem('scrollAnchorId', 'missing');
    scrollFix('');
    expect(raf).toHaveBeenCalledTimes(180);
    expect(localStorage.getItem('scrollAnchorId')).toBe('missing');
  });
});
