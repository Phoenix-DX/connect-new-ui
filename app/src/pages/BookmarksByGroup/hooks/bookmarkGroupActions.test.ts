import { afterEach, describe, expect, it } from 'vitest';
import { getFeedbackMessage, resetFeedbackMessages } from '@/platform/feedback/feedbackStore';
import { addLogSink, type LogEntry } from '@/platform/log/log';
import { APPLICATION_EVENT_SUBSCRIPTION_REQUIRED } from '@/pages/BookmarksByGroup/staticEntities';
import {
  auditBookmarkSubscriptionEvent,
  sendBookmarkedFeedbackMessage,
  sendBookmarkedHiddenFeedbackMessage,
} from './bookmarkGroupActions';

/* The client actions that the bookmark group flows call. The cache record mappers are tested with the MyBookmarks cache
   in lib/legacyShared/actions.test.ts. */
afterEach(() => {
  resetFeedbackMessages();
});

describe('bookmarkGroupActions', () => {
  it('SendBookmarkedFeedbackMessage: added or removed, a success message', () => {
    sendBookmarkedFeedbackMessage(true);
    expect(getFeedbackMessage()).toMatchObject({ message: 'Added to your Bookmarks', type: 1 });
    sendBookmarkedFeedbackMessage(false);
    expect(getFeedbackMessage()).toMatchObject({ message: 'Removed from your Bookmarks', type: 1 });
  });

  it('SendBookmarkedHiddenFeedbackMessage names the kind of record in an info message', () => {
    const message = (objectType: string) => {
      sendBookmarkedHiddenFeedbackMessage(objectType);
      return getFeedbackMessage();
    };
    expect(message('Contact')).toMatchObject({ message: 'This household is no longer available.', type: 0 });
    expect(message('Locality')?.message).toBe('This locality is no longer available.');
    expect(message('Subdivision')?.message).toBe('This Supper Meeting is no longer available.');
    expect(message('Campus&Co')?.message).toBe('This entity is no longer available.');
    expect(message('OneSchool Global')?.message).toBe('This entity is no longer available.');
    expect(message('News')?.message).toBe('This is no longer available.');
  });

  it('AuditBookmarkSubscriptionEvent logs the SubscriptionRequired application event', () => {
    const entries: LogEntry[] = [];
    const remove = addLogSink((entry) => entries.push(entry));
    auditBookmarkSubscriptionEvent('296', '0', '', '0');
    remove();
    expect(entries).toEqual([
      expect.objectContaining({
        level: 'info',
        message: 'ApplicationEvent',
        data: { EventId: APPLICATION_EVENT_SUBSCRIPTION_REQUIRED, HasAttachment: true },
      }),
    ]);
  });
});
