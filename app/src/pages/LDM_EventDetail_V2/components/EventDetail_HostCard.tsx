// @os-block Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_HostCard
import { OSBlock } from '@/components/ui/os/OSBlock';
import { styleFromCssText } from '@/shared/lib/cssText';
import { Person_Contact_Options } from '@/shared/Connect2_LegacyShared/Person_Contact_Options';
import { flipHouseholdName } from '@/shared/Connect2_LegacyShared/lib/actions';

export interface EventDetail_HostCardProps {
  id: string;
  scope: string;
  /** In_IsAssigned: the host allocation is published (Host.IsPublished). */
  inIsAssigned: boolean;
  inHostURL: string;
  inHostName: string;
  inAddress: string;
  inIsHost: boolean;
  inPhone: string;
  inHostEmail: string;
  maxPhotoWidth: number;
  maxPhotoHeight: number;
  householdDisplay: boolean;
  /** Event HostInformation(IsHousholdDisplayed). */
  onHostInformation: (isHouseholdDisplayed: boolean) => void;
  /** Event NavigateToEmail_Household(HouseholdFirstName, HouseholdFullName, Email). */
  onNavigateToEmailHousehold: (householdFirstName: string, householdFullName: string, email: string) => void;
  /** Event CallPhone. */
  onCallPhone: () => void;
  /** Event Address. */
  onAddress: () => void;
}

/** Host card of the LDM event detail, shown to a guest (analysis/sources/pretty/Connect2_OrbitMobile_MUI.LDM_Blocks
    .EventDetail_HostCard.mvc.js view :170-560). The content row is hidden for a host whose allocation is not
    published: the host photo (an assigned host with a photo) or the blank `fa-users` box, "Host" and the host name
    ("Your Host" when empty, "Host Allocation Pending" when not assigned), Person_Contact_Options (Phone, Email) and the
    angle-right (visible when HouseholdDisplay); a click on the host or the arrow raises HostInformation. An assigned
    host also shows the address and the "Directions" button (both raise Address). No controller logic of its own. */
export function EventDetail_HostCard({
  id,
  scope,
  inIsAssigned,
  inHostURL,
  inHostName,
  inAddress,
  inIsHost,
  inPhone,
  inHostEmail,
  maxPhotoWidth,
  maxPhotoHeight,
  householdDisplay,
  onHostInformation,
  onNavigateToEmailHousehold,
  onCallPhone,
  onAddress,
}: EventDetail_HostCardProps) {
  const w = `${String(maxPhotoWidth)}px`;
  const h = `${String(maxPhotoHeight)}px`;
  const blankPhoto = (
    <div className="event-detail-photo-blank" data-container="" style={{ width: w, height: h }}>
      <i className="icon fa fa-users fa-1x" data-icon="" />
    </div>
  );
  return (
    <OSBlock name="LDM_Blocks.EventDetail_HostCard" id={id}>
      <div className="event-detail-hostcard" data-container="">
        {!(inIsHost && !inIsAssigned) ? (
          <div className="event-detail-hostcard-content" data-container="">
            <div
              className="event-detail-hostcard-host"
              data-container=""
              style={{ cursor: 'pointer' }}
              onClick={() => {
                onHostInformation(householdDisplay);
              }}
            >
              <div className="event-detail-hostcard-content-photo" data-container="">
                {inIsAssigned && inHostURL !== '' ? (
                  <div
                    className="event-detail-photo"
                    data-container=""
                    style={styleFromCssText(
                      `width: ${w}; min-width: ${w}; height: ${h}; min-height: ${h}; background-image: url('${inHostURL}');`,
                    )}
                  />
                ) : (
                  blankPhoto
                )}
              </div>
              <div
                className="event-detail-hostcard-content-info OSInline"
                data-container=""
                style={
                  inIsAssigned && inAddress !== '' ? { borderBottom: '1px solid var(--color-neutral-3)' } : undefined
                }
              >
                <span className="event-detail-hostcard-content-info-title" data-expression="">
                  Host
                </span>
                <span className="event-detail-hostcard-content-info-name" data-expression="">
                  {inIsAssigned ? (inHostName !== '' ? inHostName : 'Your Host') : 'Host Allocation Pending'}
                </span>
              </div>
            </div>
            <div data-container="">
              <Person_Contact_Options
                id={`${scope}-$b1`}
                emailAddress={inHostEmail}
                phone={inPhone}
                onEmailClicked={(email) => {
                  onNavigateToEmailHousehold(flipHouseholdName(inHostName), inHostName, email);
                }}
                onCallClicked={() => {
                  onCallPhone();
                }}
              />
            </div>
            <div
              className="event-detail-icon-arrow"
              data-container=""
              style={{ cursor: 'pointer' }}
              onClick={() => {
                onHostInformation(householdDisplay);
              }}
            >
              {householdDisplay ? <i className="icon fa fa-angle-right fa-1x" data-icon="" /> : null}
            </div>
          </div>
        ) : null}
        {inIsAssigned ? (
          <div className="event-detail-hostcard-address" data-container="">
            <div className="event-detail-hostcard-address-top" data-container="">
              <div
                className="event-detail-hostcard-address-info OSInline"
                data-container=""
                style={{ cursor: 'pointer' }}
                onClick={onAddress}
              >
                <span className="event-detail-hostcard-address-info-title" data-expression="">
                  {inAddress}
                </span>
              </div>
              <div className="event-detail-hostcard-address-button" data-container="">
                <button className="btn btn-primary OSFillParent" data-button="" type="button" onClick={onAddress}>
                  <i className="icon event-detail-hostcard-address-icon fa fa-map-marker fa-1x" data-icon="" />
                  Directions
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </OSBlock>
  );
}
