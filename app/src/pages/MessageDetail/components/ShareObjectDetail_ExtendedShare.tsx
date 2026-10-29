import { CustomContainer } from '@/components/ui/CustomContainer';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { Skeleton } from '@/components/ui/Skeleton';
import { ShareableObject } from '@/components/share/ShareableObject';
import { UpdateListItem } from '@/components/feed/UpdateListItem';
import { UBT_Color, UBT_Shape, UBT_Size } from '@/lib/ubtConnectLibrary/staticEntities';
import { Type_ShareObject } from '@/lib/ubtConnect/staticEntities';
import { isUnavailableShare } from '@/pages/MessageDetail/hooks/shareObjectDetailState';
import {
  useShareObjectDetail,
  type ShareObjectDetailEvents,
  type ShareObjectDetailInputs,
} from '@/pages/MessageDetail/hooks/useShareObjectDetail';
import { EmptyShareDetailCard_ExtendedFlow } from './EmptyShareDetailCard_ExtendedFlow';
import { FreeSubscriptionActionDialog } from '@/containers/FreeSubscriptionActionDialog';

/** The shared item of a Sharing message (flag C2ExtendedShare True): a CustomContainer with the "link is unavailable"
    card, or the Update_ListItem of an Update or the ShareableObject_Generic card in a SkeletonSection while GetShare
    loads; then the closed FreeSubscriptionAlert dialog. Its flows are in `useShareObjectDetail`. The block raises
    GoToObjectDetail and SubscriptionDenied; it declares SetFeedItemId but never raises it, and its Placeholder_FeedItem
    gets the screen's empty Placeholder_FeedItem2.
    @origin Connect2_LegacyShared.Share_UI.ShareObjectDetail_ExtendedShare */

interface ShareObjectDetail_ExtendedShareProps extends ShareObjectDetailEvents {
  /** OutSystems instance id of the block (`b1-$b5`). */
  id: string;
  /** Prefix of the block's children (`b1-b5`). */
  prefix: string;
  inputs: ShareObjectDetailInputs;
}

export function ShareObjectDetail_ExtendedShare({
  id,
  prefix,
  inputs,
  ...events
}: ShareObjectDetail_ExtendedShareProps) {
  const { state, onClickShareDetail } = useShareObjectDetail(inputs, events);
  const { share, shareableObject, shareableUpdateItem: item } = state;
  return (
    <OSBlock name="Share_UI.ShareObjectDetail_ExtendedShare" id={id}>
      <CustomContainer
        id={`${prefix}-$b1`}
        extendedClasses="connect-legacy-compatibily-containter connect-legacy-compatibily-containter--spacing"
        options={{
          PaddingSize: { GeneralSizeId: UBT_Size.Small },
          MarginSize: { TopSizeId: UBT_Size.Base },
          BorderOptions: {
            Color: UBT_Color.Neutral5,
            Size: { GeneralSizeId: UBT_Size.Small },
            Radius: { GeneralSizeId: UBT_Shape.Large },
          },
        }}
      >
        {share !== null && isUnavailableShare(share) ? (
          <EmptyShareDetailCard_ExtendedFlow
            id={`${prefix}-$b2`}
            prefix={`${prefix}-b2`}
            shareObjectTypeId={share.shareObjectTypeId}
            title={<span data-expression="">{`This ${share.shareObjectTypeLabel} link is unavailable`}</span>}
          />
        ) : (
          <Skeleton id={`${prefix}-$b3`} isLoading={share === null}>
            {share?.shareObjectTypeId === Type_ShareObject.Update ? (
              <UpdateListItem
                id={`${prefix}-$b4`}
                inDate={item.date ?? undefined}
                inIsRead={false}
                hasBorderBottom={false}
                ignoreReadBackground
                inInitialsList={[{ Gender: item.genderId }]}
                inName={item.name}
                isEnabled={false}
                inTypeUpdateFeedItem={item.updateItemTypeId}
                inParentsNames={item.parentsNames}
                inBirthType={item.birthType}
                showImage={false}
                inLocation={item.locationString}
                onOnClick={onClickShareDetail}
              />
            ) : (
              <ShareableObject
                id={`${prefix}-$b5`}
                inShareableObject={shareableObject}
                onEventOnClick={onClickShareDetail}
              />
            )}
          </Skeleton>
        )}
      </CustomContainer>
      <FreeSubscriptionActionDialog id={`${prefix}-FreeSubscriptionAlert`} />
    </OSBlock>
  );
}
