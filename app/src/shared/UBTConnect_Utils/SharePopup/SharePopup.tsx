// @os-block UBTConnect_Utils.CW_CTA_PopUps.SharePopup
import { useEffect, useRef, useState } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { ContactPopup } from '@/shared/UBTConnect_Utils/ContactPopup';
import { getHasExtendedShare, showComingSoonMessage } from '@/shared/UBTConnect_Utils/lib/actions';
import { Connect_Entity, UBT_Icons, UBT_ImageSize } from '@/shared/UBTConnect_Utils/lib/staticEntities';
import type { ContactPopupButton, ContactPopupData } from './types';

export interface SharePopupProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** In_ContactPopupData, passed to ContactPopup (ShowPopup opens it). */
  inContactPopupData?: ContactPopupData;
  /** In_ImageSizeId: UBT_ImageSize identifier (default ExtraLarge_100). */
  inImageSizeId?: string;
  /** Event Event_ShareToConnect: the first button. */
  onEventShareToConnect?: () => void;
  /** Event Event_ShareToOthers: any other button. */
  onEventShareToOthers?: () => void;
  /** Event Event_Cancel. */
  onEventCancel?: () => void;
}

/** AppManager_GetIsNative (UBT_AppManager): the clone runs in the browser, where the original is not native
    (shell deviceContext: isNativeDevice False). */
const appManager_GetIsNative = (): boolean => false;

/** Action_SetSharePopupButtons (SharePopup.mvc.js:245-312), run by OnInitialize when the list is empty (:418-440):
    "Share to Connect", then "Share to other apps" on a native device only. */
function action_SetSharePopupButtons(): ContactPopupButton[] {
  const buttons: ContactPopupButton[] = [{ Id: '1', UBT_IconId: UBT_Icons.Share, Label: 'Share to Connect' }];
  if (appManager_GetIsNative()) buttons.push({ Id: '2', UBT_IconId: UBT_Icons.Share, Label: 'Share to other apps' });
  return buttons;
}

/** Entity types the share popup supports when GetHasExtendedShare is off (:390). */
const SHAREABLE: readonly string[] = [
  Connect_Entity.Member,
  Connect_Entity.OneSchoolGlobal,
  Connect_Entity.Household,
  Connect_Entity.FeedItem,
];

export function SharePopup({
  id,
  inContactPopupData = {},
  inImageSizeId = UBT_ImageSize.ExtraLarge_100,
  onEventShareToConnect,
  onEventShareToOthers,
  onEventCancel,
}: SharePopupProps) {
  const [sharePopupButtons] = useState(action_SetSharePopupButtons);
  const events = useRef({ onEventCancel });
  useEffect(() => {
    events.current = { onEventCancel };
  });

  /* OnParametersChanged (:366-416), not on the first render: without the extended share, an open popup for another
     entity type shows the coming-soon message and raises Event_Cancel. */
  const parametersKey = JSON.stringify([inContactPopupData, inImageSizeId]);
  const lastKey = useRef(parametersKey);
  useEffect(() => {
    if (lastKey.current === parametersKey) return;
    lastKey.current = parametersKey;
    if (getHasExtendedShare()) return;
    const data = JSON.parse(parametersKey) as [ContactPopupData, string];
    if ((data[0].ShowPopup ?? false) && !SHAREABLE.includes(data[0].EntityTypeId ?? '')) {
      showComingSoonMessage();
      events.current.onEventCancel?.();
    }
  }, [parametersKey]);

  // OnClick_CallButton (:314-356): row 0 → Event_ShareToConnect, otherwise Event_ShareToOthers.
  const onClickCallButton = (_eventId: string, eventRowNumber: number) => {
    if (eventRowNumber === 0) onEventShareToConnect?.();
    else onEventShareToOthers?.();
  };

  return (
    <OSBlock name="CW_CTA_PopUps.SharePopup" id={id}>
      <ContactPopup
        inContactPopupButtons={sharePopupButtons}
        inImageSizeId={inImageSizeId}
        inContactPopupData={inContactPopupData}
        onEventCancel={onEventCancel}
        onEventClicked={onClickCallButton}
      />
    </OSBlock>
  );
}
