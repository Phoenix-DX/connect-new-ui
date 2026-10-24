// @os-block Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_ListItem
import { OSBlock } from '@/components/ui/os/OSBlock';
import { styleFromCssText } from '@/shared/lib/cssText';
import { osImage } from '@/legacy/os/os-assets';
import { PersonContactOptions } from '@/components/contact/PersonContactOptions';
import type {
  ContactByPhonePopupData,
  UI_ContactByMessage_WrapperData,
} from '@/shared/UBTConnect_Utils/lib/structures';
import { PLATFORM_MESSAGE_TYPE, showFeedbackMessage } from '@/platform/feedback';
import type { DetailGuestItem } from '@/pages/LDM_EventDetail_V2/types';
import { flipHouseholdName } from '@/shared/Connect2_LegacyShared/lib/actions';
import { getLocalityName } from '@/shared/Connect2_OrbitMobile_MUI/lib/actions';

export interface EventDetail_ListItemProps {
  id: string;
  scope: string;
  inMaxPhotoWidth: number;
  inMaxPhotoHeight: number;
  inHasBottomBorder: boolean;
  isHosting: boolean;
  guest: DetailGuestItem;
  /** Event Clicked(IsHouseholdDisplayed). */
  onClicked: (isHouseholdDisplayed: boolean) => void;
  /** Event OnClick_PhoneCall(Event_PhoneCallInfo). */
  onClickPhoneCall: (data: ContactByPhonePopupData) => void;
  /** Event OnClick_Message(Event_ContactPopupData, Event_CountryName). */
  onClickMessage: (data: UI_ContactByMessage_WrapperData, countryName: string) => void;
}

const plural = (n: number, one: string, many: string) => `${String(n)}${n > 1 ? many : one}`;

/** One guest household of the LDM event detail (analysis/sources/pretty/Connect2_OrbitMobile_MUI.LDM_Blocks
    .EventDetail_ListItem.mvc.js = L; view :175-560, controller :565-790). A click on the row raises
    Clicked(Guest.HouseholdDisplay) (L:625-645). The photo (or the static User_rectangle image), the household name
    (bold), the locality, for a host the adults / children ("1 Adult", "2 Adults", ", 1 Child"…), "Including: …" and
    "Not Attending: …"; Person_Contact_Options with HomePhone + MobilePhone + WorkPhone and the email; the angle-right
    is hidden (`visibility: hidden`) when the household is not displayed. OnHandle_CallClicked (L:570-620):
    OnClick_PhoneCall with the household's contact data. OnHandle_EmailClicked (L:650-720): online, OnClick_Message
    with the email, the mobile phone and the flipped name; offline, the Info message "Please check your network
    connection and try again". */
