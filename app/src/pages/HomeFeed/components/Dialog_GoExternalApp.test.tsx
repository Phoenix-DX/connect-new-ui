import { act, fireEvent, render, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { confirmAction } from '@/platform/feedback/dialogs';
import { Dialog_GoExternalApp } from './Dialog_GoExternalApp';

/* The view of Dialog_GoExternalApp from props: the closed markup, OnPopUpReady and the confirm callback. */
const TROVE = { appName: 'Trove', packageName: 'org.example.trove', iconId: 'connect-icon-trove' };

describe('Dialog_GoExternalApp', () => {
  it('raises OnPopUpReady with the id of its popup and renders the closed dialog', () => {
    const onOnPopUpReady = vi.fn();
    const { container } = render(
      <Dialog_GoExternalApp id="b5-$b12" externalAppPopUpInfo={TROVE} onOnPopUpReady={onOnPopUpReady} />,
    );
    expect(onOnPopUpReady).toHaveBeenCalledWith('b5-b12-PopUp');
    const root = container.querySelector('[data-block="CW_App_Common_Blocks_PopupDialogs.Dialog_GoExternalApp"]');
    expect(root?.id).toBe('b5-$b12');
    expect(root?.firstElementChild?.className).toBe(
      'subscription-pop-up connect-dialog-popup connect-dialog-popup--access-restricted',
    );
  });

  it('opened by ConfirmAction, it shows the app and its confirm raises GoToExternalApp', async () => {
    const onGoToExternalApp = vi.fn();
    render(<Dialog_GoExternalApp id="b5-$b12" externalAppPopUpInfo={TROVE} onGoToExternalApp={onGoToExternalApp} />);
    let answer: Promise<boolean> = Promise.resolve(false);
    act(() => {
      answer = confirmAction('b5-b12-PopUp');
    });
    await waitFor(() => {
      expect(document.body.textContent).toContain('Move to Trove');
    });
    expect(document.body.textContent).toContain('Continue to Trove');
    const confirm = [...document.querySelectorAll('button')].find((b) => b.textContent.includes('Continue to Trove'));
    fireEvent.click(confirm as Element);
    await expect(answer).resolves.toBe(true);
    expect(onGoToExternalApp).toHaveBeenCalledOnce();
  });

  it('open, the icon is in a text-align center container and the confirm label in a flex row CustomContainer (mvc.js:276-281, 438-450)', async () => {
    render(<Dialog_GoExternalApp id="b5-$b12" externalAppPopUpInfo={TROVE} />);
    act(() => {
      void confirmAction('b5-b12-PopUp');
    });
    await waitFor(() => {
      expect(document.body.textContent).toContain('Move to Trove');
    });
    let centred = document.querySelector('.connect-icon-trove')?.parentElement ?? null;
    while (centred && centred.style.textAlign !== 'center') centred = centred.parentElement;
    expect(centred?.getAttribute('data-container')).toBe('');
    const label = [...document.querySelectorAll('button')].find((b) => b.textContent.includes('Continue to Trove'));
    const row = label?.querySelector('.display-flex') as HTMLElement;
    expect(row.className).toContain('align-items-center');
    expect(row.className).toContain('justify-content-center');
    expect(row.className).toContain('flex-direction-row');
    expect(row.textContent).toContain('Continue to Trove');
    expect(row.querySelector('.margin-left-s .connect-icon-open_new')).not.toBeNull();
  });
});
