/** @origin Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_MemberInformation */
// @os-block Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_MemberInformation
import { useEffect, useState, type ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { osImage } from '@/lib/os-assets';
import { styleFromCssText } from '@/lib/cssText';
import {
  cardMemberInformationOnReady,
  MEMBER_PHOTO_PLACEHOLDER,
  memberInformationAgeTextStyle,
  memberInformationLocation,
  memberInformationName,
  type GetCacheableSignedImageURL,
} from '@/lib/orbit/actions';
import type { MemberInformation } from './types';

export interface MemberInformationCardProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** In_MemberInformation (record, default empty). */
  inMemberInformation?: MemberInformation;
  /** In_DisplayDot: the dot on the photo of a householder or spouse (default false). */
  inDisplayDot?: boolean;
  /** Is_ShowPersonalInfo: age and phone column (default true). */
  isShowPersonalInfo?: boolean;
  /** In_HideMemberInfoLocation (default false). */
  inHideMemberInfoLocation?: boolean;
  /** In_HouseholderId: passed to ClickedMember (default ""). */
  inHouseholderId?: string;
  /** In_HouseholdLocality (default ""). */
  inHouseholdLocality?: string;
  /** In_HouseholdCountryCode (default ""). */
  inHouseholdCountryCode?: string;
  /** In_ShowAdminTag: shows Placeholder_OrbitAdmin and indents the age (default false). */
  inShowAdminTag?: boolean;
  /** Event ClickedMember(HouseholderId): click on the photo or the name. The block only raises it (its own declaration
      resolves, :631-636); the parent's handler does the work (e.g. OnHandle_ClickedMember of the Orbit screen blocks). */
  onClickedMember?: (householderId: string) => void;
  /** Event ClickedPhone(Phone, Name, LocalityId, MemberId, PhotoURL): click on the phone icon. */
  onClickedPhone?: (phone: string, name: string, localityId: string, memberId: string, photoURL: string) => void;
  /** Placeholder Placeholder_OrbitAdmin (after the name, when In_ShowAdminTag). */
  placeholderOrbitAdmin?: ReactNode;
  /** Placeholder Placeholder_Info (under the data row). */
  placeholderInfo?: ReactNode;
  /** Not an OutSystems input: the server call GetCacheableSignedImageURL of OnReady (default: no photo known). */
  getSignedImageURL?: GetCacheableSignedImageURL;
}

/** Member row of the Orbit lists (Card_MemberInformation.mvc.js, view :1-540, controller OnReady :562-620): photo
    (LoadedPhotoURL, with the dot when In_DisplayDot and the member is householder or spouse), name, optional admin tag
    placeholder, location (unless In_HideMemberInfoLocation), then (Is_ShowPersonalInfo) age (Age > 0) and the phone
    icon (Phone not ""), then Placeholder_Info. The photo and the text container call ClickedMember(In_HouseholderId);
    the phone icon calls ClickedPhone. */
export function MemberInformationCard({
  id,
  inMemberInformation = {},
  inDisplayDot = false,
  isShowPersonalInfo = true,
  inHideMemberInfoLocation = false,
  inHouseholderId = '',
  inHouseholdLocality = '',
  inHouseholdCountryCode = '',
  inShowAdminTag = false,
  onClickedMember,
  onClickedPhone,
  placeholderOrbitAdmin,
  placeholderInfo,
  getSignedImageURL,
}: MemberInformationCardProps) {
  const m = inMemberInformation;
  const [loadedPhotoURL, setLoadedPhotoURL] = useState('');
  // OnReady runs once, when the block is first shown.
  useEffect(() => {
    let alive = true;
    void cardMemberInformationOnReady('', m, osImage(MEMBER_PHOTO_PLACEHOLDER), getSignedImageURL)
      .then((url) => {
        if (alive) setLoadedPhotoURL(url);
      })
      .catch(() => undefined);
    return () => {
      alive = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- OnReady only (no OnParametersChanged handler)
  }, []);
  const age = m.Age ?? '';
  const phone = m.Phone ?? '';
  const clickMember = () => onClickedMember?.(inHouseholderId);
  return (
    <OSBlock name="Orbit_Blocks.Card_MemberInformation" id={id}>
      <div className="member-info-cont" data-container="">
        <div className="member-info-img-cont" data-container="" style={{ cursor: 'pointer' }} onClick={clickMember}>
          <div className="member-info-img" data-container="" />
          <img
            className="member-info-img"
            data-error-placeholder-src={osImage(MEMBER_PHOTO_PLACEHOLDER)}
            data-image=""
            src={loadedPhotoURL === '' ? undefined : loadedPhotoURL}
          />
          {inDisplayDot && (m.IsHouseholder === true || m.IsSpouse === true) && (
            <div className="member-info-img-dot" data-container="" />
          )}
        </div>
        <div className="member-info-left-cont" data-container="">
          <div className="member-info-data-cont" data-container="">
            <div
              className="member-info-text-cont"
              data-container=""
              style={{ cursor: 'pointer' }}
              onClick={clickMember}
            >
              <div className="member-info-text-title" data-container="">
                <div className="member-info-name" data-container="">
                  <span data-expression="">{memberInformationName(m)}</span>
                </div>
                {inShowAdminTag && <div className="member-info-admin-tag">{placeholderOrbitAdmin}</div>}
              </div>
              {!inHideMemberInfoLocation && (
                <div className="member-info-location" data-container="">
                  <span data-expression="">
                    {memberInformationLocation(m, inHouseholdLocality, inHouseholdCountryCode)}
                  </span>
                </div>
              )}
            </div>
            {isShowPersonalInfo && (
              <div className="member-info-data-right-cont" data-container="">
                {Number(age) > 0 && (
                  <div
                    className="member-info-age-cont"
                    data-container=""
                    style={inShowAdminTag ? styleFromCssText('margin-left: var(--space-s)') : undefined}
                  >
                    <i className="icon orbit-icon-circle-arrow member-info-age-icon fa fa-flag fa-1x" data-icon="" />
                    <span
                      className="member-info-age-text"
                      data-expression=""
                      style={styleFromCssText(memberInformationAgeTextStyle(age))}
                    >
                      {age}
                    </span>
                  </div>
                )}
                <div className="member-info-phone-cont" data-container="">
                  {phone !== '' && (
                    <i
                      className="icon orbit-icon-phone fa fa-flag fa-1x"
                      data-icon=""
                      onClick={() =>
                        onClickedPhone?.(
                          phone,
                          `${m.FirstName ?? ''} ${m.LastName ?? ''}`,
                          m.LocalityId ?? '',
                          m.MemberId ?? '',
                          loadedPhotoURL,
                        )
                      }
                    />
                  )}
                </div>
              </div>
            )}
          </div>
          <div>{placeholderInfo}</div>
        </div>
      </div>
    </OSBlock>
  );
}
