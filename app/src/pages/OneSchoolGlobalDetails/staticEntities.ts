/* Identifiers the route needs that the shared constants do not hold. Values: TST
   (migration/knowledge/static-entities-tst.json) or the compiled structure defaults, as noted. */

/** UBTConnectLibrary.uBT_Icons expandMore (TST value): ExpandableSection's title icon, captured
    `connect-icon-expand_more` (dom/default.html:500). */
export const UBT_Icons_ExpandMore = 'connect-icon-expand_more';

/** Type_OneschoolGlobal_SubsectionRec attribute defaults (UBTConnect.model.js:194-198, raw copy in
    analysis/sources/raw): the two ButtonGroup values, captured "Upcoming events" / "About our campus"
    (dom/default.html:516-524). */
export const Type_OneschoolGlobal_Subsection = {
  UpcomingEvents: 'Upcoming events',
  AboutOurCampus: 'About our campus',
} as const;

/** launchDarkly_FF.mobileStudentInformation (UBTConnect), read through the flag store (P-FLAGS; decision default-only,
    TST value on). */
export const FLAG_MobileStudentInformation = 'mobileStudentInformation';
