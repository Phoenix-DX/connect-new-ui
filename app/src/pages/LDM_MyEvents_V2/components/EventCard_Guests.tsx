import { useState } from 'react';
import type { CalendarGuestItem } from '@/api/event';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSList } from '@/components/ui/os/OSList';
import { osImage } from '@/lib/os-assets';
import { PersonContactOptions } from '@/components/contact/PersonContactOptions';
import { ResultItemImage } from '@/components/ui/ResultItemImage';
import type { ContactByPhonePopupData, UI_ContactByMessage_WrapperData } from '@/lib/ubtConnectUtils/structures';
import { OverlappingImages } from './OverlappingImages';
import { flipHouseholdName } from '@/lib/legacyShared/actions';
import { getLocalityName } from '@/lib/orbit/actions';
import { PLATFORM_MESSAGE_TYPE, showFeedbackMessage } from '@/platform/feedback';
import { buildGuestString, validateBottomBorderOnListItem } from './actions';

export interface EventCard_GuestsProps {
  id?: string;
  /** Instance scope of the block's widgets. */
  scope: string;
  /** In_GuestCount (Text). */
  inGuestCount: string;
  /** In_Guests. */
  inGuests: readonly CalendarGuestItem[];
  /** In_IsExpandable. */
  inIsExpandable: boolean;
  /** In_RightToLeft. */
  inRightToLeft?: boolean;
  /** Event HouseholdClicked(HouseholdId, HouseholdName, CurrentRowNumber, Length, RecordDisabled, IsHouseholdDisplayed). */
  onHouseholdClicked: (
    householdId: string,
    householdName: string,
    currentRowNumber: number,
    recordDisabled: boolean,
    isHouseholdDisplayed: boolean,
  ) => void;
  /** Event OnClick_PhoneCall(Event_PhoneCallInfo). */
  onClickPhoneCall: (info: ContactByPhonePopupData) => void;
  /** Event OnClick_Message(Event_ContactPopupData, Event_CountryName). */
  onClickMessage: (data: UI_ContactByMessage_WrapperData, countryName: string) => void;
}

/** Guests line of an LDM card (analysis/sources/pretty/Connect2_OrbitMobile_MUI.LDM_Blocks.EventCard_Guests.mvc.js =
    EG). OnInitialize (EG :640-650): Guests = In_Guests. View (EG :179-330), visible when In_IsExpandable: the people
    icon and BuildGuestString(In_GuestCount) (both only when In_GuestCount <> ""), then the photos (OverlappingImages of
    the guests' SignedImagePath, 40 % overlap, diameter max(30px, 7vw), at most 5, remaining count shown) with
    angle-down / angle-up when Guests is not empty; a click toggles IsExpanded (ToggleGuestList, EG :633-640, only when
    In_IsExpandable). Expanded (Q2, not captured: built from the compiled view): List_Guests of Result_Item_Image rows
    (round photo, HouseholderName bold, "LocalityName, CountryCode", Person_Contact_Options with Email and
    MobilePhone + WorkPhone + HomePhone, and angle-right hidden when HouseholdDisplay is False).
    OnHandle_HouseholdClicked (EG :700-760) triggers HouseholdClicked; its CarouselFilteredEventResults only lowers the
    row number, which the screen does not use for navigation (LDM_MyEvents_V2 Handler_NavigateTo_HouseholdCarousel).
    Call: OnClick_PhoneCall with the guest's contact data (EG :585-630). Email: OnClick_Message with the guest's
    email and the flipped household name (EG :764-800); offline (GetNetworkStatus) the Info message "Please check
    your network connection and try again" (EG :867).
    @origin Connect2_OrbitMobile_MUI.LDM_Blocks.EventCard_Guests */
