/* Static entity values the Services screen needs that the shared lib files do not hold. Each value is the text the
   blocks write into a class: TST values (migration/knowledge/static-entities-tst.json, UBTConnect.*), all of them
   captured in dom/default.html. */

/** UBT_Icons2 (Id = icon class): dragIndicator `connect-icon-drag_indicator` (dom:69), addCircle
    `connect-icon-add_circle` (dom:613), cancelFill `connect-icon-cancel_fill` (dom:354). */
export const UBT_Icons2 = {
  DragIndicator: 'connect-icon-drag_indicator',
  AddCircle: 'connect-icon-add_circle',
  CancelFill: 'connect-icon-cancel_fill',
} as const;

/** UBT_Color neutral1: `background-neutral-1` (drag handle, dom:68). */
export const UBT_Color_Neutral1 = 'neutral-1';

/** UBT_FontSize heading6: `font-size-h6` ("Favourites", dom:44). */
export const UBT_FontSize_Heading6 = 'h6';

/** UBT_Shadow extraSmallTop: `shadow-xs-top` (footer container, dom:784). */
export const UBT_Shadow_ExtraSmallTop = 'xs-top';

/** UBT_MessageType success: FeedbackMessage_AutoClose type of "Your changes were saved." (Services.mvc.js:1310). */
export const UBT_MessageType_Success = 'success';
