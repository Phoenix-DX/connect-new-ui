/* Static entity identifiers this route needs that the shared lib does not have yet. The compiled code holds only their
   names; values follow the class patterns of src/shared/UBTConnectLibrary/lib (font-size-<id>, the class itself for
   icons) and exist in public/UBTConnect/css (shared static-entity convention). UBT_FlexDirection.Column and
   UBT_Shadow.ExtraSmallTop come from the shared lib. */

/** UBT_FontSize.Heading3: CustomText adds `font-size-<id>`; the original CSS has `.font-size-h3` (Base 'base', Small 's'). */
export const UBT_FontSize_Heading3 = 'h3';

/** UBT_Icons2 (Id = icon class, like Backspace 'connect-icon-backspace'); the original CSS `.connect-icon-checkbox`,
    `.connect-icon-checkbox_outline_blank`. */
export const UBT_Icons2_Checkbox = 'connect-icon-checkbox';
export const UBT_Icons2_CheckboxOutlineBlank = 'connect-icon-checkbox_outline_blank';

/** Connect_Applications identifiers: only sent to DataActionGetPendingPolicies, never rendered, values not in the
    compiled code: opaque constants. */
export const Connect_Applications = {
  Connect: 'Connect_Applications.Connect',
  Directory: 'Connect_Applications.Directory',
  Orbit: 'Connect_Applications.Orbit',
} as const;
