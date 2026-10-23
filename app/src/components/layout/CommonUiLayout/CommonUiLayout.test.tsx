import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { afterEach, describe, expect, it } from 'vitest';
import { resetBackQueue } from '@/platform/navigation/backQueue';
import { setClientVar, setSignedInUser } from '@/platform/session/session';
import { testCapturedVariants } from '@/shared/test/capturedVariants';
import { CommonUiLayout, type CommonUiLayoutProps } from './CommonUiLayout';
import * as stories from './CommonUiLayout.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });
const blocks = (props: CommonUiLayoutProps = {}) => {
  const { container } = render(
    <MemoryRouter initialEntries={['/UBTConnect/Menu']}>
      <CommonUiLayout {...props} />
    </MemoryRouter>,
  );
  return [...container.querySelectorAll('[data-block="App_Common.CommonUI_InsideLayout"] > [data-block]')].map((b) =>
    b.getAttribute('data-block'),
  );
};

describe('CommonUI_InsideLayout', () => {
  afterEach(() => {
    setSignedInUser(null);
    setClientVar('UBTConnect.App_Policies_HasPolicyToAccept', false);
    setClientVar('UBTConnect.IsNavigateToHomeOnBack', false);
    resetBackQueue();
  });
  testCapturedVariants(stories, captures);

  it('hides the lock block with In_IgnoreLockScreen and shows Policy_Checker for a pending policy', () => {
    setSignedInUser('mock-user');
    setClientVar('UBTConnect.App_Policies_HasPolicyToAccept', true);
    expect(blocks()).toContain('App_PIN.Block_PINUnlock');
    expect(blocks({ inIgnorePolicy: true })).not.toContain('App_Policies.Policy_Checker');
    const ignored = blocks({ inIgnoreLockScreen: true });
    expect(ignored).not.toContain('App_PIN.Block_PINUnlock');
    expect(ignored).toContain('App_Policies.Policy_Checker');
  });

  it('prevents back navigation when IsNavigateToHomeOnBack is set, and clears it', () => {
    setClientVar('UBTConnect.IsNavigateToHomeOnBack', true);
    expect(blocks().at(-1)).toBe('NavigationHandler.PreventBackNavigation');
    expect(blocks().at(-1)).toBe('NavigationHandler.BackNavigationHandler');
  });
});
