/** @origin UBTConnect_Utils.CW_CTA_PopUps.AddressPopup_Wrapper */
// @os-block UBTConnect_Utils.CW_CTA_PopUps.AddressPopup_Wrapper
import { useRef, useState } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { appManager_GetIsNative } from '@/platform/device/deviceContext';
import { raiseToFlowHandler } from '@/legacy/os/exceptions';
import { PLATFORM_MESSAGE_TYPE, showFeedbackMessage } from '@/platform/feedback';
import { CustomText } from '@/components/ui/CustomText';
import { changeWindowLocation, jSUtils_CopyToClipboard } from '@/shared/UBTJavaScriptUtils/lib/actions';
import { AddressPopup } from '@/components/contact/AddressPopup';
import { cleanAddressForMaps } from '@/shared/UBTConnect_Utils/lib/actions';
import {
  UBT_Color,
  UBT_FontSize,
  UBT_FontWeight,
  UBT_IconSize,
  UBT_Icons,
  UBT_Size,
} from '@/shared/UBTConnect_Utils/lib/staticEntities';
import type { Directory_Coordinates } from './types';

export interface AddressPopupWrapperProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** In_Address: the address text (underlined link). */
  inAddress?: string;
  /** IsEnabled: primary colour, else Neutral7 (default true). */
  isEnabled?: boolean;
  /** IconVisible: the location icon before a non-blank address (default true). */
  iconVisible?: boolean;
  /** In_Coordinates: used for the maps link when UseCoordinates and both values are non-zero. */
  inCoordinates?: Directory_Coordinates;
}

/** Address link with its popup (UBTConnect_Utils.CW_CTA_PopUps.AddressPopup_Wrapper.mvc.js, HouseholdCarousel copy):
    CustomText of In_Address (icon location_on_fill 16 / xs spacing when IconVisible and the trimmed address is not
    empty; colour primary or Neutral7; font size FontSize = Small, regular, underlined) whose click (OnClick_Address)
    toggles the AddressPopup ("Open Location", ShowGoogleMaps = IsMapsAvailable, False: OnReady takes its If(True) branch
    and never checks the maps app). */
export function AddressPopupWrapper({
  id,
  inAddress = '',
  isEnabled = true,
  iconVisible = true,
  inCoordinates = {},
}: AddressPopupWrapperProps) {
  const [isLocationPopupOpen, setIsLocationPopupOpen] = useState(false);
  const [isMapsAvailable] = useState(false);
  const isUsingText = useRef(false);
  const fontSize = UBT_FontSize.Small;
  const color = isEnabled ? UBT_Color.Primary : UBT_Color.Neutral7;
  const toggleLocationPopup = () => {
    setIsLocationPopupOpen((open) => !open);
  };
  /** OnClick_Address: "Has Coordinates" = DecimalToText(Longitude) <> "" and DecimalToText(Latitude) <> "", always
      True (a Decimal is never empty text), then ToggleLocationPopup. */
  const onClickAddress = () => {
    if ((inCoordinates.Longitude ?? '0') !== '' && (inCoordinates.Latitude ?? '0') !== '') toggleLocationPopup();
  };
  /** Handler_OpenInMapsOrGoogleMaps(CleanAddress, isGoogleMaps) (controller :540-610). */
  const openInMapsOrGoogleMaps = (isGoogleMaps: boolean) => {
    if (inAddress === '') {
      showFeedbackMessage('Map is not available', PLATFORM_MESSAGE_TYPE.info);
      toggleLocationPopup();
      return;
    }
    const cleanAddress = cleanAddressForMaps(inAddress);
    let mapsAddress: string;
    const latitude = inCoordinates.Latitude ?? '0';
    const longitude = inCoordinates.Longitude ?? '0';
    if ((inCoordinates.UseCoordinates ?? false) && Number(longitude) !== 0 && Number(latitude) !== 0) {
      mapsAddress = `${latitude},${longitude}`;
    } else {
      mapsAddress = encodeURIComponent(cleanAddress);
      isUsingText.current = true;
    }
    if (appManager_GetIsNative()) {
      mapsAddress = `geo:${isUsingText.current ? '?q=' : ''}${mapsAddress}`;
      // IsMapsAvailable and isGoogleMaps → LaunchWithData (Cordova app launcher): IsMapsAvailable is always False here.
      if (!(isMapsAvailable && isGoogleMaps)) changeWindowLocation(mapsAddress);
    } else {
      changeWindowLocation(`https://maps.google.com/maps?q=${mapsAddress}`);
    }
  };
  return (
    <OSBlock name="CW_CTA_PopUps.AddressPopup_Wrapper" id={id}>
      <CustomText
        inlineIcon={{
          IconId: iconVisible && inAddress.trim() !== '' ? UBT_Icons.LocationOnFill : '',
          IconSizeId: UBT_IconSize.NonStandard_16,
          SpacingSize: UBT_Size.ExtraSmall,
          IconColorId: color,
        }}
        inText={inAddress}
        inTextOptions={{ Color: color, FontSize: fontSize, FontWeight: UBT_FontWeight.Regular, IsUnderlined: true }}
        onClicked={onClickAddress}
      />
      <AddressPopup
        inContactPopupData={{
          ActionName: 'Open Location',
          Name: '',
          Locality: '',
          TimezoneName: '',
          TimezoneOffset: 0,
          ShowPopup: isLocationPopupOpen,
          ShowTimezone: false,
          ShowImage: false,
        }}
        showGoogleMaps={isMapsAvailable}
        onEventOpenInGoogleMaps={() => {
          openInMapsOrGoogleMaps(true);
        }}
        onEventOpenInMaps={() => {
          openInMapsOrGoogleMaps(false);
        }}
        onEventCopyAddress={() => {
          // Handler_CopyAddress (controller :415-447): JSUtils_CopyToClipboard(In_Address), then ToggleLocationPopup;
          // no handler, so a failed copy goes to the flow's error handler.
          jSUtils_CopyToClipboard(inAddress).then(toggleLocationPopup, raiseToFlowHandler);
        }}
        onEventCancel={toggleLocationPopup}
      />
    </OSBlock>
  );
}
