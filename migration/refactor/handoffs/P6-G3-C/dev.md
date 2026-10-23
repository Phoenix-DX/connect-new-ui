## Result
status: pass
summary: knip finds no unused file in group G3 (9 unused files, all in later groups or tooling), so nothing was deleted. jscpd found 3 small clones, recorded and left. The duplicate decrementReadMessagesCounter now has one copy in platform/session/unreadCounters.ts.

## Prune report
- knip (whole app): 9 unused files, none in G3: `.storybook/withFlags.ts`, 2 types files in `src/shared/Connect2_OrbitMobile_MUI`, `MultiResolutionImageLoader/index.ts` in LegacyShared, 5 `index.ts` in `src/shared/osui`. Not deleted (later groups or tooling).
- jscpd (min 8 lines, 70 tokens, tests and stories excluded) on the G3 pages, components/{feed,filter,notification,search,share}, containers/{FilterSheet,ShareSheet}, api/{search,feed,service}: 195 files, 3 clones, 0.22% lines. Left, recorded only:
  1. `components/feed/FeedCms/connect2Feed.ts` 252-270 and 471-489 (18 lines, same file, two OutSystems feed variants).
  2. `pages/Updates_SingleList/hooks/updatesSingleListState.ts` 300-308 and `pages/Notifications/hooks/notificationsState.ts` 239-247 (8 lines). A merge needs a shared module or a page-to-page import (rule 3); too small.
  3. `pages/HomeFeed/hooks/useFeedUpdates.ts` 92-103 and `pages/Updates_SingleList/hooks/useUpdatesSingleList.ts` 355-364 (11 lines). Same reason.
- decrementReadMessagesCounter: judgment call. The function writes two client variables of the session (UnreadNotificationsNumber, UnreadPublicMessagesNumber), so I placed it in `platform/session/unreadCounters.ts` (not `api/message`, which holds server calls). Body unchanged. Both `useMessageList.ts` and `useMessageDetail.ts` import it. The two page copies are removed. The tests of the function moved to `platform/session/unreadCounters.test.ts` (the MessageList test and the MessageDetail test lose only that case; no test deleted without a replacement). `setUnreadNotificationsNumber` stays in MessageList (used only there).
- Guard: `arch_baseline.py list` shows P7: 48, pre-existing: 1, total 49; no P6-G3-* owner. `check` exits 0 (49 warnings, 49 rows, 0 new, 0 gone).

## Files changed
app/src/platform/session/unreadCounters.ts (added)
app/src/platform/session/unreadCounters.test.ts (added)
app/src/pages/MessageList/hooks/unreadNotifications.ts
app/src/pages/MessageList/hooks/unreadNotifications.test.ts
app/src/pages/MessageList/hooks/useMessageList.ts
app/src/pages/MessageDetail/hooks/messageDetailState.ts
app/src/pages/MessageDetail/hooks/messageDetailState.test.ts
app/src/pages/MessageDetail/hooks/useMessageDetail.ts

## Commands run
npx knip → 9 unused files, none in G3
npx jscpd (G3 folders) → 3 clones, 195 files
npm --prefix app run typecheck → exit 0
npx vitest run unreadCounters + pages/MessageList + pages/MessageDetail → 11 files, 87 tests passed
npx eslint (changed files) → no output, exit 0
python3 migration/tools/refactor/arch_baseline.py list → P7 48, pre-existing 1
python3 migration/tools/refactor/arch_baseline.py check → exit 0

## Deviations from the brief
none

## Questions for the user
none
