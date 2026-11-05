# Screen variants of UBTConnect

Screens whose names differ only by New_/Legacy_/V2-style markers. Decide with the product team which one is live on production (check the flags found in the shell's navigation handlers) and mark the others `skip` in routes.md.

## ldm_email
- `/UBTConnect/LDM_Email` (from /UBTConnect/MessageDetail, /UBTConnect/NotificationDetails) flags nearby: -
- `/UBTConnect/LDM_Email_V2` (from /UBTConnect/MessageDetail, /UBTConnect/NotificationDetails) flags nearby: -
## ldm_eventdetail
- `/UBTConnect/LDM_EventDetail` (from /UBTConnect/LDM_MyEvents, /UBTConnect/MessageDetail, /UBTConnect/MyCalendar) flags nearby: registeredCallbackEvents.onToggle
- `/UBTConnect/LDM_EventDetail_V2` (from /UBTConnect/LDM_MyEvents, /UBTConnect/LDM_MyEvents_V2, /UBTConnect/Map) flags nearby: registeredCallbackEvents.onToggle
## ldm_myevents
- `/UBTConnect/LDM_MyEvents` (from /UBTConnect/HomeFeed) flags nearby: -
- `/UBTConnect/LDM_MyEvents_V2` (from /UBTConnect/HomeFeed) flags nearby: -
