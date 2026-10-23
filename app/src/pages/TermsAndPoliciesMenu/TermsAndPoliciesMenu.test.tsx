import { fireEvent, screen, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { getFeedbackMessage, resetFeedbackMessages } from '@/platform/feedback/feedbackStore';
import { renderRoutes, resetNavigation } from '@/platform/navigation/testRouter';
import { calledActions, freshPage } from '@/test/testSupport';
import TermsAndPoliciesMenu from './TermsAndPoliciesMenuPage';

/* The page against the MSW mocks: the recorded answer of CacheControl_Policies (the TST policy documents). */
const PATH = '/UBTConnect/TermsAndPoliciesMenu';

beforeEach(() => {
  freshPage();
  resetNavigation();
});
afterEach(() => {
  vi.restoreAllMocks();
  resetFeedbackMessages();
});

describe('TermsAndPoliciesMenu page', () => {
  it('shows the two policy rows in the skeleton of the detail layout until the policies come', async () => {
    const { container } = renderRoutes({ [PATH]: <TermsAndPoliciesMenu /> }, PATH);
    const layout = container.querySelector('[data-block="Layouts.Layout_DetailPage"]');
    if (layout === null) throw new Error('layout not rendered');
    expect(layout.querySelector('.ubt-layout-detail--primary')).not.toBeNull();
    expect(screen.getByText('Terms & Policies')).toBeInTheDocument();
    expect(screen.getByText('Terms and Conditions')).toBeInTheDocument();
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument();
    const list = container.querySelector('[data-block="App_Menu.Menu_List"]');
    expect(list?.closest('.ubt-skeleton-section')).not.toBeNull();
    expect(container.querySelector('[data-block="CacheControl.CacheControl_Policies"]')).not.toBeNull();

    await waitFor(() => {
      expect(container.querySelector('.ubt-skeleton-section')).toBeNull();
    });
    expect(calledActions()).toEqual(['CacheControl_Policies/DataActionGetCacheInfo']);
  });

  it('a row opens its policy in a new tab once the policies came; before, the error message', async () => {
    const open = vi.spyOn(window, 'open').mockReturnValue(null);
    const { container } = renderRoutes({ [PATH]: <TermsAndPoliciesMenu /> }, PATH);
    fireEvent.click(screen.getByText('Terms and Conditions'));
    expect(open).not.toHaveBeenCalled();
    expect(getFeedbackMessage()).toMatchObject({ message: "This policy couldn't be found.", type: 3 });

    await waitFor(() => {
      expect(container.querySelector('.ubt-skeleton-section')).toBeNull();
    });
    fireEvent.click(screen.getByText('Terms and Conditions'));
    fireEvent.click(screen.getByText('Privacy Policy'));
    expect(open.mock.calls).toEqual([
      [expect.stringMatching(/^https:\/\//), '_blank'],
      [expect.stringMatching(/^https:\/\//), '_blank'],
    ]);
    expect(open.mock.calls[0]?.[0]).not.toBe(open.mock.calls[1]?.[0]);
  });
});
