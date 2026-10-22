import { render } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { resetBackQueue } from '@/platform/navigation/backQueue';
import { setClientVar, setSignedInUser } from '@/platform/session/session';
import { testCapturedVariants } from '@/shared/test/capturedVariants';
import { Layout_LoginFlow } from './Layout_LoginFlow';
import * as stories from './Layout_LoginFlow.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('Layout_LoginFlow', () => {
  afterEach(() => {
    setSignedInUser(null);
    setClientVar('UBT_AppManager.PIN_IsLocked', false);
    resetBackQueue();
  });
  testCapturedVariants(stories, captures);

  it('without In_HasOverlay: no background; OnReady gets the Main id', () => {
    const onReady = vi.fn();
    const { container } = render(<Layout_LoginFlow id="$b1" onOnReady={onReady} />);
    expect(container.querySelector('.ubt-layout--login__svg')).toBeNull();
    expect(container.querySelector('[data-block="LayoutRuntime_NavigationHandler.LayoutRuntime_Top"]')).not.toBeNull();
    expect(onReady).toHaveBeenCalledWith('b1-Main');
    expect(container.querySelector('#b1-Main')).toHaveClass('ubt-layout--login');
  });
});
