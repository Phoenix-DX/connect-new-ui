import { act, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { confirmAction } from '../../../shell/dialogs/confirmAction';
import { testCapturedVariants } from '../../test/capturedVariants';
import { FreeSubscriptionActionDialog } from './FreeSubscriptionActionDialog';
import * as stories from './FreeSubscriptionActionDialog.stories';

vi.mock('../../../shell/userInfo', () => ({
  getUserInformation: () =>
    Promise.resolve({
      Directory_UserCurrent: {
        Directory_UserCurrent_Subscription: { SubscriptionManageLink: 'https://example.test/sub' },
      },
    }),
}));

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('FreeSubscriptionActionDialog', () => {
  testCapturedVariants(stories, captures);

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('confirmAction(id) shows the texts of the compiled view; Upgrade Subscription opens the manage link', async () => {
    const open = vi.spyOn(window, 'open').mockReturnValue(null);
    render(<FreeSubscriptionActionDialog id="FreeSubscriptionAlert" />);
    let answer: Promise<boolean> = Promise.resolve(false);
    act(() => {
      answer = confirmAction('FreeSubscriptionAlert');
    });
    expect(await screen.findByText('Access Restricted')).toBeInTheDocument();
    expect(document.body).toHaveTextContent("It seems like you don't have access to this information.");
    fireEvent.click(screen.getByText('Upgrade Subscription'));
    await expect(answer).resolves.toBe(true);
    expect(open).toHaveBeenCalledWith('https://example.test/sub', '_blank', 'noopener');
    expect(screen.queryByText('Cancel')).toBeNull();
  });
});
