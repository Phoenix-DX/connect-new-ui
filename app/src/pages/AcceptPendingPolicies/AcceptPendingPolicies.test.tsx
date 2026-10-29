import { screen, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { renderRoutes, resetNavigation } from '@/platform/navigation/testRouter';
import { freshPage, recordBodies } from '@/test/testSupport';
import AcceptPendingPolicies from './AcceptPendingPoliciesPage';

/* The page against the MSW mocks of the route (two fictional Connect policies). The route was not captured (Q7 c):
   the test checks what the compiled code shows. */
const PATH = '/UBTConnect/AcceptPendingPolicies';

beforeEach(() => {
  freshPage();
  resetNavigation();
});
afterEach(() => {
  sessionStorage.clear();
});

describe('AcceptPendingPolicies page', () => {
  it('shows the header and the pending policies in the sign-in layout, Continue disabled', async () => {
    const { container } = renderRoutes({ [PATH]: <AcceptPendingPolicies /> }, PATH);
    expect(screen.getByText('Welcome to')).toBeInTheDocument();
    expect(screen.getByText('Connect and Directory')).toBeInTheDocument();
    expect(screen.getByText('Terms and Conditions & Privacy Policy')).toBeInTheDocument();
    expect(container.querySelector('.ubt-layout--login.ubt-policies')).not.toBeNull();
    expect(await screen.findByText('Terms and Conditions')).toBeInTheDocument();
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Continue' })).toBeDisabled();
  });

  it('sends the three applications and the id of the layout main container', async () => {
    const bodies = recordBodies('UBTConnect/Policy_Custom_AcceptPendingPolicies/DataActionGetPendingPolicies');
    renderRoutes({ [PATH]: <AcceptPendingPolicies /> }, PATH);
    await screen.findByText('Terms and Conditions');
    await waitFor(() => {
      expect(bodies).toContainEqual(expect.objectContaining({ ContentBlockId: 'b1-Main' }));
    });
    expect(bodies[bodies.length - 1]).toEqual(
      expect.objectContaining({
        PolicyApplications: {
          List: [
            '65d96f75-9f71-42aa-8447-fd622aa09e7e',
            'd8997dfa-7ae3-4eb1-bb48-0a14e151034a',
            '4b033840-c133-4f0d-beb9-4c3659a9bc28',
          ],
        },
        IsAllSelected: false,
      }),
    );
  });
});
