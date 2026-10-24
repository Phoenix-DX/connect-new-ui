import { act, render } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import { resetBackQueue } from '@/platform/navigation/backQueue';
import { getClientVar } from '@/platform/session/session';
import { testCapturedVariants } from '@/shared/test/capturedVariants';
import { freshPage } from '@/test/testSupport';
import { confirmAction } from './confirmAction';
import { DialogAccessRestrictedActionLegacy } from './DialogAccessRestrictedActionLegacy';
import * as stories from './DialogAccessRestrictedActionLegacy.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

beforeEach(() => {
  freshPage();
  resetBackQueue();
});

describe('Dialog_AccessRestrictedAction_Legacy', () => {
  testCapturedVariants(stories, captures);

  it('the nested dialog gets the legacy class and ids as captured (BookmarksByGroup default dom:484-495)', () => {
    const { container } = render(<DialogAccessRestrictedActionLegacy id="b1-FreeSubscriptionAlert" scope="b1-b20" />);
    const inner = container.querySelector('#b1-b20-\\$b1');
    expect(inner?.firstElementChild?.className).toBe(
      'subscription-pop-up connect-dialog-popup connect-dialog-popup--access-restricted connect-legacy-compatibily-containter',
    );
    expect(inner?.querySelector('#b1-b20-b1-PopUp #b1-b20-b1-b1-EventHub')).not.toBeNull();
    expect(getClientVar('UBTConnect_Utils.App_SubscriptionPopUp')).toBe('b1-b20-b1-PopUp');
  });

  it('ConfirmAction on the instance id (ScreenBlock_BookmarkGroup.mvc.js:3489) opens the dialog', () => {
    render(<DialogAccessRestrictedActionLegacy id="b1-FreeSubscriptionAlert" scope="b1-b20" />);
    act(() => {
      void confirmAction('b1-FreeSubscriptionAlert');
    });
    expect(document.body.querySelector('.portal-class')?.className).toBe(
      'portal-class subscription-pop-up connect-dialog-popup connect-dialog-popup--access-restricted connect-legacy-compatibily-containter',
    );
  });

  it('the scope defaults to the id without `$`', () => {
    const { container } = render(<DialogAccessRestrictedActionLegacy id="$b7" />);
    expect(container.firstElementChild?.id).toBe('$b7');
    expect(container.querySelector('#b7-\\$b1')).not.toBeNull();
  });
});
