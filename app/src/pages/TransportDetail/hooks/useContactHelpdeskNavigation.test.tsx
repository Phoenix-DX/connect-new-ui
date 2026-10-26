import { renderHook } from '@testing-library/react';
import type { ReactNode } from 'react';
import { MemoryRouter } from 'react-router';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { showFeedbackMessage } from '@/platform/feedback';
import { useContactHelpdeskNavigation } from './useContactHelpdeskNavigation';

vi.mock('@/platform/feedback', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback')>()),
  showFeedbackMessage: vi.fn(),
}));
const navigate = vi.hoisted(() => vi.fn());
vi.mock('@/platform/navigation', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/navigation')>()),
  useOsNavigate: () => navigate,
}));

/* OnHandle_ContactHelpdesk of the screen, with the navigation and the feedback message replaced by spies. */
const inputs = { In_TargetMemberId: '990001', In_MilestoneId: '8120-T2' };
const wrapper = ({ children }: { children: ReactNode }) => <MemoryRouter>{children}</MemoryRouter>;
const SUBJECT = 'Pick-up to the hall - AF 204 JR - Sat 14 Mar 2026 8:15 AM';

beforeEach(() => {
  vi.clearAllMocks();
  vi.useFakeTimers();
});
afterEach(() => {
  vi.useRealTimers();
});

describe('useContactHelpdeskNavigation', () => {
  it('with access to Orbit opens ContactByEmailOrbitHelpdesk with the subject and the milestone', () => {
    const { result } = renderHook(() => useContactHelpdeskNavigation(inputs, true), { wrapper });
    result.current(SUBJECT, 'Pick-up to the hall');
    expect(navigate).toHaveBeenCalledTimes(1);
    expect(navigate).toHaveBeenCalledWith('/UBTConnect/ContactByEmailOrbitHelpdesk', {
      In_EventName: 'Pick-up to the hall',
      In_Subject: SUBJECT,
      In_TargetMemberId: '990001',
      In_EventId: '0',
      In_MilestoneId: '8120-T2',
    });
    vi.advanceTimersByTime(1000);
    expect(showFeedbackMessage).not.toHaveBeenCalled();
  });

  it('without access opens HomeFeed and shows the no-access error 500 ms later', () => {
    const { result } = renderHook(() => useContactHelpdeskNavigation(inputs, false), { wrapper });
    result.current(SUBJECT, 'Pick-up to the hall');
    expect(navigate).toHaveBeenCalledTimes(1);
    expect(navigate).toHaveBeenCalledWith('/UBTConnect/HomeFeed', {});
    vi.advanceTimersByTime(499);
    expect(showFeedbackMessage).not.toHaveBeenCalled();
    vi.advanceTimersByTime(1);
    expect(showFeedbackMessage).toHaveBeenCalledTimes(1);
    expect(showFeedbackMessage).toHaveBeenCalledWith(
      "You don't have access to Orbit. Please contact the Orbit Helpdesk if you have any questions.",
      3,
    );
  });
});
