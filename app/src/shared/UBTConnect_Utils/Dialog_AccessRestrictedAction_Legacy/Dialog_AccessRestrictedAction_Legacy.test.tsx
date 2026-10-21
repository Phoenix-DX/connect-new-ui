import { act, render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { confirmAction } from '../../../shell/dialogs';
import { testCapturedVariants } from '../../test/capturedVariants';
import { Dialog_AccessRestrictedAction_Legacy } from './Dialog_AccessRestrictedAction_Legacy';
import * as stories from './Dialog_AccessRestrictedAction_Legacy.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('Dialog_AccessRestrictedAction_Legacy', () => {
  testCapturedVariants(stories, captures);

  it('the nested dialog gets the legacy class and ids as captured (BookmarksByGroup default dom:484-495)', () => {
    const { container } = render(<Dialog_AccessRestrictedAction_Legacy id="b1-FreeSubscriptionAlert" scope="b1-b20" />);
    const inner = container.querySelector('#b1-b20-\\$b1');
    expect(inner?.firstElementChild?.className).toBe(
      'subscription-pop-up connect-dialog-popup connect-dialog-popup--access-restricted connect-legacy-compatibily-containter',
    );
    expect(inner?.querySelector('#b1-b20-b1-PopUp #b1-b20-b1-b1-EventHub')).not.toBeNull();
  });

  it('ConfirmAction on the instance id (ScreenBlock_BookmarkGroup.mvc.js:3489) opens the dialog', () => {
    render(<Dialog_AccessRestrictedAction_Legacy id="b1-FreeSubscriptionAlert" scope="b1-b20" />);
    act(() => {
      void confirmAction('b1-FreeSubscriptionAlert');
    });
    expect(document.body.querySelector('.portal-class')?.className).toBe(
      'portal-class subscription-pop-up connect-dialog-popup connect-dialog-popup--access-restricted connect-legacy-compatibily-containter',
    );
  });
});
