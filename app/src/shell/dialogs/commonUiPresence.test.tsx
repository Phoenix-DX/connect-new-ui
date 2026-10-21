import { act, render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { useCommonUiPresence, useIsCommonUiAbsent, useIsCommonUiMounted, useNoCommonUi } from './commonUiPresence';

function Probe() {
  const mounted = useIsCommonUiMounted();
  const absent = useIsCommonUiAbsent();
  return <output>{`${String(mounted)}/${String(absent)}`}</output>;
}
function CommonUi() {
  useCommonUiPresence();
  return null;
}
function BlankLayout() {
  useNoCommonUi();
  return null;
}

describe('commonUiPresence', () => {
  it('reports a screen with CommonUI, a layout without it, and neither', () => {
    const { container, rerender } = render(<Probe />);
    expect(container.textContent).toBe('false/false');
    act(() => {
      rerender(
        <>
          <Probe />
          <BlankLayout />
        </>,
      );
    });
    expect(container.textContent).toBe('false/true');
    act(() => {
      rerender(
        <>
          <Probe />
          <CommonUi />
        </>,
      );
    });
    expect(container.textContent).toBe('true/false');
    act(() => {
      rerender(<Probe />);
    });
    expect(container.textContent).toBe('false/false');
  });
});
