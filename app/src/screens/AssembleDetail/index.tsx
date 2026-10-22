import { useSearchParams } from 'react-router';
import { useFlagOn } from '@/platform/flags/flags';
import { BottomBarMenu } from '@/shared/UBTConnect/BottomBarMenu';
import { CommonUI_InsideLayout } from '@/shared/UBTConnect/CommonUI_InsideLayout';
import { getNameAndSurname_ByFullName } from '@/shared/UBTConnect/lib/actions';
import { ShareSheet } from '@/shared/UBTConnect_Utils/ShareSheet';
import { getPreloadObject, setPreloadObject, useOsNavigate, useViewState } from '@/platform/navigation';
import { readInputs } from './api';
import { ScreenBlock_AssembleDetail } from './components/ScreenBlock_AssembleDetail';

/** Type_ShareObject.Household, Connect_Entity.Member, ApplicationEvents_Directory.EmailHousehold
    (static-entities-tst.json, UBTConnect). */
const SHARE_OBJECT_HOUSEHOLD = 'Household';
const CONNECT_ENTITY_MEMBER = 'Member';
const AUDIT_EMAIL_HOUSEHOLD = 'f3fa3922-32a5-4eeb-bfb6-939a4e8697bd';

/** UBTConnect Legacy_AssembleFlow.AssembleDetail (migration/screens/AssembleDetail/sources/UBTConnect.Legacy_AssembleFlow
    .AssembleDetail.mvc.js, "SCR": view :369-635, controller :641-1568). Inputs EventId, SeriesId, Start (DateTime),
    AssembleEventTypeTile. CommonUI_InsideLayout, ScreenBlock_AssembleDetail with BottomBarMenu in its BottomBar, and a
    household ShareSheet whose IsShareOpen is never set to True (only Handler_CloseShareSheet writes it). Handlers:
    - NavigateTo_Household → HouseholdDetails(HouseholdId) (:1364-1424);
    - NavigateTo_HouseholdCarousel (:885-1108): GetHasCarouselEnabled (flag C2EnableCarousel) and a preloaded id list
      (AssignFromObject) containing the household → SetPreloadObject(CarouselHouseholdItem of every id) and
      HouseholdCarousel(In_StartingHouseholdId); otherwise HouseholdDetails;
    - NavigateTo_EmailContact (:1143-1259): GetNameAndSurname_ByFullName(name) → ContactByEmailMember(In_EntityId,
      In_EntityType Member, In_ContactName, In_ContactLocality, In_AuditEventId EmailHousehold, In_ContactCountry,
      In_EmailTo, In_ContactSurname, In_AvatarURL);
    - NavigateTo_ShareObject (:736-852): external → ShareEntity_ByURL (not raised in the clone: the shared ItemOptionsMenu
      has no OnShareToOthers), else LegacyShareObject(In_ShareObjectTypeId, In_ObjectId);
    - EventNotFound → IsEventNotFound True (:1319-1363; never raised by AssembleEventDetail). */
export default function AssembleDetail() {
  const [params] = useSearchParams();
  const inputs = readInputs(params);
  const navigate = useOsNavigate();
  const hasCarouselEnabled = useFlagOn('C2EnableCarousel');
  const [isShareOpen, setIsShareOpen] = useViewState('IsShareOpen', false);
  const [shareableObjectId] = useViewState('ShareableObjectId', '');

  const navigateToHousehold = (householdId: string) => {
    navigate('/UBTConnect/HouseholdDetails', { HouseholdId: householdId });
  };

  return (
    <>
      <CommonUI_InsideLayout id="$b1" />
      <ScreenBlock_AssembleDetail
        key={`${inputs.EventId}-${inputs.SeriesId}-${inputs.Start}`}
        id="$b2"
        inputs={inputs}
        bottomBar={<BottomBarMenu id="$b3" />}
        onNavigateToHousehold={navigateToHousehold}
        onNavigateToHouseholdCarousel={(_itemPosition, selectedHouseholdId) => {
          const preload = getPreloadObject();
          const ids = Array.isArray(preload) ? preload.map(String) : null;
          if (hasCarouselEnabled && ids !== null && ids.includes(selectedHouseholdId)) {
            setPreloadObject({ CarouselHouseholdItem: ids.map((id) => ({ Household: id })) });
            navigate('/UBTConnect/HouseholdCarousel', { In_StartingHouseholdId: selectedHouseholdId });
            return;
          }
          navigateToHousehold(selectedHouseholdId);
        }}
        onEmailContact={(a) => {
          const split = getNameAndSurname_ByFullName(a.contactName);
          navigate('/UBTConnect/ContactByEmailMember', {
            In_EntityId: a.memberId,
            In_EntityType: CONNECT_ENTITY_MEMBER,
            In_ContactName: split.Out_Name,
            In_ContactLocality: a.contactLocality,
            In_AuditEventId: AUDIT_EMAIL_HOUSEHOLD,
            In_ContactCountry: a.contactCountry,
            In_EmailTo: a.emailTo,
            In_ContactSurname: split.Out_Surname,
            In_AvatarURL: a.avatarURL,
          });
        }}
        onNavigateToShareObject={(shareObjectTypeId, objectId, isExternalSharing) => {
          if (isExternalSharing) return; // ShareEntity_ByURL: never raised in the clone (see above).
          navigate('/UBTConnect/LegacyShareObject', { In_ShareObjectTypeId: shareObjectTypeId, In_ObjectId: objectId });
        }}
      />
      <ShareSheet
        id="$b4"
        inShareObjectTypeId={SHARE_OBJECT_HOUSEHOLD}
        inIsOpen={isShareOpen}
        inShareableObjectId={shareableObjectId}
        onEventClosedShareSheet={() => {
          setIsShareOpen(false);
        }}
      />
    </>
  );
}