export function EventCard_Guests({
  id,
  scope,
  inGuestCount,
  inGuests,
  inIsExpandable,
  inRightToLeft = false,
  onHouseholdClicked,
  onClickPhoneCall,
  onClickMessage,
}: EventCard_GuestsProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const guests = inGuests;

  const toggleGuestList = () => {
    if (inIsExpandable) setIsExpanded((v) => !v);
  };

  const callClicked = (g: CalendarGuestItem) => {
    onClickPhoneCall({
      ContactPopupData: {
        ImageURL: g.SignedImagePath,
        Name: flipHouseholdName(g.HouseholderName),
        Locality: g.LocalityName,
        TimezoneName: g.TimeZone.Abbreviation,
        TimezoneOffset: Number(g.TimeZone.OffsetSeconds),
        ShowPopup: true,
        CountryName: g.CountryName,
      },
      MobilePhone: g.MobilePhone,
      HomePhone: g.HomePhone,
      WorkPhone: g.WorkPhone,
    });
  };

  const emailClicked = (g: CalendarGuestItem) => {
    // GetNetworkStatus: IsOnline? else Network (EG :867).
    if (!navigator.onLine) {
      showFeedbackMessage('Please check your network connection and try again', PLATFORM_MESSAGE_TYPE.info);
      return;
    }
    onClickMessage(
      {
        Email: g.Email,
        Phone: g.MobilePhone,
        ContactPopupData: {
          ImageURL: g.SignedImagePath,
          Name: flipHouseholdName(g.HouseholderName),
          Locality: getLocalityName(g.LocalityName),
          TimezoneName: g.TimeZone.Abbreviation,
          TimezoneOffset: Number(g.TimeZone.OffsetSeconds),
          ShowPopup: true,
          CountryName: g.CountryName,
        },
      },
      g.CountryName,
    );
  };

  return (
    <OSBlock name="LDM_Blocks.EventCard_Guests" id={id}>
      {inIsExpandable ? (
        <div data-container="">
          <div
            className="full-width inline-flex-center-vertical flex-direction-row flex-space-between"
            data-container=""
          >
            <div className="inline-flex-center-vertical flex-direction-row" data-container="">
              {inGuestCount !== '' ? (
                <div data-container="">
                  <img data-image="" src={osImage('img/Connect2_OrbitMobile_MUI.event_people_24px.svg')} />
                </div>
              ) : null}
              {inGuestCount !== '' ? (
                <div className="text-no-wrap margin-left-s" data-container="">
                  <span data-expression="">{buildGuestString(inGuestCount)}</span>
                </div>
              ) : null}
            </div>
            <div
              className={`flex-center-all${inRightToLeft ? '' : ' text-align-right'}`}
              data-container=""
              style={{ cursor: 'pointer' }}
              onClick={toggleGuestList}
            >
              <OverlappingImages
                id={`${scope}-$b1`}
                scope={`${scope}-b1`}
                inShowRemainingCount
                inIsRTL={inRightToLeft}
                inOverlapPercent={40}
                inImageURLs={guests.map((g) => g.SignedImagePath)}
                inDiameter="max(30px, 7vw)"
                inMaxDisplayImage={5}
              />
              {guests.length > 0 ? (
                <i className={`icon padding5 fa fa-angle-${isExpanded ? 'up' : 'down'} fa-2x`} data-icon="" />
              ) : null}
            </div>
          </div>
          {isExpanded ? (
            <div data-container="">
              <OSList
                id={`${scope}-List_Guests`}
                className="list list-group"
                animateItems
                disableVirtualization
                source={guests}
                keyOf={(g) => g.EventGuestId}
              >
                {(g, row) => (
                  <ResultItemImage
                    id={`${scope}-List_Item_Guest`}
                    inHasBorder={validateBottomBorderOnListItem(row, guests.length)}
                    inShowTag={false}
                    inShowDescription
                    inIsRoundImage
                    inHasAction
                    inHasPadding
                    inSignedURL={g.SignedImagePath}
                    onOnClickItem={() => {
                      onHouseholdClicked(g.HouseholderId, g.HouseholderName, row, g.RecordDisabled, g.HouseholdDisplay);
                    }}
                    titlePlaceholder={
                      <span className="bold font-size-0-9em" data-expression="">
                        {g.HouseholderName}
                      </span>
                    }
                    descriptionPlaceholder={
                      <span className="font-size-0-75em" data-expression="">
                        {`${g.LocalityName}, ${g.CountryCode}`}
                      </span>
                    }
                    resultItemPlaceholder={
                      <>
                        <PersonContactOptions
                          emailAddress={g.Email}
                          phone={g.MobilePhone + g.WorkPhone + g.HomePhone}
                          onCallClicked={() => {
                            callClicked(g);
                          }}
                          onEmailClicked={() => {
                            emailClicked(g);
                          }}
                        />
                        <i
                          className="icon padding-left-base fa fa-angle-right fa-2x"
                          data-icon=""
                          style={
                            g.HouseholdDisplay ? { cursor: 'pointer' } : { cursor: 'pointer', visibility: 'hidden' }
                          }
                          onClick={(e) => {
                            e.stopPropagation();
                            onHouseholdClicked(
                              g.HouseholderId,
                              g.HouseholderName,
                              row,
                              g.RecordDisabled,
                              g.HouseholdDisplay,
                            );
                          }}
                        />
                      </>
                    }
                  />
                )}
              </OSList>
            </div>
          ) : null}
        </div>
      ) : null}
    </OSBlock>
  );
}
