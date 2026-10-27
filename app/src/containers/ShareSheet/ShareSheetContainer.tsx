/** @origin UBTConnect_Utils.CW_Share.ShareSheet */
// @os-block UBTConnect_Utils.CW_Share.ShareSheet
import { OSBlock } from '@/components/ui/os/OSBlock';
import { PreventBackNavigation } from '@/platform/navigation/PreventBackNavigation';
import { ConnectBottomSheet } from '@/components/ui/ConnectBottomSheet';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { UBT_ButtonSize, UBT_ButtonType, UBT_Color as LibraryColor } from '@/lib/ubtConnectLibrary/staticEntities';
import { ActionButton } from '@/components/ui/ActionButton';
import { UBT_Color, UBT_Shape, UBT_Size } from '@/lib/ubtConnectUtils/staticEntities';
import { ShareSheetFirstStep } from './components/ShareSheetFirstStep';
import { ShareSheetSearchStep } from './components/ShareSheetSearchStep';
import type { ShareSheetContainerProps } from './types';
import { useShareSheet } from './useShareSheet';

/** Share sheet: closed in every capture (empty root, BookmarksByGroup/default). The open sheet is ported from the
    compiled view (ShareSheet.mvc.js:316-1891) and controller (:1892-3585); server data and actions in `api.ts`. */
export function ShareSheetContainer({
  id,
  inIsOpen = false,
  inShareObjectTypeId = '',
  inShareableObjectId = '',
  inIsLegacy = false,
  inUpdateType = '',
  inUpdateDate = '1900-01-01',
  onEventClosedShareSheet,
  children,
}: ShareSheetContainerProps) {
  const {
    sheetBlockId,
    isOpen,
    isOpenRef,
    onClosed,
    onInitialized,
    resetAndCloseSheetState,
    onBack,
    onSearchFocus,
    onClearString,
    onSubmit,
    sharingRecentMemberId,
    isSearchStep,
    isSearching,
    searchTerm,
    selectedMembers,
    recentFetched,
    availableFetched,
    recentlyShared,
    searchResultItemList,
    isSelected,
    onClickRecentMember,
    onClickUpgradeSubscription,
    onSelect,
    onClickSelected,
    onClickSend,
    isSharing,
  } = useShareSheet({
    inIsOpen,
    inShareObjectTypeId,
    inShareableObjectId,
    inUpdateType,
    inUpdateDate,
    onEventClosedShareSheet,
  });

  return (
    <OSBlock name="CW_Share.ShareSheet" id={id}>
      {isOpen && (
        <ConnectBottomSheet
          id={sheetBlockId}
          extendedClasses={
            'connect-share-sheet background-neutral-2 ubt-bottom-sheet--dynamic-height' +
            (isSearchStep ? ' ubt-bottom-sheet--full-height' : '') +
            (inIsLegacy ? ' connect-share-sheet--legacy' : '')
          }
          footerHeight={isSearching ? '0px' : 'auto'}
          showHeader
          title={`Share ${inShareObjectTypeId}`}
          contentBackgroundColorId={UBT_Color.Neutral2}
          showBackButton={isSearchStep}
          contentPadding={{ GeneralSizeId: UBT_Size.None, HorizontalSizeId: UBT_Size.None }}
          onInitialized={onInitialized}
          onOnClose={resetAndCloseSheetState}
          onOnToggle={(event_IsOpen) => {
            // Handler_BottomSheetOnToggle (:2760-2808): closed while IsOpen → reset and close.
            if (!event_IsOpen && isOpenRef.current) resetAndCloseSheetState();
          }}
          onOnBack={onBack}
          content={
            <CustomContainer
              options={{
                Background: { BackgroundColor: LibraryColor.Neutral0 },
                PaddingSize: { VerticalSizeId: UBT_Size.Base },
                MarginSize: { HorizontalSizeId: UBT_Size.Small },
                BorderOptions: { Radius: { GeneralSizeId: UBT_Shape.Medium } },
              }}
            >
              <div
                className={
                  'connect-share-sheet__results text-align-left connect-share-sheet__content ' +
                  (isSharing ? 'connect-share-sheet__content--processing' : '')
                }
                data-container=""
              >
                {!isSearchStep && (
                  <ShareSheetFirstStep
                    searchTerm={searchTerm}
                    recentFetched={recentFetched}
                    recentlyShared={recentlyShared}
                    sharingRecentMemberId={sharingRecentMemberId}
                    onSearchFocus={onSearchFocus}
                    onClickRecentMember={onClickRecentMember}
                  >
                    {children}
                  </ShareSheetFirstStep>
                )}
                {isSearchStep && (
                  <ShareSheetSearchStep
                    searchTerm={searchTerm}
                    isSearching={isSearching}
                    recentFetched={recentFetched}
                    availableFetched={availableFetched}
                    selectedMembers={selectedMembers}
                    searchResultItemList={searchResultItemList}
                    isSelected={isSelected}
                    onSearchFocus={onSearchFocus}
                    onClearString={onClearString}
                    onSubmit={onSubmit}
                    onClickSelected={onClickSelected}
                    onSelect={onSelect}
                    onClickUpgradeSubscription={onClickUpgradeSubscription}
                  />
                )}
              </div>
            </CustomContainer>
          }
          footer={
            <CustomContainer
              options={{
                Background: { BackgroundColor: LibraryColor.Neutral0 },
                PaddingSize: { GeneralSizeId: UBT_Size.Base },
              }}
            >
              {isSearchStep ? (
                <ActionButton
                  isDisabled={selectedMembers.length === 0}
                  buttonText="Send"
                  buttonOptions={{ UBT_ButtonSizeId: UBT_ButtonSize.Small }}
                  onButtonOnClick={onClickSend}
                />
              ) : (
                <ActionButton
                  buttonText="Cancel"
                  buttonOptions={{ UBT_ButtonSizeId: UBT_ButtonSize.Small, UBT_ButtonTypeId: UBT_ButtonType.Tertiary }}
                  onButtonOnClick={() => onClosed.current?.()}
                />
              )}
            </CustomContainer>
          }
        />
      )}
      {isOpen && <PreventBackNavigation onBackNavigationPrevented={onBack} />}
    </OSBlock>
  );
}
