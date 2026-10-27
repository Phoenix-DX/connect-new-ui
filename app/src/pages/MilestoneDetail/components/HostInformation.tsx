import type { HostInformation as HostInformationRecord } from '@/api/event';
import { OrbitSkeleton } from '@/components/orbit/OrbitSkeleton';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { SanitizedHtml } from '@/components/ui/SanitizedHtml';
import { getFormattedDateTimeById } from '@/lib/orbit/actions';
import { DirectoryAPIFilter, ImageSigningSize, OrbitSkeletonLoading } from '@/lib/orbit/staticEntities';
import { hostInformationOnClickAddress } from '@/pages/MilestoneDetail/actions';
import { ContactOptionsOrbit } from './ContactOptionsOrbit';
import { PhotoLazyLoaded } from './PhotoLazyLoaded';

/** The photo URL of the mock household: the block shows it as it is, without PhotoLazyLoaded. */
const HOUSEHOLD_MOCK_PHOTO = 'https://publicimageconnect.s3.ap-southeast-2.amazonaws.com/householdMock.png';

interface HostInformationProps {
  /** OutSystems instance id of the block. */
  id: string;
  inMilestoneTypeId: string;
  milestoneDateTime: string;
  hostInformation: HostInformationRecord;
  /** Captions: the children's names of the host household (HTML with nobr and sup). */
  captions: string;
  isFetchingCaptions: boolean;
  /** GetCacheableSignedImageURL (Connect2_LegacyShared), for PhotoLazyLoaded. */
  getSignedImageURL: (entityId: string, type: string, size: string) => Promise<string>;
  /** Event Clicked_PhoneNumber(PhoneNumber, CallName, LocalityId). */
  onClickedPhoneNumber: (phoneNumber: string, callName: string, localityId: string) => void;
  /** Event NavigateTo_HostProfile(HouseholdId). */
  onNavigateToHostProfile: (householdId: string) => void;
  /** Event NavigateTo_EmailHost(HostName, HostEmail, FormattedDateTime). */
  onNavigateToEmailHost: (hostName: string, hostEmail: string, formattedDateTime: string) => void;
}

/** The host household of a milestone, props only: "Your Host", the photo (PhotoLazyLoaded of the household, or the
    mock photo as it is), the surname (upper case) and name, the children's names (skeleton while fetching), the
    address (OnClick_Address opens the maps), the milestone date and ContactOptions_Orbit (phone, e-mail).
    @origin Connect2_OrbitMobile_MUI.Orbit_Blocks.HostInformation */
export function HostInformation(props: HostInformationProps) {
  const { id, hostInformation: h, captions, isFetchingCaptions } = props;
  const prefix = id.replace('$', '');
  const formattedDateTime = getFormattedDateTimeById(props.inMilestoneTypeId, props.milestoneDateTime);
  const toHostProfile = () => {
    props.onNavigateToHostProfile(h.HouseholderId);
  };

  return (
    <OSBlock name="Orbit_Blocks.HostInformation" id={id}>
      <div className="full-width" data-container="">
        <div className="display-flex flex-direction-column" data-container="">
          <div className="padding-x-m padding-y-m bold color-orbit-primary-7" data-container="">
            Your Host
          </div>
          {h.SignedPhotoURL === HOUSEHOLD_MOCK_PHOTO ? (
            <img className="host-information-image" src={h.SignedPhotoURL} alt="" />
          ) : (
            <PhotoLazyLoaded
              id={`${prefix}-$b1`}
              inSize={ImageSigningSize.Medium}
              inId={h.HouseholderId}
              inType={DirectoryAPIFilter.Household}
              getSignedImageURL={props.getSignedImageURL}
              onImageClicked={toHostProfile}
            />
          )}
          <div className="padding-x-m padding-y-m" data-container="" onClick={toHostProfile}>
            <div className={isFetchingCaptions || captions !== '' ? 'margin-bottom-xs' : ''} data-container="">
              <span className="text-uppercase bold" data-expression="">
                {h.HouseholdSurname !== '' ? h.HouseholdSurname : ''}
              </span>
              <span className="bold" data-expression="">
                {h.HouseholdSurname !== '' ? (h.HouseholdName !== '' ? ` ${h.HouseholdName}` : '') : h.HouseholdName}
              </span>
            </div>
            {isFetchingCaptions ? (
              <OrbitSkeleton id={`${prefix}-$b2`} inSkeletonLoadingId={OrbitSkeletonLoading.SingleItem} />
            ) : captions !== '' ? (
              <SanitizedHtml id={`${prefix}-$b3`} value={captions} resetWhitelist={false} allowedTags="nobr,sup" />
            ) : null}
          </div>
          <div className="padding-x-m padding-bottom-m" data-container="">
            <div
              className="margin-bottom-m"
              data-container=""
              onClick={() => {
                hostInformationOnClickAddress(h.FormattedAddress, h.CountryName);
              }}
            >
              <i className="icon orbit-icon-location fa fa-flag fa-1x" data-icon="" />
              <span className="text-underline bold color-orbit-primary-7 ThemeGrid_MarginGutter" data-expression="">
                {h.FormattedAddress}
              </span>
            </div>
            <div data-container="">
              <i className="icon orbit-icon-date-time fa fa-flag fa-1x" data-icon="" />
              <span className="ThemeGrid_MarginGutter" data-expression="">
                {formattedDateTime}
              </span>
            </div>
          </div>
        </div>
        <ContactOptionsOrbit
          id={`${prefix}-$b4`}
          inPhoneNumber={h.Phone}
          inEmail={h.Email}
          onClickedEmail={() => {
            props.onNavigateToEmailHost(hostPopupLabel(h), h.Email, formattedDateTime);
          }}
          onClickedPhone={() => {
            props.onClickedPhoneNumber(h.Phone, h.HouseholdName, h.LocalityId);
          }}
        />
      </div>
    </OSBlock>
  );
}

/** HouseholdName + If(HouseholdSurname <> "", " " + HouseholdSurname, ""): the HostName of NavigateTo_EmailHost. */
const hostPopupLabel = (h: HostInformationRecord): string =>
  `${h.HouseholdName}${h.HouseholdSurname !== '' ? ` ${h.HouseholdSurname}` : ''}`;
