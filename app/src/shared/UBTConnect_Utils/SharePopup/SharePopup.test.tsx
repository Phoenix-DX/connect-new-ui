import { fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { setFlag } from '@/platform/flags/flags';
import { testCapturedVariants } from '@/shared/test/capturedVariants';
import { Connect_Entity } from '@/shared/UBTConnect_Utils/lib/staticEntities';
import { SharePopup } from './SharePopup';
import * as stories from './SharePopup.stories';

const feedback = vi.hoisted(() => ({ feedbackMessageAutoClose: vi.fn() }));
vi.mock('@/platform/feedback', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback')>()),
  feedbackMessageAutoClose: feedback.feedbackMessageAutoClose,
}));

/* Only the stories with a capture: `Open (not captured)` is a catalog story. */
const capturedStories = { default: stories.default, V1: stories.V1 };
const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

afterEach(() => {
  setFlag('C2ExtendedShare', null);
  feedback.feedbackMessageAutoClose.mockClear();
});

describe('SharePopup', () => {
  testCapturedVariants(capturedStories, captures);

  it('opens ContactPopup with "Share to Connect" only (not native); row 0 raises Event_ShareToConnect', () => {
    const onEventShareToConnect = vi.fn();
    const onEventShareToOthers = vi.fn();
    render(
      <SharePopup
        inContactPopupData={{ ShowPopup: true, Name: 'Item' }}
        onEventShareToConnect={onEventShareToConnect}
        onEventShareToOthers={onEventShareToOthers}
      />,
    );
    expect(screen.getByText('Share to Connect')).toBeInTheDocument();
    expect(screen.queryByText('Share to other apps')).toBeNull();
    expect(document.body.querySelector('.ubt-contact-by-phone-popup .connect-icon-share')).not.toBeNull();
    fireEvent.click(screen.getByText('Share to Connect'));
    expect(onEventShareToConnect).toHaveBeenCalledTimes(1);
    expect(onEventShareToOthers).not.toHaveBeenCalled();
  });

  it('Cancel raises Event_Cancel', () => {
    const onEventCancel = vi.fn();
    render(<SharePopup inContactPopupData={{ ShowPopup: true }} onEventCancel={onEventCancel} />);
    fireEvent.click(screen.getByText('Cancel'));
    expect(onEventCancel).toHaveBeenCalledTimes(1);
  });

  it('OnParametersChanged without extended share: other entity types get the coming-soon message and Cancel', () => {
    setFlag('C2ExtendedShare', 'off');
    const onEventCancel = vi.fn();
    const { rerender } = render(<SharePopup inContactPopupData={{ ShowPopup: false }} onEventCancel={onEventCancel} />);
    rerender(
      <SharePopup
        inContactPopupData={{ ShowPopup: true, EntityTypeId: Connect_Entity.Member }}
        onEventCancel={onEventCancel}
      />,
    );
    expect(onEventCancel).not.toHaveBeenCalled();
    rerender(
      <SharePopup
        inContactPopupData={{ ShowPopup: true, EntityTypeId: Connect_Entity.Locality }}
        onEventCancel={onEventCancel}
      />,
    );
    expect(feedback.feedbackMessageAutoClose).toHaveBeenCalledWith(
      expect.objectContaining({ message: 'This feature will be available soon', messageType: 'info' }),
    );
    expect(onEventCancel).toHaveBeenCalledTimes(1);
  });

  it('with extended share (TST) a parameter change never cancels', () => {
    const onEventCancel = vi.fn();
    const { rerender } = render(<SharePopup onEventCancel={onEventCancel} />);
    rerender(
      <SharePopup
        inContactPopupData={{ ShowPopup: true, EntityTypeId: Connect_Entity.Locality }}
        onEventCancel={onEventCancel}
      />,
    );
    expect(onEventCancel).not.toHaveBeenCalled();
    expect(feedback.feedbackMessageAutoClose).not.toHaveBeenCalled();
  });
});
