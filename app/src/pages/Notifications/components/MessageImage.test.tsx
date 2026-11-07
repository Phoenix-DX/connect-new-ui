import { render, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import { UBT_AvatarSize } from '@/lib/ubtConnectLibrary/staticEntities';
import { freshPage } from '@/test/testSupport';
import { MessageImage } from './MessageImage';

/* MyNotifications.MessageImage with the MSW mocks of the test setup (UBTConnect_Utils ActionGetSignedImagesInBulk
   answers the placeholder photo for a Member). */
const bulkCalls = () => (window.__osCalls ?? []).filter((call) => call.action === 'ActionGetSignedImagesInBulk').length;

beforeEach(() => {
  freshPage();
});

describe('MessageImage (live TST 2026-11-07)', () => {
  it('no icon and a user: fetching image, one bulk signed-image call, then MyNotifications.AvatarImage', async () => {
    const { container } = render(
      <MessageImage id="r-$b6" iconURL="" userId={900120} memberId="900120" inSizeId={UBT_AvatarSize.Base_52} />,
    );
    expect(container.querySelector('#r-b6-Message_List_Item_Image_Fetching')).not.toBeNull();
    await waitFor(() => {
      expect(container.querySelector('[data-block="MyNotifications.AvatarImage"]')).not.toBeNull();
    });
    expect(bulkCalls()).toBe(1);
    const avatar = container.querySelector('[data-block="MyNotifications.AvatarImage"] .ubt-custom-container');
    expect(avatar?.className).toContain('ubt-avatar-image inline-block ubt-avatar-image-base');
    expect(avatar?.className).toContain('border-radius-circle');
    expect(avatar?.querySelector('img')?.getAttribute('src')).not.toBe('');
  });

  it('the null user (the skeleton rows): no call, the avatar container with User_rectangle', () => {
    const { container } = render(
      <MessageImage id="r-$b6" iconURL="" userId={0} memberId="" inSizeId={UBT_AvatarSize.Base_52} />,
    );
    const image = container.querySelector('#r-b6-Message_List_Item_Image');
    expect(image?.getAttribute('src')).toContain('Connect2_LegacyShared.User_rectangle.png');
    expect(image?.className).toBe('notification-list-icon-badge');
    expect(
      container.querySelector('[data-block="BasePatterns.CustomContainer"] .ubt-skeleton-section__element'),
    ).not.toBeNull();
    expect(bulkCalls()).toBe(0);
  });
});
