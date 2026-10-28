import { useEffect, useState } from 'react';
import { fetchLegacySignedImageURL } from '@/api/image';
import { MultiResolutionImageLoader } from '@/components/ui/MultiResolutionImageLoader';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { osImage } from '@/lib/os-assets';
import { cardMemberInformationOnReady, MEMBER_PHOTO_PLACEHOLDER } from '@/lib/orbit/actions';
import type { MemberInformation } from '@/lib/orbit/structures';

/** Name expression (CMS view :#7): FirstName, then " " + LastName (LastName alone without a FirstName). */
export const surveyMemberName = (m: MemberInformation): string => {
  const first = m.FirstName ?? '';
  const last = m.LastName ?? '';
  return first + (last !== '' ? (first !== '' ? ` ${last}` : last) : '');
};

/** Location expression (CMS view :#9): Locality, then " (CountryCode)" (CountryCode alone without a Locality). */
export const surveyMemberLocation = (m: MemberInformation): string => {
  const locality = m.Locality ?? '';
  const country = m.CountryCode ?? '';
  return locality + (country !== '' ? (locality !== '' ? ` (${country})` : country) : '');
};

/** @origin Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_MemberInformation_Survey
    The member row of the host survey helpers (CMS = Card_MemberInformation_Survey.mvc.js; view `member-info-cont
    <In_ExtendedClass>`: the photo `member-info-img-cont orbit-host-survey-member-info-img-cont` in a
    MultiResolutionImageLoader (loading: the static User image; images to load: LoadedPhotoURL with the User image as
    error placeholder), then `member-info-text-cont` with the name and `member-info-location
    orbit-host-survey-member-location`). The photo and the text raise ClickedMember(In_MemberInformation.HouseholderId).
    OnReady (CMS controller): LoadedPhotoURL as Card_MemberInformation (`cardMemberInformationOnReady`). The loader
    instance (CMS view :195-231, L3) shows the User image until the photo loads, then the photo only. */
export function Card_MemberInformation_Survey({
  id,
  inMemberInformation,
  inExtendedClass = '',
  onClickedMember,
}: {
  id: string;
  /** In_MemberInformation (MemberInformationRec). */
  inMemberInformation: MemberInformation;
  /** In_ExtendedClass (default ""). */
  inExtendedClass?: string;
  /** Event ClickedMember(HouseholdId). */
  onClickedMember?: (householdId: string) => void;
}) {
  const m = inMemberInformation;
  const scope = id.replace(/\$(b\d+)$/, '$1');
  const [loadedPhotoURL, setLoadedPhotoURL] = useState('');
  // OnReady runs once (the block has no OnParametersChanged).
  useEffect(() => {
    let alive = true;
    void cardMemberInformationOnReady('', m, osImage(MEMBER_PHOTO_PLACEHOLDER), fetchLegacySignedImageURL)
      .then((url) => {
        if (alive) setLoadedPhotoURL(url);
      })
      .catch(() => undefined);
    return () => {
      alive = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- OnReady only
  }, []);
  const clickMember = () => onClickedMember?.(m.HouseholderId ?? '');
  return (
    <OSBlock name="Orbit_Blocks.Card_MemberInformation_Survey" id={id}>
      <div className={`member-info-cont ${inExtendedClass}`} data-container="">
        <div
          className="member-info-img-cont orbit-host-survey-member-info-img-cont"
          data-container=""
          style={{ cursor: 'pointer' }}
          onClick={clickMember}
        >
          <MultiResolutionImageLoader
            id={`${scope}-$b1`}
            loading={<img className="member-info-img" data-image="" src={osImage(MEMBER_PHOTO_PLACEHOLDER)} />}
            imagesToLoad={
              <img
                className="member-info-img"
                data-error-placeholder-src={osImage(MEMBER_PHOTO_PLACEHOLDER)}
                data-image=""
                src={loadedPhotoURL === '' ? undefined : loadedPhotoURL}
              />
            }
          />
        </div>
        <div className="member-info-text-cont" data-container="" style={{ cursor: 'pointer' }} onClick={clickMember}>
          <div className="member-info-name" data-container="">
            <span data-expression="">{surveyMemberName(m)}</span>
          </div>
          <div className="member-info-location orbit-host-survey-member-location" data-container="">
            <span data-expression="">{surveyMemberLocation(m)}</span>
          </div>
        </div>
      </div>
    </OSBlock>
  );
}
