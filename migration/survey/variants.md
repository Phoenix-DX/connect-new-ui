# Screen variants of UBTConnect

Screens whose names differ only by New_/Legacy_/V2-style markers. Decide with the product team which one is live on production (check the flags found in the shell's navigation handlers) and mark the others `skip` in routes.md.

## bookmarksbygroup
- `/UBTConnect/BookmarksByGroup` (from /UBTConnect/MyBookmarks) flags nearby: launchDarkly_FF.mobileDirectoryBookmarkNote, registeredCallbackEvents.onToggle
- `/UBTConnect/New_BookmarksByGroup` (from /UBTConnect/New_MyBookmarks) flags nearby: launchDarkly_FF.mobileDirectoryBookmarkNote
## ldm_email
- `/UBTConnect/LDM_Email` (from /UBTConnect/MessageDetail) flags nearby: launchDarkly_FF.mobileDirectoryBookmarkNote
- `/UBTConnect/LDM_Email_V2` (from /UBTConnect/MessageDetail) flags nearby: launchDarkly_FF.mobileDirectoryBookmarkNote
## ldm_eventdetail
- `/UBTConnect/LDM_EventDetail` (from /UBTConnect/LDM_MyEvents, /UBTConnect/MessageDetail, /UBTConnect/MyCalendar) flags nearby: launchDarkly_FF.mobileDirectoryBookmarkNote
- `/UBTConnect/LDM_EventDetail_V2` (from /UBTConnect/LDM_MyEvents, /UBTConnect/LDM_MyEvents_V2, /UBTConnect/MessageDetail) flags nearby: launchDarkly_FF.mobileDirectoryBookmarkNote
## ldm_myevents
- `/UBTConnect/LDM_MyEvents_V2` (from /UBTConnect/HomeFeed) flags nearby: launchDarkly_FF.mobileDirectoryBookmarkNote
- `/UBTConnect/LDM_MyEvents` (from /UBTConnect/HomeFeed) flags nearby: launchDarkly_FF.mobileDirectoryBookmarkNote
## mybookmarks
- `/UBTConnect/MyBookmarks` (from /UBTConnect/AssembleDetail, /UBTConnect/AssembleEvents, /UBTConnect/Bookmarks) flags nearby: launchDarkly_FF.mobileDirectoryBookmarkNote
- `/UBTConnect/New_MyBookmarks` (from /UBTConnect/AssembleDetail, /UBTConnect/AssembleEvents, /UBTConnect/Bookmarks) flags nearby: launchDarkly_FF.mobileDirectoryBookmarkNote
