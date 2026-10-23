import { act, fireEvent, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { describe, expect, it, vi } from 'vitest';
import { testCapturedVariants } from '@/shared/test/capturedVariants';
import { PinUnlockContent, type PinUnlockContentProps } from './PinUnlockContent';
import * as stories from './PinUnlockContent.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

/* The flows (the PIN check, the error messages, Forgot PIN, the policies) are tested with the container that runs
   them: src/platform/feedback/dialogs/PinUnlockContentContainer.test.tsx. */
const terms = {
  Policy_ContentType: 'application/pdf',
  Policy_FileName: 'terms.pdf',
  Policy_Url: 'https://example.com/t',
};
const privacy = {
  Policy_ContentType: 'application/pdf',
  Policy_FileName: 'p.pdf',
  Policy_Url: 'https://example.com/p',
};

const setup = (props: PinUnlockContentProps) => {
  const { container } = render(
    <MemoryRouter>
      <PinUnlockContent isKeypadVisible {...props} />
    </MemoryRouter>,
  );
  const type = async (pin: string) => {
    for (const digit of pin) {
      const key = [...container.querySelectorAll<HTMLButtonElement>('.ubt-pincode__button')].find(
        (b) => b.textContent === digit,
      );
      if (!key) throw new Error(`no key ${digit}`);
      await act(async () => {
        fireEvent.click(key);
        await new Promise((resolve) => setTimeout(resolve, 0));
      });
    }
  };
  return { container, type };
};

describe('Block_PINUnlock_ContentWrapper', () => {
  testCapturedVariants(stories, captures);

  it('passes the PIN of the 4-digit keypad to SetPin', async () => {
    const onSetPin = vi.fn();
    const { type } = setup({ onSetPin });
    await type('1357');
    expect(onSetPin).toHaveBeenCalledWith('1357');
  });

  it('gives the keypad the PreventBackNavigation block (unless isFromMenu) and the before-SetPin event', async () => {
    const onBeforeSetPin = vi.fn();
    const renderPreventBackNavigation = vi.fn((id: string | undefined) => <span data-prevent={id} />);
    const { container, type } = setup({ id: 'b1-$b4', onBeforeSetPin, renderPreventBackNavigation });
    expect(container.querySelector('[data-prevent="b1-b4-b1-b1-b1-$b1"]')).not.toBeNull();
    await type('1357');
    expect(onBeforeSetPin).toHaveBeenCalledTimes(1);
    renderPreventBackNavigation.mockClear();
    setup({ isFromMenu: true, renderPreventBackNavigation });
    expect(renderPreventBackNavigation).not.toHaveBeenCalled();
  });

  it('Forgot PIN raises its event', () => {
    const onForgotPin = vi.fn();
    const { container } = setup({ showForgotPIN: true, onForgotPin });
    const link = container.querySelector('.border-bottom-s.OSInline a');
    if (!link) throw new Error('no Forgot PIN link');
    fireEvent.click(link);
    expect(onForgotPin).toHaveBeenCalledTimes(1);
  });

  it('ShowPolicy: the skeleton until the policies are fetched, then a link per policy with a URL', () => {
    const renderCacheControlPolicies = vi.fn((id: string | undefined) => <span data-cache={id} />);
    const onClickPolicy = vi.fn();
    const links = (props: PinUnlockContentProps) => [
      ...setup({
        id: 'b1-$b4',
        showPolicy: true,
        renderCacheControlPolicies,
        onClickPolicy,
        ...props,
      }).container.querySelectorAll<HTMLAnchorElement>('[data-block="BasePatterns.Columns_Two"] a'),
    ];
    expect(links({})).toHaveLength(0);
    expect(renderCacheControlPolicies).toHaveBeenCalledWith('b1-b4-$b11');
    const fetched = links({
      isPoliciesFetched: true,
      policies: { PolicyInformation_TermsAndConditions: terms, PolicyInformation_PrivacyPolicy: privacy },
    });
    expect(fetched.map((a) => a.textContent)).toEqual(['Terms & Conditions', 'Our Privacy Policy']);
    fireEvent.click(fetched[0] as HTMLAnchorElement);
    fireEvent.click(fetched[1] as HTMLAnchorElement);
    expect(onClickPolicy.mock.calls).toEqual([[terms], [privacy]]);
    const onlyTerms = links({
      isPoliciesFetched: true,
      policies: {
        PolicyInformation_TermsAndConditions: terms,
        PolicyInformation_PrivacyPolicy: { ...privacy, Policy_Url: '' },
      },
    });
    expect(onlyTerms.map((a) => a.textContent)).toEqual(['Terms & Conditions']);
  });

  it('ShowNeedHelp: "Need help? Contact Us" instead of the policies; the plain logo without overlay', () => {
    const renderCacheControlPolicies = vi.fn(() => null);
    const { container } = setup({
      showNeedHelp: true,
      showPolicy: true,
      useOverlay: false,
      renderCacheControlPolicies,
    });
    const help = container.querySelector('.ubt-custom-container.text-neutral-10');
    expect(help?.textContent).toBe('Need help? Contact Us');
    expect(help?.querySelector('a')).toHaveAttribute('href', '/UBTConnect/ContactUsMenu');
    expect(container.querySelector('[data-block="ConnectPatterns.SkeletonSection"]')).toBeNull();
    expect(renderCacheControlPolicies).not.toHaveBeenCalled();
    expect(container.querySelector('.ubt-pincode')).toHaveClass('connect-pin-screen');
    expect(container.querySelector('.ubt-pincode')).not.toHaveClass('ubt-pin-overlay');
    expect(container.querySelector('img')?.getAttribute('src')).toMatch(/UBTConnect\.ConnectLogo\.svg$/);
  });
});
