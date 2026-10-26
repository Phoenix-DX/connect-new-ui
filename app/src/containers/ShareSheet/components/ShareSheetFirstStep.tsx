/** @origin UBTConnect_Utils.CW_Share.ShareSheet */
import type { ReactNode } from 'react';
import { CircleButtonWithLabel } from '@/components/ui/CircleButtonWithLabel';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { Input } from '@/components/ui/Input';
import { Skeleton } from '@/components/ui/Skeleton';
import { Shape, UBT_Color as LibraryColor } from '@/lib/ubtConnectLibrary/staticEntities';
import type { SearchResult } from '@/lib/ubtConnectUtils/structures';
import {
  Connect_Entity,
  UBT_AvatarSize,
  UBT_Color,
  UBT_FontSize,
  UBT_ImageSize,
  UBT_Shape,
  UBT_Size,
} from '@/lib/ubtConnectUtils/staticEntities';
import { ShareSheetSection } from '@/components/share/ShareSheetSection';
import { ShareSheetSectionTitle } from '@/components/share/ShareSheetSectionTitle';
import { EntityLazyImage } from '@/components/ui/EntityLazyImage';
import { horizontalList, lastPadding, SEARCH_PROMPT } from '@/containers/ShareSheet/shareSheetState';

interface ShareSheetFirstStepProps {
  searchTerm: string;
  recentFetched: boolean;
  recentlyShared: SearchResult[];
  sharingRecentMemberId: string;
  onSearchFocus: () => void;
  onClickRecentMember: (item: SearchResult) => void;
  /** Placeholder_ShareableObject. */
  children?: ReactNode;
}

/** The first step of the sheet: the shareable object, the search box and the recently shared members. */
export function ShareSheetFirstStep({
  searchTerm,
  recentFetched,
  recentlyShared,
  sharingRecentMemberId,
  onSearchFocus,
  onClickRecentMember,
  children,
}: ShareSheetFirstStepProps) {
  return (
    <CustomContainer options={{ PaddingSize: { HorizontalSizeId: UBT_Size.Base } }}>
      <div
        className="connect-share-sheet__content__first-step display-flex flex-direction-column gap-base"
        data-container=""
      >
        <div data-container="">
          <CustomContainer
            options={{
              PaddingSize: { GeneralSizeId: UBT_Size.Small },
              BorderOptions: {
                Color: UBT_Color.Neutral5,
                Size: { GeneralSizeId: UBT_Size.Small },
                Radius: { GeneralSizeId: UBT_Shape.Large },
              },
            }}
          >
            <div>{children}</div>
          </CustomContainer>
        </div>
        <div className="sticky absolute-top connect-share-sheet__search background-neutral-0" data-container="">
          <CustomContainer
            extendedClasses="connect-share-sheet__search"
            options={{ Background: { BackgroundColor: LibraryColor.Neutral0 }, TextOptions: {} }}
          >
            <Input
              inOptions={{
                InitalString: searchTerm,
                SearchPrompt: SEARCH_PROMPT,
                Debounce_DelayMS: 300,
                BorderRadius: Shape.Rounded,
                FocusOnReady: false,
              }}
              onEventOnFocus={onSearchFocus}
            />
          </CustomContainer>
        </div>
        {!(recentFetched && recentlyShared.length === 0) && (
          <Skeleton isLoading={!recentFetched}>
            <ShareSheetSection
              placeholderTitle={
                <ShareSheetSectionTitle inLabel="Recently Shared" inFontSize={UBT_FontSize.DoubleExtraSmall} />
              }
              placeholderContent={
                <div className="negative-margin-right-base" data-container="">
                  <div className={`${horizontalList} OSFillParent`} data-list="">
                    {recentlyShared.map((item, index) => (
                      <CircleButtonWithLabel
                        key={`${item.Id ?? ''}-${String(index)}`}
                        borderColorId={sharingRecentMemberId === item.Id ? UBT_Color.Primary : LibraryColor.Transparent}
                        extendedClasses={lastPadding(index, recentlyShared.length)}
                        sizeId={UBT_AvatarSize.Small_40}
                        isProcessing={sharingRecentMemberId === item.Id}
                        onOnClick={() => {
                          onClickRecentMember(item);
                        }}
                        icon={
                          <EntityLazyImage
                            entityType={Connect_Entity.Member}
                            entityId={item.Id ?? ''}
                            imageSize={{ Height: UBT_ImageSize.Square, Width: UBT_ImageSize.Small_40 }}
                          />
                        }
                        text={<span data-expression="">{item.Name}</span>}
                      />
                    ))}
                  </div>
                </div>
              }
            />
          </Skeleton>
        )}
      </div>
    </CustomContainer>
  );
}
