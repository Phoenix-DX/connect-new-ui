import type { ReactNode } from 'react';
import type { CommunityBusinessShareCard } from '@/api/locality';
import { LegacyLayout } from '@/components/layout/LegacyLayout';
import { MenuIconBack } from '@/components/layout/MenuIconBack';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { osImage } from '@/legacy/os/os-assets';
import type { ShareObjectHousehold } from '@/pages/LegacyShareObject/hooks/shareObjectState';
import { ResultListType } from '@/lib/legacyShared/staticEntities';
import { ResultItemImage } from '@/components/ui/ResultItemImage';
import { AvatarImage } from '@/components/ui/AvatarImage';
import { UBT_AvatarSize, UBT_Color, UBT_Shape } from '@/lib/ubtConnectLibrary/staticEntities';
import { Connect_Entity, UBT_ImageSize } from '@/lib/ubtConnectUtils/staticEntities';
import { EntityLazyImage } from '@/components/ui/EntityLazyImage';
import { FEED_ITEM_ICON, Type_ShareObject } from './staticEntities';

export interface ShareObjectViewProps {
  /** OutSystems instance id of the block (`$b1`). */
  id: string;
  /** ShareObjectTypeId: the Text identifier of Type_ShareObject. */
  shareObjectTypeId: string;
  /** ObjectId: the entity of the household image. */
  objectId: string;
  /** In_CustomTitle: the title of the feed card. */
  customTitle: string;
  /** The Label of GetShareObjectTypeById: the title is "Share " + the label. */
  shareObjectTypeLabel: string;
  /** IsLoading: the cards show their loading state. */
  isLoading: boolean;
  household: ShareObjectHousehold;
  communityBusiness: CommunityBusinessShareCard;
  /** The block ProfileList (instance `<scope>-$b8`) with its flows. */
  profileList: ReactNode;
  /** Placeholder BottomBar. */
  bottomBar?: ReactNode;
  /** Placeholder CommonUI_Elements. */
  commonUIElements?: ReactNode;
}

const TAG_CLASS =
  'font-size-0-75em text-align-left padding-x-xs padding-y-xs border-radius-soft background-neutral-2 text-neutral-6';
/** Extended style "color: #000; font-size: 0.8em;" of the tag expressions (captured dom/default.html). */
const TAG_STYLE = { color: 'rgb(0, 0, 0)', fontSize: '0.8em' };

/** The SignedURL of the community business card: the card's signed photo when Bucket, Path, Type and SignedPath are
    all set, else the "photo coming soon" image of Campus&Co or of OneSchool Global. */
function communityBusinessImage(card: CommunityBusinessShareCard, shareObjectTypeId: string): string {
  if (card.photoBucket !== '' && card.photoPath !== '' && card.photoType !== '' && card.photoSignedPath !== '') {
    return card.photoSignedPath;
  }
  return shareObjectTypeId === Type_ShareObject.CampusCo
    ? osImage('img/Connect2_LegacyShared.CampusCo_PhotoComingSoon.png')
    : osImage('img/Connect2_LegacyShared.OneSchool_PhotoComingSoon.png');
}

/** The layout with the back arrow and the title "Share " + the type label; the card of the shared object (a household,
    a Campus&Co or OneSchool Global business, or a feed item) and the ProfileList slot. Props only; the flows are in
    useShareObject. The ProfileList event Share is never raised, so HandleShareProfileList and
    DeferredHandleShareProfileList have no port.
    @origin Connect2_LegacyShared.Share_UI.ScreenBlock_ShareObject */
export function ShareObjectView({
  id,
  shareObjectTypeId,
  objectId,
  customTitle,
  shareObjectTypeLabel,
  isLoading,
  household,
  communityBusiness: cb,
  profileList,
  bottomBar,
  commonUIElements,
}: ShareObjectViewProps) {
  const scope = id.replace('$', '');

  const content = (
    <div className="padding" data-container="">
      <div className="border-radius-soft border-neutral-4" data-container="">
        {shareObjectTypeId === Type_ShareObject.Household && (
          <ResultItemImage
            id={`${scope}-Household_List_Item`}
            inShowDescription={household.description !== ''}
            inIsNavigationLoading={isLoading}
            showPlaceholderForImage
            inResultType={ResultListType.Household}
            inHasAction={false}
            inShowTag={household.tag !== ''}
            inHasBorder={false}
            imagePlaceholder={
              <EntityLazyImage
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
          <ResultItemImage
            id={`${scope}-CommunityBusiness_List_Item`}
            inType={cb.photoType}
            inShowTag={cb.countryName !== '' || cb.areasServed !== ''}
            inSignedURL={communityBusinessImage(cb, shareObjectTypeId)}
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
          <ResultItemImage
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
                {customTitle}
              </span>
            }
          />
        )}
      </div>
      <div className="margin-top-base" data-container="">
        {profileList}
      </div>
    </div>
  );

  return (
    <OSBlock name="Share_UI.ScreenBlock_ShareObject" id={id}>
      <LegacyLayout
        id={`${scope}-$b1`}
        headerLeft={<MenuIconBack id={`${scope}-$b2`} />}
        title={
          <div className="text-align-center" data-container="">
            <span data-expression="">{'Share ' + shareObjectTypeLabel}</span>
          </div>
        }
        content={content}
        bottomBar={<div id={`${scope}-BottomBar`}>{bottomBar}</div>}
        commonUIElements={<div id={`${scope}-CommonUI_Elements`}>{commonUIElements}</div>}
      />
    </OSBlock>
  );
}
