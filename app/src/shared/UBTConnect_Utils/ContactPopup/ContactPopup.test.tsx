import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { testCapturedVariants } from '@/shared/test/capturedVariants';
import { ContactPopup } from './ContactPopup';
import * as stories from './ContactPopup.stories';

/* Only the stories with a capture: `Open (not captured)` is a catalog story. */
const capturedStories = { default: stories.default, V1: stories.V1 };
const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

const dialog = () => document.body.querySelector('.ubt-contact-by-phone-popup');

describe('ContactPopup', () => {
  testCapturedVariants(capturedStories, captures);

  it('ShowPopup: OutSystems popup markup in <body>, title, number and buttons (first primary)', () => {
    const onEventClicked = vi.fn();
    const { container } = render(
      <ContactPopup
        inContactPopupData={{
          ShowPopup: true,
          ActionName: 'Call',
          Name: 'Julián Vitale',
          TitleTerminator: '?',
          DisplayContactNumber: '+54 291 555 0102',
        }}
        inContactPopupButtons={[
          { Id: 'a', UBT_IconId: 'connect-icon-call_fill', Label: 'Mobile' },
          { Id: 'b', Label: 'Home' },
        ]}
        onEventClicked={onEventClicked}
      />,
    );
    const popup = dialog();
    expect(popup).toHaveClass('popup-dialog', 'connect-legacy-compatibily-containter');
    expect(popup).toHaveAttribute('role', 'dialog');
    expect(popup?.closest('.popup-backdrop')?.parentElement?.parentElement).toHaveClass('portal-class');
    expect(screen.getByText('Call Julián Vitale?')).toBeInTheDocument();
    expect(screen.getByText('+54 291 555 0102')).toBeInTheDocument();
    expect(popup?.querySelector('.connect-icon-call_fill')).not.toBeNull();
    fireEvent.click(screen.getByText('Home'));
    expect(onEventClicked).toHaveBeenCalledWith('b', 1);
    expect(container.querySelector('[data-block="NavigationHandler.PreventBackNavigation"]')).not.toBeNull();
  });

  it('title without ActionName has no leading space; Cancel raises Event_Cancel', () => {
    const onEventCancel = vi.fn();
    render(<ContactPopup inContactPopupData={{ ShowPopup: true, Name: 'X' }} onEventCancel={onEventCancel} />);
    expect(screen.getByText('X')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Cancel'));
    expect(onEventCancel).toHaveBeenCalledTimes(1);
  });

  it('IsLoading: two "Loading" skeleton buttons inside a loading skeleton', () => {
    render(<ContactPopup inContactPopupData={{ ShowPopup: true, IsLoading: true }} inContactPopupButtons={[]} />);
    expect(screen.getAllByText('Loading')).toHaveLength(2);
    expect(dialog()?.querySelector('.ubt-skeleton-section')).not.toBeNull();
  });

  it('ShowTimezone: fetching text, then the target time label (NotCaptured)', () => {
    const { rerender } = render(
      <ContactPopup inContactPopupData={{ ShowPopup: true, ShowTimezone: true, IsFetchingTimezone: true }} />,
    );
    expect(screen.getByText('Fetching the user Timezone')).toBeInTheDocument();
    rerender(<ContactPopup inContactPopupData={{ ShowPopup: true, ShowTimezone: true }} />);
    expect(screen.getByText(/GetTargetTimeLabel/)).toBeInTheDocument();
  });

  it('ShowImage: avatar → UBT_LazyImage in ubt-object-fit-avatar-img; otherwise LazyImage', () => {
    const { rerender } = render(
      <ContactPopup
        inContactPopupData={{ ShowPopup: true, ShowImage: true, IsAvatarImage: true, ImageURL: '/img/sample.png' }}
      />,
    );
    expect(dialog()?.querySelector('.ubt-object-fit-avatar-img [data-block="CW_Image.UBT_LazyImage"]')).not.toBeNull();
    rerender(<ContactPopup inContactPopupData={{ ShowPopup: true, ShowImage: true, ImageURL: '/img/sample.png' }} />);
    expect(dialog()?.querySelector('.OSInline [data-block="ConnectPatterns.LazyImage"]')).not.toBeNull();
    expect(dialog()?.querySelector('[data-block="CW_Image.UBT_LazyImage"]')).toBeNull();
  });
});
