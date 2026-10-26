import { renderHook } from '@testing-library/react';
import type { ReactNode } from 'react';
import { MemoryRouter } from 'react-router';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { getClientVar, setClientVar } from '@/platform/session/session';
import { freshPage } from '@/test/testSupport';
import { usePINBiometricsMenu } from './usePINBiometricsMenu';

const navigate = vi.fn();

vi.mock('@/platform/navigation', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/navigation')>()),
  useOsNavigate: () => navigate,
}));

/* The flows of the PIN & Biometrics menu with the navigation replaced by a spy. */
function Router({ children }: { children: ReactNode }) {
  return <MemoryRouter initialEntries={['/UBTConnect/PINBiometricsMenu']}>{children}</MemoryRouter>;
}

const renderMenu = () => renderHook(() => usePINBiometricsMenu(), { wrapper: Router });

beforeEach(() => {
  freshPage();
  vi.clearAllMocks();
});

describe('usePINBiometricsMenu', () => {
  it('OnInitialize on the web: In_MenuSection without a separator, with the Change PIN row only', () => {
    const { result } = renderMenu();
    expect(result.current.menuSection).toEqual({
      HasSeparator: false,
      MenuOptions: [{ IconId: 'connect-icon-password', Label: 'Change PIN' }],
    });
  });

  it('keeps the same In_MenuSection record while MenuOptionList does not change', () => {
    const { result, rerender } = renderMenu();
    const before = result.current.menuSection;
    rerender();
    expect(result.current.menuSection).toBe(before);
  });

  it('Change PIN opens PINChange with the default transition', () => {
    const { result } = renderMenu();
    result.current.onMenuOption({ Label: 'Change PIN' });
    expect(navigate.mock.calls).toEqual([['/UBTConnect/PINChange']]);
  });

  it('Biometric Login toggles App_PIN_BiometricEnabled and does not navigate', () => {
    setClientVar('UBTConnect.App_PIN_BiometricEnabled', true);
    const { result } = renderMenu();
    result.current.onMenuOption({ Label: 'Biometric Login' });
    expect(getClientVar('UBTConnect.App_PIN_BiometricEnabled')).toBe(false);
    result.current.onMenuOption({ Label: 'Biometric Login' });
    expect(getClientVar('UBTConnect.App_PIN_BiometricEnabled')).toBe(true);
    expect(navigate).not.toHaveBeenCalled();
  });

  it('another label does nothing', () => {
    setClientVar('UBTConnect.App_PIN_BiometricEnabled', true);
    const { result } = renderMenu();
    result.current.onMenuOption({ Label: 'Other' });
    result.current.onMenuOption({});
    expect(navigate).not.toHaveBeenCalled();
    expect(getClientVar('UBTConnect.App_PIN_BiometricEnabled')).toBe(true);
  });
});
