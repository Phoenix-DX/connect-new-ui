/* The feature flags of the app (plan v2 §3.1), one entry per flag. Generated once from flags.generated.json in step
   P4-5 (the user's decisions, written by `flags.py export`), then kept by hand: a new flag, a new default or a removed
   flag changes this file. migration/knowledge/feature-flag-helpers.md has the OutSystems evidence, and
   legacy/os/flagNames.ts has the OutSystems name of each flag.
   - default: the decided value (flags.generated.json "default": on is true, off is false).
   - source: `server` for a per-user flag that the server decides (the OutSystems helpers return HasAccess of
     Connect_OutSystems_PermissionCheck or Connect_LaunchDarkly_PermissionCheck); `build` for a value that the code
     fixes (GetHasWalletAccess is a constant False).
   - kind, owner, removeBy: null until the user sets them; the decisions do not give them. The flag check of step P9-2
     needs removeBy.
   - routes: the routes that read the flag (flags.generated.json "routes").
   mobileDirectoryLocalityContacts is not in flags.generated.json: its decision is a route decision (Locality_Details Q2,
   default-only off, 2026-10-15), and Locality_Details reads it. */

export type FlagKind = 'release' | 'permission' | 'ops';

export interface FlagDefinition {
  description: string;
  kind: FlagKind | null;
  source: 'server' | 'build';
  default: boolean;
  owner: string | null;
  /** An ISO date (yyyy-mm-dd) or `permanent`. */
  removeBy: string | null;
  routes: readonly string[];
}

/** The routes of the directory that read the directory flags (flags.generated.json). */
const DIRECTORY_ROUTES = [
  'AssembleDetail',
  'AssembleEvents',
  'Bookmarks',
  'BrowseCountries',
  'BrowseDirectory',
  'CommunityBusinessDetails',
  'CountryDetails',
  'CountryList',
  'EmailContact',
  'EmailTarget',
  'HomeFeed',
  'HouseholdCarousel',
  'HouseholdDetails',
  'Household_Relations',
  'InvalidPermissions',
  'LDM_Email',
  'LDM_Email_V2',
  'LDM_EventDetail',
  'LDM_EventDetail_V2',
  'LDM_MyEvents',
  'LDM_MyEvents_V2',
  'Locality_Details',
  'Map',
  'Menu',
  'MessageDetail',
  'MessageList',
  'Notes',
  'Notifications',
  'OneSchoolGlobalDetails',
  'OrbitAdminEventDetail',
  'OrbitAdminLanding',
  'OrbitLanding',
  'Search',
  'Updates_SingleList',
] as const;

/** Not decided yet: kind, owner and removeBy (see the header). */
const UNSET = { kind: null, owner: null, removeBy: null } as const;

