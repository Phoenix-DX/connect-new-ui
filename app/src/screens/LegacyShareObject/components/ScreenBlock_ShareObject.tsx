// @os-block Connect2_LegacyShared.Share_UI.ScreenBlock_ShareObject
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { OSBlock } from '../../../components/OSBlock';
import { osImage } from '../../../lib/os-assets';
import { Layout } from '../../../shared/Connect2_LegacyShared/Layout';
import { ResultListType } from '../../../shared/Connect2_LegacyShared/lib/staticEntities';
import { MenuIcon_Back } from '../../../shared/Connect2_LegacyShared/MenuIcon_Back';
import { Result_Item_Image } from '../../../shared/Connect2_LegacyShared/Result_Item_Image';
import { AvatarImage } from '../../../shared/UBTConnectLibrary/AvatarImage';
import { UBT_AvatarSize, UBT_Color, UBT_Shape } from '../../../shared/UBTConnectLibrary/lib/staticEntities';
import { Connect_Entity, UBT_ImageSize } from '../../../shared/UBTConnect_Utils/lib/staticEntities';
import { UBT_LazyImage } from '../../../shared/UBTConnect_Utils/UBT_LazyImage';
import { raiseToFlowHandler } from '@/legacy/os/exceptions';
import { getCommunityBusinessShareCard, getHouseholdDetails, useShareObjectTypeLabel } from '../api';
import type { CommunityBusinessShareCard } from '../types';
import { ProfileList } from './ProfileList';
import { FEED_ITEM_ICON, Type_ShareObject } from './staticEntities';

export interface ScreenBlock_ShareObjectProps {
  /** OutSystems instance id of the block (`$b1`). */
  id: string;
  shareObjectTypeId: string;
  objectId: string;
  inCustomTitle: string;
  userAgeVisibility: boolean;
  /** Placeholder BottomBar. */
  bottomBar?: ReactNode;
  /** Placeholder CommonUI_Elements. */
  commonUIElements?: ReactNode;
  /** Event SubscriptionDenied (raised by ProfileList). */
  onSubscriptionDenied: () => Promise<void>;
}

const TAG_CLASS =
  'font-size-0-75em text-align-left padding-x-xs padding-y-xs border-radius-soft background-neutral-2 text-neutral-6';
/** Extended style "color: #000; font-size: 0.8em;" of the tag expressions (captured dom/default.html:101). */
const TAG_STYLE = { color: 'rgb(0, 0, 0)', fontSize: '0.8em' };

const EMPTY_COMMUNITY_BUSINESS: CommunityBusinessShareCard = {
  name: '',
  areasServed: '',
  countryName: '',
  photoBucket: '',
  photoPath: '',
  photoType: '',
  photoSignedPath: '',
};

/** Share_UI.ScreenBlock_ShareObject (Connect2_LegacyShared.Share_UI.ScreenBlock_ShareObject.mvc.js: model :1-155,
    view :213-693, controller :699-1240). Layout with the back arrow and "Share " + the share type label; the card of
    the shared object (Household / Campus&Co or OneSchool Global / Feed) and ProfileList.
    OnInitialize (:969-992) IsLoading = True; OnReady (:1039-1135) loads the card, then IsLoading = False (an exception
    leaves it True and goes to the flow handler); OnParametersChanged (:938-967) refreshes the aggregate (query key).
    HandleShareProfileList / DeferredHandleShareProfileList (:886-936, :994-1037) answer ProfileList's Share event,
    which ProfileList never raises (its controller only declares share$Action): not wired. */
