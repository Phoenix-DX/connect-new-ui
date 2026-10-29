/* Static entities of Connect2_OrbitMobile_MUI used by the shared blocks. Values from
   migration/knowledge/static-entities-tst.json (TST moduleinfo), evidence per entry. */

/* ---- Wave 8, batch O-A1 (Skeleton_Loading, ListOfDaySelectors) ---- */

/** OrbitSkeletonLoading (Integer identifier; static-entities-tst.json `Connect2_OrbitMobile_MUI.orbitSkeletonLoading`):
    the In_SkeletonLoadingId of Skeleton_Loading, which picks the skeleton layout and its row count. */
export const OrbitSkeletonLoading = {
  OrbitLanding: 1,
  EventDetail: 2,
  MilestoneDetailHost: 3,
  MemberQRCode: 4,
  MilestoneWrapper: 5,
  TransportDetail: 6,
  SingleItem: 7,
  HostSurvey: 8,
  MilestoneDetailGuest: 9,
  AdminEventDetails: 10,
  HostSurveyHelpers: 11,
  EventBooklet: 12,
  ViewDocument: 13,
} as const;

/** MilestoneTimeType (Text identifier; static-entities-tst.json `Connect2_OrbitMobile_MUI.milestoneTimeType`): the
    first parameter of ListOfDaySelectors' ClickedDate (a day click passes DAY). */
export const MilestoneTimeType = { DAY: 'DAY', BEFORE: 'BEFORE', AFTER: 'AFTER' } as const;

/** TimeFormat (Integer identifier; static-entities-tst.json `Connect2_OrbitMobile_MUI.timeFormat`): the parts
    GetFormattedDate_Single writes. */
export const TimeFormat = { Year: 1, CalendarDate: 2, Month: 3, Day: 4, Weekday: 5 } as const;

/* ---- Wave 8, batch O-A2 (Card_Template, Card_Event, Card_Milestone) ---- */

/** OrbitColorShade (Text identifier; static-entities-tst.json `Connect2_OrbitMobile_MUI.orbitColorShade`): the shade
    number GetCSSVarFromMainColor appends to a main colour (`var(--orbit-<color>-<shade>)`). */
export const OrbitColorShade = {
  Color1: '1',
  Color2: '2',
  Color3: '3',
  Color4: '4',
  Color5: '5',
  Color6: '6',
  Color7: '7',
  Color8: '8',
  Color9: '9',
  Color10: '10',
} as const;

/** OrbitMilestoneType (Text identifier; static-entities-tst.json `Connect2_OrbitMobile_MUI.orbitMilestoneType`, TST
    moduleinfo entity 3cdbee62…): the Id of a milestone type. The live TST moduleinfo (version 15682) now holds the six
    Admin* records (decision Q2 (a) 2026-10-29 and (c) 2026-10-28: the live TST code wins). AdminMeal keeps the
    moduleinfo value `meeting-meal`, as the file lists it. */
export const OrbitMilestoneType = {
  AccommodationGuest: 'accommodation-guest',
  AccommodationHelper: 'accommodation-helper',
  AccommodationHost: 'accommodation-host',
  AccommodationHotel: 'accommodation-hotel',
  Boat: 'transport-boat',
  Break: 'break',
  Flight: 'transport-flight',
  Helper: 'helper-host',
  MealAtHall: 'meal-at-hall',
  MealGuest: 'meal-guest',
  MealHelper: 'meal-helper',
  MealHost: 'meal-host',
  MeetingGuest: 'meeting-guest',
  MeetingHost: 'meeting-host',
  Train: 'transport-train',
  Vehicle: 'transport-vehicle',
  AdminMeeting: 'meeting-admin',
  AdminMeal: 'meeting-meal',
  AdminMealAtHall: 'meal-at-hall-admin',
  AdminAccommodation: 'accommodation-admin',
  AdminTransportVehicle: 'transport-vehicle-admin',
  AdminBreak: 'break-admin',
} as const satisfies Record<string, string | undefined>;

/** OrbitCardColor (Text identifier; static-entities-tst.json `Connect2_OrbitMobile_MUI.orbitCardColor`): the main
    colours of the Orbit cards (MainColorVar of the event / milestone types). */
export const OrbitCardColor = { Green: 'green', Orange: 'orange', Purple: 'purple' } as const;

/* ---- Wave 8, batch O-A2, part b (Card_MemberInformation, MilestoneHeader, HostSurvey_PillItem, EventDetail_SubSection) ---- */

/** DirectoryAPIFilter (Text identifier; static-entities-tst.json `Connect2_OrbitMobile_MUI.directoryAPIFilter`): the
    type Card_MemberInformation passes to GetCacheableSignedImageURL (never rendered). */
export const DirectoryAPIFilter = {
  Household: 'Household',
  Locality: 'Locality',
  Member: 'Member',
  Subdivision: 'Subdivision',
} as const;

/** ImageSigningSize (Text identifier; static-entities-tst.json `Connect2_OrbitMobile_MUI.imageSigningSize`): the size
    Card_MemberInformation passes to GetCacheableSignedImageURL (never rendered). */
export const ImageSigningSize = { Large: 'Large', Medium: 'Medium', Small: 'Small' } as const;
