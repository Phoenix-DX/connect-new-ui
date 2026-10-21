// @os-block UBTConnectLibrary.ConnectCorePatterns.ActionsMenu
import { useState } from 'react';
import { OSBlock } from '../../../components/OSBlock';
import { CircleButton_IconPrimary } from '../CircleButton_IconPrimary';
import { CustomContainer } from '../CustomContainer';
import { ACTIONS_MENU_ENABLE_OPTIONS_DEFAULT, getLookupActions } from '../lib/actions';
import { UBT_Display, UBT_JustifyContent } from '../lib/staticEntities';
import type { ActionsMenuEnableOptions, ActionsMenuOptions } from './types';

export interface ActionsMenuProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** In_ActionsMenuOptions: which buttons show (all False by default). */
  inActionsMenuOptions?: ActionsMenuOptions;
  /** In_ActionsEnableOptions: which buttons are enabled (record default: Notes and Gift disabled). */
  inActionsEnableOptions?: ActionsMenuEnableOptions;
  /** IsEnabled: False disables every button (default true). */
  isEnabled?: boolean;
  /** InShowLabels: label under each circle (default true). */
  inShowLabels?: boolean;
  /** Event Event_Click_Bookmark. */
  onEventClickBookmark?: () => void;
  /** Event Event_Click_Unbookmark. */
  onEventClickUnbookmark?: () => void;
  /** Event Event_Click_Call. */
  onEventClickCall?: () => void;
  /** Event Event_Click_Email. */
  onEventClickEmail?: () => void;
  /** Event Event_Click_Notes. */
  onEventClickNotes?: () => void;
  /** Event Event_Click_Gift. */
  onEventClickGift?: () => void;
  /** Event Event_Click_Share. */
  onEventClickShare?: () => void;
  /** Event Event_Click_ViewDetails. */
  onEventClickViewDetails?: () => void;
}

/** Actions menu (UBTConnectLibrary.ConnectCorePatterns.ActionsMenu.mvc.js view, HouseholdCarousel copy): CustomContainer
    `ubt-actions-menu` (display flex, space between) with one CircleButton_IconPrimary per Has* option in the order
    Bookmark, Unbookmark, Call, Email, Notes, Gift, Share, ViewDetails; enabled = IsEnabled and the Enable* option
    (Unbookmark uses EnableBookmark); text = the GetLookupActions label when InShowLabels, else "". OnInitialize runs
    GetLookupActions (controller). */
export function ActionsMenu({
  id,
  inActionsMenuOptions = {},
  inActionsEnableOptions = ACTIONS_MENU_ENABLE_OPTIONS_DEFAULT,
  isEnabled = true,
  inShowLabels = true,
  onEventClickBookmark,
  onEventClickUnbookmark,
  onEventClickCall,
  onEventClickEmail,
  onEventClickNotes,
  onEventClickGift,
  onEventClickShare,
  onEventClickViewDetails,
}: ActionsMenuProps) {
  const [lookupActions] = useState(getLookupActions);
  return (
    <OSBlock name="ConnectCorePatterns.ActionsMenu" id={id}>
      <CustomContainer
        extendedClasses="ubt-actions-menu"
        options={{
          PaddingSize: {},
          DisplayOptions: { Display: UBT_Display.Flex, JustifyContent: UBT_JustifyContent.SpaceBetween },
        }}
      >
        {inActionsMenuOptions.HasBookmark === true && (
          <CircleButton_IconPrimary
            isEnabled={isEnabled && inActionsEnableOptions.EnableBookmark === true}
            iconId={lookupActions.Bookmark.Icon}
            text={inShowLabels ? lookupActions.Bookmark.Singular : ''}
            onOnClick={onEventClickBookmark}
          />
        )}
        {inActionsMenuOptions.HasUnbookmark === true && (
          <CircleButton_IconPrimary
            isEnabled={isEnabled && inActionsEnableOptions.EnableBookmark === true}
            iconId={lookupActions.Unbookmark.Icon}
            text={inShowLabels ? lookupActions.Unbookmark.Singular : ''}
            onOnClick={onEventClickUnbookmark}
          />
        )}
        {inActionsMenuOptions.HasCall === true && (
          <CircleButton_IconPrimary
            isEnabled={isEnabled && inActionsEnableOptions.EnableCall === true}
            iconId={lookupActions.Call.Icon}
            text={inShowLabels ? lookupActions.Call.Singular : ''}
            onOnClick={onEventClickCall}
          />
        )}
        {inActionsMenuOptions.HasEmail === true && (
          <CircleButton_IconPrimary
            isEnabled={isEnabled && inActionsEnableOptions.EnableEmail === true}
            iconId={lookupActions.Email.Icon}
            text={inShowLabels ? lookupActions.Email.Singular : ''}
            onOnClick={onEventClickEmail}
          />
        )}
        {inActionsMenuOptions.HasNotes === true && (
          <CircleButton_IconPrimary
            isEnabled={isEnabled && inActionsEnableOptions.EnableNotes === true}
            iconId={lookupActions.Notes.Icon}
            text={inShowLabels ? lookupActions.Notes.Singular : ''}
            onOnClick={onEventClickNotes}
          />
        )}
        {inActionsMenuOptions.HasGift === true && (
          <CircleButton_IconPrimary
            isEnabled={isEnabled && inActionsEnableOptions.EnableGift === true}
            iconId={lookupActions.Gift.Icon}
            text={inShowLabels ? lookupActions.Gift.Singular : ''}
            onOnClick={onEventClickGift}
          />
        )}
        {inActionsMenuOptions.HasShare === true && (
          <CircleButton_IconPrimary
            isEnabled={isEnabled && inActionsEnableOptions.EnableShare === true}
            iconId={lookupActions.Share.Icon}
            text={inShowLabels ? lookupActions.Share.Singular : ''}
            onOnClick={onEventClickShare}
          />
        )}
        {inActionsMenuOptions.HasViewDetails === true && (
          <CircleButton_IconPrimary
            isEnabled={isEnabled && inActionsEnableOptions.EnableViewDetails === true}
            iconId={lookupActions.ViewDetails.Icon}
            text={inShowLabels ? lookupActions.ViewDetails.Singular : ''}
            onOnClick={onEventClickViewDetails}
          />
        )}
      </CustomContainer>
    </OSBlock>
  );
}
