import type { FlagKey } from '@/platform/flags';

/* OutSystems names of the feature flags of the registry (platform/flags), for the parity tools and the specs (plan v2
   §3.1 rule 5): the UBTConnect_Utils helper that returns the flag (`action:getHas…`) or the OutSystems_FF /
   LaunchDarkly_FF record that the code checks directly. The values are the `source` of flags.generated.json (flags.py
   notation; migration/knowledge/feature-flag-helpers.md). The app code reads the flags through platform/flags only. */
export const FLAG_OS_NAMES = {
  mobileAssemble: 'action:getHasAssemble',
  mobileDirectoryBookmarkNote: 'launchDarkly_FF.mobileDirectoryBookmarkNote',
  C2EnableC1DirectoryView: 'action:getHasC1DirectoryView',
  C2EnableCarousel: 'action:getHasCarouselEnabled',
  C2EnableCustomServices: 'action:getHasCustomEvents',
  mobileDirectoryUpdateFeedDeceasedProfile: 'action:getHasDeceasedProfileAccess',
  C2ExtendedShare: 'action:getHasExtendedShare',
  C2EnableFeed: 'action:getHasFeedEnabled',
  C2EnableMaps: 'action:getHasMapsEnabled',
  C2NewBookmarks: 'action:getHasNewBookmarks',
  C2NewLDM: 'action:getHasNewLDM',
  C2NewNotifications: 'action:getHasNewNotifications',
  mobileOrbitAccess: 'action:getHasOrbitAccess',
  getHasOrbitEventBooklet: 'action:getHasOrbitEventBooklet',
  mobileOrbitHostSurvey: 'action:getHasOrbitHostSurvey',
  mobilePhotobook: 'action:getHasPhotobookAccess',
  WalletAccess: 'action:getHasWalletAccess',
  mobileOrbitEventBooklet: 'launchDarkly_FF.mobileOrbitEventBooklet',
  mobileStudentInformation: 'launchDarkly_FF.mobileStudentInformation',
  C2EnableSearchByBirthday: 'outSystems_FF.c2EnableSearchByBirthday',
  // not in flags.generated.json: migration/flags.json key, checked directly in UBTConnect.controller.js (Locality_Details)
  mobileDirectoryLocalityContacts: 'launchDarkly_FF.mobileDirectoryLocalityContacts',
} as const satisfies Record<FlagKey, string>;