export function ScreenBlock_ShareObject({
  id,
  shareObjectTypeId,
  objectId,
  inCustomTitle,
  userAgeVisibility,
  bottomBar,
  commonUIElements,
  onSubscriptionDenied,
}: ScreenBlock_ShareObjectProps) {
  const scope = id.replace('$', '');
  const [isLoading, setIsLoading] = useState(true);
  const [household, setHousehold] = useState({ name: '', description: '', tag: '' });
  const [communityBusiness, setCommunityBusiness] = useState(EMPTY_COMMUNITY_BUSINESS);
  const label = useShareObjectTypeLabel({
    ShareObjectTypeId: shareObjectTypeId,
    ObjectId: objectId,
    In_CustomTitle: inCustomTitle,
    User_AgeVisibility: userAgeVisibility,
  });

  // OnReady: once, with the inputs at that time.
  const ready = useRef(false);
  useEffect(() => {
    if (ready.current) return;
    ready.current = true;
    const onReady = async () => {
      if (shareObjectTypeId === Type_ShareObject.Household) {
        const card = await getHouseholdDetails(objectId, userAgeVisibility);
        // Bucket, Path, Type and SignedURL are set to "" (they stay at their default).
        setHousehold({
          name: card.name,
          description: card.familyNames,
          tag: card.localityName + ', ' + card.countryName,
        });
      } else if (
        shareObjectTypeId === Type_ShareObject.CampusCo ||
        shareObjectTypeId === Type_ShareObject.OneSchoolGlobal
      ) {
        const card = await getCommunityBusinessShareCard(objectId);
        setCommunityBusiness({
          ...card,
          areasServed: card.areasServed + (card.countryName !== '' ? ', ' + card.countryName : ''),
        });
      }
      setIsLoading(false);
    };
    onReady().catch(raiseToFlowHandler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const cb = communityBusiness;
  const cbSignedURL =
    cb.photoBucket !== '' && cb.photoPath !== '' && cb.photoType !== '' && cb.photoSignedPath !== ''
      ? cb.photoSignedPath
      : shareObjectTypeId === Type_ShareObject.CampusCo
        ? osImage('img/Connect2_LegacyShared.CampusCo_PhotoComingSoon.png')
        : osImage('img/Connect2_LegacyShared.OneSchool_PhotoComingSoon.png');

  const content = (
    <div className="padding" data-container="">
      <div className="border-radius-soft border-neutral-4" data-container="">
        {shareObjectTypeId === Type_ShareObject.Household && (
          <Result_Item_Image
            id={`${scope}-Household_List_Item`}
            inShowDescription={household.description !== ''}
            inIsNavigationLoading={isLoading}
            showPlaceholderForImage
            inResultType={ResultListType.Household}
            inHasAction={false}
            inShowTag={household.tag !== ''}
            inHasBorder={false}
            imagePlaceholder={
              <UBT_LazyImage
                id={`${scope}-$b4`}
                entityType={Connect_Entity.Household}
                imageSize={{ Width: UBT_ImageSize.Large_65 }}
                entityId={objectId}
              />
            }
            titlePlaceholder={
              <span className="font-size-0-9em bold" data-expression="" id={`${scope}-Household_Title`}>
                {household.name}
              </span>
            }
            descriptionPlaceholder={
              <span
                className="country-household-count household-locality-no-paddingleft"
                data-expression=""
                id={`${scope}-Household_Description`}
              >
                {household.description}
              </span>
            }
            tagPlaceholder={
              <span className={TAG_CLASS} data-expression="" id={`${scope}-Household_Tag`} style={TAG_STYLE}>
                {household.tag}
              </span>
            }
          />
        )}
        {(shareObjectTypeId === Type_ShareObject.OneSchoolGlobal ||
          shareObjectTypeId === Type_ShareObject.CampusCo) && (
          <Result_Item_Image
            id={`${scope}-CommunityBusiness_List_Item`}
            inType={cb.photoType}
            inShowTag={cb.countryName !== '' || cb.areasServed !== ''}
            inSignedURL={cbSignedURL}
            inPath={cb.photoPath}
            inIsNavigationLoading={isLoading}
            inBucket={cb.photoBucket}
            inHasAction={false}
            inShowDescription={false}
            inHasBorder={false}
            inResultType={ResultListType.Subdivision}
            showPlaceholderForImage={false}
            imagePlaceholder={<i className="icon fa-spin fa fa-spinner fa-3x" data-icon="" />}
            titlePlaceholder={
              <span className="font-size-0-9em bold" data-expression="" id={`${scope}-CommunityBusiness_Title`}>
                {cb.name}
              </span>
            }
            tagPlaceholder={
              <span className={TAG_CLASS} data-expression="" id={`${scope}-CommunityBusiness_Tag`} style={TAG_STYLE}>
                {cb.areasServed}
              </span>
            }
          />
        )}
        {shareObjectTypeId === Type_ShareObject.Feed && (
          <Result_Item_Image
            id={`${scope}-Feed_List_Item`}
            inShowDescription
            inHasAction={false}
            showPlaceholderForImage
            inIsNavigationLoading={isLoading}
            inHasBorder={false}
            inShowTag={false}
            imagePlaceholder={
              <AvatarImage
                id={`${scope}-$b7`}
                inBorderRadius={UBT_Shape.Soft}
                inAvatarImage={{
                  FallbackOptions: {
                    IconId: FEED_ITEM_ICON,
                    BackgroundColor: UBT_Color.CyanDark,
                    FontColor: UBT_Color.Neutral0,
                  },
                }}
                inSizeId={UBT_AvatarSize.Large_65}
              />
            }
            titlePlaceholder={
              <span className="font-size-0-9em bold" data-expression="" id={`${scope}-Feed_Title`}>
                {inCustomTitle}
              </span>
            }
          />
        )}
      </div>
      <div className="margin-top-base" data-container="">
        <ProfileList
          id={`${scope}-$b8`}
          shareObjectTypeId={shareObjectTypeId}
          shareObjectId={objectId}
          onSubscriptionDenied={onSubscriptionDenied}
        />
      </div>
    </div>
  );

  return (
    <OSBlock name="Share_UI.ScreenBlock_ShareObject" id={id}>
      <Layout
        id={`${scope}-$b1`}
        headerLeft={<MenuIcon_Back id={`${scope}-$b2`} />}
        title={
          <div className="text-align-center" data-container="">
            <span data-expression="">{'Share ' + (label.data ?? '')}</span>
          </div>
        }
        content={content}
        bottomBar={<div id={`${scope}-BottomBar`}>{bottomBar}</div>}
        commonUIElements={<div id={`${scope}-CommonUI_Elements`}>{commonUIElements}</div>}
      />
    </OSBlock>
  );
}
