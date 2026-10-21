import { afterEach, describe, expect, it, vi } from 'vitest';
import { panzoom } from '.';

/* The vendored TST script through its typed wrapper (ADR-7), with the options of PanZoom.PanZoom OnReady
   (PanZoom.PanZoom.PanZoom.mvc.js JavaScript1JS :367-386). */
describe('vendor/panzoom', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  const setup = () => {
    const owner = document.createElement('div');
    const area = document.createElement('div');
    owner.appendChild(area);
    document.body.appendChild(owner);
    const zoomIn = vi.fn();
    const minZoom = vi.fn();
    const instance = panzoom(area, {
      maxZoom: 3,
      minZoom: 1,
      bounds: true,
      boundsPadding: 1,
      onTouch: () => false,
      triggerMinZoomReached: minZoom,
      triggerZoomIn: zoomIn,
      doubleClickEnablesZoom: false,
    });
    return { owner, area, instance, zoomIn, minZoom };
  };

  it('loads the UMD bundle and attaches to the element: the owner (parent) gets tabindex 0', () => {
    const { owner, instance } = setup();
    expect(owner).toHaveAttribute('tabindex', '0');
    expect(instance.getTransform()).toEqual({ x: 0, y: 0, scale: 1 });
    expect(instance.getMinZoom()).toBe(1);
    expect(instance.getMaxZoom()).toBe(3);
    instance.dispose();
  });

  it('zooming in raises triggerZoomIn; zooming out at minZoom raises triggerMinZoomReached (custom hooks)', () => {
    const { instance, zoomIn, minZoom } = setup();
    instance.zoomTo(0, 0, 2);
    expect(zoomIn).toHaveBeenCalled();
    expect(instance.getTransform().scale).toBe(2);
    instance.zoomTo(0, 0, 0.1); // clamped to minZoom 1
    expect(instance.getTransform().scale).toBe(1);
    expect(minZoom).not.toHaveBeenCalled();
    instance.zoomTo(0, 0, 0.5); // already at minZoom
    expect(minZoom).toHaveBeenCalledTimes(1);
    instance.dispose();
  });
});
