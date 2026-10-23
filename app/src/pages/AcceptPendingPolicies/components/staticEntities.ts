/* Static entity identifiers this route needs that the shared lib does not have yet. The compiled code holds only their
   names; values follow the class patterns of src/shared/UBTConnectLibrary/lib (font-size-<id>, shadow-<id>, the class
   itself for icons and flex direction) and exist in public/UBTConnect/css (shared static-entity convention). */

/** UBT_FontSize.Heading3: CustomText adds `font-size-<id>`; the original CSS has `.font-size-h3` (Base 'base', Small 's'). */
export const UBT_FontSize_Heading3 = 'h3';

/** UBT_FlexDirection.Column: Id = class, like RowReverse 'flex-direction-row-reverse'; the original CSS `.flex-direction-column`. */
export const UBT_FlexDirection_Column = 'flex-direction-column';

/** UBT_Icons2 (Id = icon class, like Backspace 'connect-icon-backspace'); the original CSS `.connect-icon-checkbox`,
    `.connect-icon-checkbox_outline_blank`. */
export const UBT_Icons2_Checkbox = 'connect-icon-checkbox';
export const UBT_Icons2_CheckboxOutlineBlank = 'connect-icon-checkbox_outline_blank';

/** UBT_Shadow.ExtraSmallTop: CustomContainer adds `shadow-<id>`; the original CSS `.shadow-xs-top`. */
export const UBT_Shadow_ExtraSmallTop = 'xs-top';

/** Connect_Applications identifiers: only sent to DataActionGetPendingPolicies, never rendered, values not in the
    compiled code: opaque constants. */
export const Connect_Applications = {
  Connect: 'Connect_Applications.Connect',
  Directory: 'Connect_Applications.Directory',
  Orbit: 'Connect_Applications.Orbit',
} as const;
