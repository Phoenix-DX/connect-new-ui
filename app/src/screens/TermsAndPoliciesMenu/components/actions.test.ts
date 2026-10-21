import { afterEach, describe, expect, it, vi } from 'vitest';
import { getFeedbackMessage, resetFeedbackMessages } from '../../../shell/feedback/feedbackStore';
import { openPolicy, POLICY_NOT_FOUND } from './actions';

const policy = (url: string) => ({
  Policy_Url: url,
  Policy_FileName: 'policy.pdf',
  Policy_ContentType: 'application/pdf',
});

describe('OpenPolicy (web branch)', () => {
  afterEach(() => {
    vi.restoreAllMocks();
    resetFeedbackMessages();
  });

  it('opens the policy URL in a new tab', () => {
    const open = vi.spyOn(window, 'open').mockReturnValue(null);
    openPolicy(policy('https://example.com/terms.pdf'));
    expect(open).toHaveBeenCalledWith('https://example.com/terms.pdf', '_blank');
    expect(getFeedbackMessage()).toBeNull();
  });

  it('shows the error feedback when the URL is empty or the policies are not fetched', () => {
    const open = vi.spyOn(window, 'open').mockReturnValue(null);
    openPolicy(undefined, POLICY_NOT_FOUND);
    expect(open).not.toHaveBeenCalled();
    expect(getFeedbackMessage()).toMatchObject({ message: "This policy couldn't be found.", type: 3 });
    openPolicy(policy(''));
    expect(open).not.toHaveBeenCalled();
  });
});
