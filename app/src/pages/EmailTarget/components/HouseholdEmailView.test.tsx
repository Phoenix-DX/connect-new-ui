import { act, fireEvent, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { ValidationService, ValidationServiceProvider } from '@/components/ui/os/OSValidation';
import { renderRoutes, resetNavigation } from '@/platform/navigation/testRouter';
import { freshPage } from '@/test/testSupport';
import { HouseholdEmailView, type HouseholdEmailViewProps } from './HouseholdEmailView';

/* The view from props, on a memory router (the back MenuIcon and the NavigationConfirmationDialog need one). */
const PATH = '/UBTConnect/EmailTarget';

function renderView(props: Partial<HouseholdEmailViewProps> = {}) {
  const handlers = {
    onSubjectChange: vi.fn(),
    onMessageChange: vi.fn(),
    onSubmit: vi.fn(),
    onNavigation: vi.fn(),
  };
  const view = renderRoutes(
    {
      '/UBTConnect/HomeFeed': <p>HomeFeed screen</p>,
      [PATH]: (
        <ValidationServiceProvider service={new ValidationService()}>
          <HouseholdEmailView
            id="$b1"
            inHouseholdFullName="Mara Lindqvist"
            title="School"
            subject="Supper meeting"
            message="See you on Sunday."
            isSending={false}
            bottomBar={<p>bottom bar</p>}
            {...handlers}
            {...props}
          />
        </ValidationServiceProvider>
      ),
    },
    PATH,
  );
  return { ...view, handlers };
}

beforeEach(() => {
  freshPage();
  resetNavigation();
});

describe('HouseholdEmailView', () => {
  it('renders the block with the title, the recipient, the two fields with their counters and the button', () => {
    const { container } = renderView();
    const block = container.querySelector('[data-block="Email.ScreenBlock_Household_Email"]');
    expect(block?.id).toBe('$b1');
    expect(block?.querySelector('.header-title')?.textContent).toBe('Contact School');
    expect(screen.getByText('To: Mara Lindqvist')).toBeInTheDocument();
    expect((document.getElementById('b1-Email_Subject') as HTMLInputElement).value).toBe('Supper meeting');
    expect((document.getElementById('b1-TextArea_Message') as HTMLTextAreaElement).value).toBe('See you on Sunday.');
    expect(document.getElementById('b1-Email_Form')?.tagName).toBe('FORM');
    expect(document.getElementById('b1-$b3')).not.toBeNull();
    expect(document.getElementById('b1-$b4')).not.toBeNull();
    expect(document.getElementById('b1-$b5')?.firstElementChild?.className).not.toContain('is--loading');
    expect(document.getElementById('b1-BottomBar')?.textContent).toBe('bottom bar');
    expect(document.getElementById('b1-Menu')?.textContent).toBe('');
    expect(document.getElementById('b1-CommonUI_Elements')?.textContent).toBe('');
  });

  it('shows the spinner state while sending', () => {
    renderView({ isSending: true });
    expect(document.getElementById('b1-$b5')?.firstElementChild?.className).toContain('is--loading');
  });

  it('raises the change, the submit and the navigation callbacks', async () => {
    const { handlers } = renderView();
    fireEvent.change(document.getElementById('b1-Email_Subject') as HTMLInputElement, { target: { value: 'New' } });
    fireEvent.change(document.getElementById('b1-TextArea_Message') as HTMLTextAreaElement, {
      target: { value: 'Text' },
    });
    fireEvent.click(screen.getByRole('button', { name: 'send email' }));
    expect(handlers.onSubjectChange).toHaveBeenCalledWith('New');
    expect(handlers.onMessageChange).toHaveBeenCalledWith('Text');
    expect(handlers.onSubmit).toHaveBeenCalledTimes(1);
    await act(async () => {
      document.getElementById('b1-$b2')?.querySelector<HTMLElement>('.menu-back')?.click();
      await new Promise((resolve) => setTimeout(resolve, 50));
    });
    expect(handlers.onNavigation).toHaveBeenCalledTimes(1);
  });
});
