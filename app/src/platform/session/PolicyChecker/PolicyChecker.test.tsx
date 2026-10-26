import { waitFor } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { renderRoutes, resetNavigation } from '@/platform/navigation/testRouter';
import { setClientVar } from '@/platform/session/session';
import { PolicyChecker } from './PolicyChecker';

const routes = {
  '/UBTConnect/Menu': <PolicyChecker id="b1-$b3" />,
  '/UBTConnect/AcceptPendingPolicies': <p>AcceptPendingPolicies</p>,
};

describe('Policy_Checker', () => {
  afterEach(() => {
    setClientVar('UBTConnect.App_Policies_HasPolicyToAccept', false);
    resetNavigation();
  });

  it('renders the empty wrapper and stays without a pending policy', () => {
    const { at, container } = renderRoutes(routes, '/UBTConnect/Menu');
    const block = container.querySelector('[data-block="App_Policies.Policy_Checker"]');
    expect(block).toHaveClass('OSBlockWidget');
    expect(block?.childNodes).toHaveLength(0);
    expect(at()).toBe('/UBTConnect/Menu');
  });

  it('goes to AcceptPendingPolicies with a pending policy', async () => {
    setClientVar('UBTConnect.App_Policies_HasPolicyToAccept', true);
    const { at, router } = renderRoutes(routes, '/UBTConnect/Menu');
    await waitFor(() => {
      expect(at()).toBe('/UBTConnect/AcceptPendingPolicies');
    });
    expect(router.state.historyAction).toBe('PUSH');
  });
});
