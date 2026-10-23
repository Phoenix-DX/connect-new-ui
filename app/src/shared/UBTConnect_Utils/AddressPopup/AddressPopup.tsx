// @os-block UBTConnect_Utils.CW_CTA_PopUps.AddressPopup
import { useMemo } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { ContactPopup } from '@/components/contact/ContactPopup';
import { UBT_ImageSize, UBT_Icons } from '@/shared/UBTConnect_Utils/lib/staticEntities';
import type { ContactPopupButton, ContactPopupData } from './types';

export interface AddressPopupProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** In_ContactPopupData (the ContactPopup data). */
  inContactPopupData?: ContactPopupData;
  /** ShowGoogleMaps: adds the "Open in Google Maps" button. */
  showGoogleMaps?: boolean;
  /** In_ImageSizeId: UBT_ImageSize identifier (default ExtraLarge_100). */
  inImageSizeId?: string;
  /** Event Event_OpenInGoogleMaps. */
  onEventOpenInGoogleMaps?: () => void;
  /** Event Event_OpenInMaps. */
  onEventOpenInMaps?: () => void;
  /** Event Event_CopyAddress. */
  onEventCopyAddress?: () => void;
  /** Event Event_Cancel. */
  onEventCancel?: () => void;
}

/** Model variables GoogleMapsId / MapsId / CopyId (AddressPopup.mvc.js model :16-23). */
const GOOGLE_MAPS_ID = 'Google';
const MAPS_ID = 'Maps';
const COPY_ID = 'Copy';

/** Address popup (UBTConnect_Utils.CW_CTA_PopUps.AddressPopup.mvc.js, HouseholdCarousel copy): ContactPopup with the
    buttons of Action_SetAddressPopupButtons (run on initialize and on every parameter change): "Open in Google Maps"
    when ShowGoogleMaps, "Open in Maps" (open_new) and "Copy Address" (content_copy). OnClick_Button raises the event of
    the clicked Id. */
export function AddressPopup({
  id,
  inContactPopupData = {},
  showGoogleMaps = false,
  inImageSizeId = UBT_ImageSize.ExtraLarge_100,
  onEventOpenInGoogleMaps,
  onEventOpenInMaps,
  onEventCopyAddress,
  onEventCancel,
}: AddressPopupProps) {
  const buttons = useMemo(() => {
    const list: ContactPopupButton[] = [];
    if (showGoogleMaps) list.push({ Id: GOOGLE_MAPS_ID, UBT_IconId: UBT_Icons.OpenNew, Label: 'Open in Google Maps' });
    list.push(
      { Id: MAPS_ID, UBT_IconId: UBT_Icons.OpenNew, Label: 'Open in Maps' },
      { Id: COPY_ID, UBT_IconId: UBT_Icons.ContentCopy, Label: 'Copy Address' },
    );
    return list;
  }, [showGoogleMaps]);
  const onClickButton = (identifier: string) => {
    if (identifier === GOOGLE_MAPS_ID) onEventOpenInGoogleMaps?.();
    else if (identifier === MAPS_ID) onEventOpenInMaps?.();
    else if (identifier === COPY_ID) onEventCopyAddress?.();
  };
  return (
    <OSBlock name="CW_CTA_PopUps.AddressPopup" id={id}>
      <ContactPopup
        inContactPopupButtons={buttons}
        inContactPopupData={inContactPopupData}
        inImageSizeId={inImageSizeId}
        onEventClicked={onClickButton}
        onEventCancel={onEventCancel}
      />
    </OSBlock>
  );
}