export const FLAGS = {
  mobileAssemble: {
    description: 'Assemble access (GetHasAssemble), read by the MyNotifications flow.',
    ...UNSET,
    source: 'server',
    default: true,
    routes: ['MessageDetail'],
  },
  mobileDirectoryBookmarkNote: {
    description:
      'Bookmark notes (GetHasBookmarNote). With C2NewBookmarks off, the Bookmarks tab opens New_MyBookmarks when on and ' +
      'MyBookmarks when off (D2).',
    ...UNSET,
    source: 'server',
    default: false,
    routes: DIRECTORY_ROUTES,
  },
  C2EnableC1DirectoryView: {
    description:
      'C1 directory view (GetHasC1DirectoryView): the Directory tab opens CountryList when on and Locality_Details ' +
      'when off.',
    ...UNSET,
    source: 'server',
    default: true,
    routes: DIRECTORY_ROUTES,
  },
  C2EnableCarousel: {
    description:
      'Carousels (GetHasCarouselEnabled): a household opens in HouseholdCarousel when on and in HouseholdDetails when ' +
      'off; a subdivision opens in SupperMeeting_Carousel or SupperMeeting_Details.',
    ...UNSET,
    source: 'server',
    default: true,
    routes: [
      'AssembleDetail',
      'HomeFeed',
      'HouseholdCarousel',
      'LDM_EventDetail',
      'LDM_EventDetail_V2',
      'LDM_MyEvents',
      'LDM_MyEvents_V2',
      'Locality_Details',
      'Map',
      'Photobook',
      'Search',
      'SupperMeeting_Carousel',
      'SupperMeeting_Details',
      'Updates_SingleList',
    ],
  },
  C2EnableCustomServices: {
    description: 'Custom services of HomeFeed (GetHasCustomEvents).',
    ...UNSET,
    source: 'server',
    default: true,
    routes: ['HomeFeed'],
  },
  mobileDirectoryUpdateFeedDeceasedProfile: {
    description:
      'Deceased profiles in the update feed (GetHasDeceasedProfileAccess), read by the MyNotifications flow and the ' +
      'share UI.',
    ...UNSET,
    source: 'server',
    default: true,
    routes: ['MessageDetail'],
  },
  C2ExtendedShare: {
    description: 'Extended share (GetHasExtendedShare): the share options of the share UI.',
    ...UNSET,
    source: 'server',
    default: true,
    routes: [
      'AssembleDetail',
      'FeedItemDetail',
      'HomeFeed',
      'HouseholdCarousel',
      'HouseholdDetails',
      'Locality_Details',
      'Map',
      'MessageDetail',
      'OneSchoolGlobalDetails',
      'Profile',
      'SupperMeeting_Carousel',
      'SupperMeeting_Details',
      'Updates_SingleList',
    ],
  },
  C2EnableFeed: {
    description: 'The Feed CMS embed of HomeFeed (GetHasFeedEnabled).',
    ...UNSET,
    source: 'server',
    default: true,
    routes: ['FeedItemDetail', 'HomeFeed', 'MessageDetail'],
  },
  C2EnableMaps: {
    description: 'Maps (GetHasMapsEnabled), read by Locality_Details.',
    ...UNSET,
    source: 'server',
    default: false,
    routes: ['Locality_Details'],
  },
  C2NewBookmarks: {
    description:
      'New bookmarks (GetHasNewBookmarks): the Bookmarks tab opens Bookmarks when on (D2), and the C2 local bookmarks ' +
      'are used.',
    ...UNSET,
    source: 'server',
    default: false,
    routes: [...DIRECTORY_ROUTES, 'Profile', 'SupperMeeting_Carousel', 'SupperMeeting_Details'],
  },
  C2NewLDM: {
    description:
      'New LDM (GetHasNewLDM): the LDM service opens the V2 screens when on and the V1 screens when off (D1).',
    ...UNSET,
    source: 'server',
    default: true,
    routes: ['HomeFeed', 'LDM_MyEvents', 'MessageDetail', 'MyCalendar'],
  },
  C2NewNotifications: {
    description:
      'New notifications (GetHasNewNotifications): the bell opens Notifications when on and MessageList when off (D11).',
    ...UNSET,
    source: 'server',
    default: false,
    routes: ['Bookmarks', 'CountryList', 'HomeFeed', 'MessageDetail', 'Notes', 'Updates_SingleList'],
  },
  mobileOrbitAccess: {
    description: 'Orbit access (GetHasOrbitAccess), read by the Orbit screens.',
    ...UNSET,
    source: 'server',
    default: true,
    routes: [
      'EmailContact',
      'EventDetail',
      'GuestArrangements',
      'HelpersDetail',
      'MessageDetail',
      'MilestoneDetail',
      'OrbitLanding',
      'TransportDetail',
      'ViewDocuments',
    ],
  },
  getHasOrbitEventBooklet: {
    description: 'The helper GetHasOrbitEventBooklet, which reads mobileOrbitEventBooklet (EventDetail).',
    ...UNSET,
    source: 'server',
    default: true,
    routes: ['EventDetail'],
  },
  mobileOrbitHostSurvey: {
    description: 'Orbit host survey (GetHasOrbitHostSurvey), read by EventDetail and the Orbit static entities.',
    ...UNSET,
    source: 'server',
    default: true,
    routes: ['EventDetail', 'MessageDetail'],
  },
  mobilePhotobook: {
    description: 'Photobook access (GetHasPhotobookAccess), read by the household details.',
    ...UNSET,
    source: 'server',
    default: true,
    routes: ['HouseholdCarousel', 'HouseholdDetails', 'Locality_Details', 'Profile', 'SupperMeeting_Carousel'],
  },
  WalletAccess: {
    description: 'Wallet access (GetHasWalletAccess, a constant False in OutSystems).',
    ...UNSET,
    source: 'build',
    default: false,
    routes: ['AssembleDetail'],
  },
  mobileOrbitEventBooklet: {
    description: 'The Orbit event booklet entry of EventDetail.',
    ...UNSET,
    source: 'server',
    default: true,
    routes: [],
  },
  mobileStudentInformation: {
    description: 'The student information section of OneSchoolGlobalDetails.',
    ...UNSET,
    source: 'server',
    default: true,
    routes: ['OneSchoolGlobalDetails'],
  },
  C2EnableSearchByBirthday: {
    description: 'Search by birthday in Search.',
    ...UNSET,
    source: 'server',
    default: true,
    routes: ['Map', 'Search'],
  },
  mobileDirectoryLocalityContacts: {
    description: 'The Locality Contacts filter tag of Locality_Details.',
    ...UNSET,
    source: 'server',
    default: false,
    routes: ['Locality_Details'],
  },
} as const satisfies Readonly<Record<string, FlagDefinition>>;