export function EventDetail_ListItem({
  id,
  scope,
  inMaxPhotoWidth,
  inMaxPhotoHeight,
  inHasBottomBorder,
  isHosting,
  guest: g,
  onClicked,
  onClickPhoneCall,
  onClickMessage,
}: EventDetail_ListItemProps) {
  const w = `${String(inMaxPhotoWidth)}px`;
  const h = `${String(inMaxPhotoHeight)}px`;
  const adults = Number(g.Adults);
  const children = Number(g.Children);
  const contactPopupData = (name: string) => ({
    ImageURL: g.SignedURL,
    Name: name,
    Locality: getLocalityName(g.LocalityName),
    TimezoneName: g.Timezone.TimezoneLabel,
    TimezoneOffset: Number(g.Timezone.OffsetSeconds),
    ShowPopup: true,
    CountryName: g.CountryName,
  });

  const callClicked = () => {
    onClickPhoneCall({
      ContactPopupData: contactPopupData(flipHouseholdName(g.HouseholderName)),
      MobilePhone: g.MobilePhone,
      HomePhone: g.HomePhone,
      WorkPhone: g.WorkPhone,
    });
  };
  const emailClicked = () => {
    if (!navigator.onLine) {
      showFeedbackMessage('Please check your network connection and try again', PLATFORM_MESSAGE_TYPE.info);
      return;
    }
    onClickMessage(
      {
        Email: g.Email,
        Phone: g.MobilePhone,
        ContactPopupData: contactPopupData(flipHouseholdName(g.HouseholderName)),
      },
      g.CountryName,
    );
  };

  return (
    <OSBlock name="LDM_Blocks.EventDetail_ListItem" id={id}>
      <div className="event-detail-list-item OSInline" data-container="">
        <div
          className="event-detail-list-item-main"
          data-container=""
          style={{ cursor: 'pointer' }}
          onClick={() => {
            onClicked(g.HouseholdDisplay);
          }}
        >
          {g.SignedURL === '' ? (
            <div className="event-detail-photo-blank" data-container="" style={{ minWidth: w, minHeight: h }}>
              <img data-image="" src={osImage('img/Connect2_LegacyShared.User_rectangle.png')} style={{ height: h }} />
            </div>
          ) : (
            <div
              className="event-detail-photo"
              data-container=""
              style={styleFromCssText(
                `width: ${w}; \r\nmin-width: ${w}; \r\nheight: ${h}; \r\nmin-height: ${h};\r\nbackground-image: url('${g.SignedURL}');`,
              )}
            />
          )}
          <div
            className={`event-detail-list-item-info${inHasBottomBorder ? ' border-bottom-neutral-4' : ''}`}
            data-container=""
            style={{ minHeight: h }}
          >
            <div className="event-detail-list-item-info-text OSInline" data-container="">
              <span className="bold font-size-0-9em" data-expression="">
                {g.HouseholderName}
              </span>
              {g.LocalityName !== '' ? (
                <div data-container="">
                  <span className="font-size-0-8em text-neutral-7" data-expression="" id={`${scope}-LocalityName`}>
                    {g.LocalityName}
                  </span>
                </div>
              ) : null}
              {isHosting && (adults > 0 || children > 0) ? (
                <div data-container="" id={`${scope}-AdultsChildren`}>
                  {adults > 0 ? (
                    <span className="font-size-0-8em text-neutral-7" data-expression="" id={`${scope}-xx_Adults`}>
                      {plural(adults, ' Adult', ' Adults')}
                    </span>
                  ) : null}
                  {children > 0 ? (
                    <>
                      <span className="font-size-0-8em text-neutral-7" data-expression="" id={`${scope}-comma`}>
                        {adults > 0 ? ', ' : ''}
                      </span>
                      <span className="font-size-0-8em text-neutral-7" data-expression="" id={`${scope}-xx_Children`}>
                        {plural(children, ' Child', ' Children')}
                      </span>
                    </>
                  ) : null}
                </div>
              ) : null}
              {g.Including !== '' ? (
                <div data-container="" id={`${scope}-Including`}>
                  <span className="font-size-0-8em text-neutral-7" data-expression="">
                    {`Including: ${g.Including}`}
                  </span>
                </div>
              ) : null}
              {g.NonAttending !== '' ? (
                <div data-container="" id={`${scope}-NonAttending`}>
                  <span className="font-size-0-8em text-neutral-7" data-expression="">
                    {`Not Attending: ${g.NonAttending}`}
                  </span>
                </div>
              ) : null}
            </div>
            <div className="padding-left-xs" data-container="">
              <PersonContactOptions
                id={`${scope}-$b1`}
                phone={g.HomePhone + g.MobilePhone + g.WorkPhone}
                emailAddress={g.Email}
                onCallClicked={callClicked}
                onEmailClicked={emailClicked}
              />
            </div>
            <i
              className="icon event-detail-list-item-info-icon fa fa-angle-right fa-1x"
              data-icon=""
              style={g.HouseholdDisplay ? undefined : { visibility: 'hidden' }}
            />
          </div>
        </div>
      </div>
    </OSBlock>
  );
}
