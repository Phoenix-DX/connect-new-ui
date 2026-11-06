/* Static entity identifiers this route needs that the shared lib does not have yet. The compiled code holds only their
   names; values follow the class patterns of src/lib/ubtConnectLibrary (font-size-<id>, the class itself for
   icons) and exist in public/UBTConnect/css (shared static-entity convention). UBT_FlexDirection.Column and
   UBT_Shadow.ExtraSmallTop come from the shared lib. */

/** UBT_FontSize.Heading3: CustomText adds `font-size-<id>`; the original CSS has `.font-size-h3` (Base 'base', Small 's'). */
export const UBT_FontSize_Heading3 = 'h3';

/** UBT_Icons2 (Id = icon class, like Backspace 'connect-icon-backspace'); the original CSS `.connect-icon-checkbox`,
    `.connect-icon-checkbox_outline_blank`. */
export const UBT_Icons2_Checkbox = 'connect-icon-checkbox';
export const UBT_Icons2_CheckboxOutlineBlank = 'connect-icon-checkbox_outline_blank';

/** UBTConnect.Connect_Applications identifiers: the GUID texts of the TST records (static-entities-tst.json
    `UBTConnect.connect_Applications`, :2809). AcceptPendingPolicies sends TextToIdentifier of Connect, Directory and
    Orbit as PolicyApplications (AcceptPendingPolicies.mvc.js:374-386). Never rendered. */
export const Connect_Applications = {
  Connect: '65d96f75-9f71-42aa-8447-fd622aa09e7e',
  Directory: 'd8997dfa-7ae3-4eb1-bb48-0a14e151034a',
  Orbit: '4b033840-c133-4f0d-beb9-4c3659a9bc28',
} as const;
