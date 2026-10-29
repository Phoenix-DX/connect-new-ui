# Item 7.1: the move log of the Photobook carousel (2026-10-28)

Part 1 of item 7 of the user's work list (`../RESUME.md`). It closes the last three `unclear` rows of
Directory_Photobook: 074, 076 and 105 (Q1 of `../flows/Directory_Photobook/report.md`).
Evidence order: the MCP (DEV) first, then the compiled TST code (live), then the React code. DEV = TST.

## 1. Facts

| # | Fact | MCP (DEV) | Compiled TST (live) |
|---|---|---|---|
| L1 | OnInitialize_Carousel registers SplideEvent_Moved on the Splide event "moved" with SetSplideEvent | - | `UBTConnect.Directory_Photobook.Photobook_Carousel.mvc.js` dump :1041 |
| L2 | SplideEvent_Moved(newIndex, previousIndex, destinationIndex) has one node: JSUtils_Console_Log("New/Current: " + newIndex + " \| Previous:" + previousIndex + " \| Destination: " + destinationIndex) | IScreenAction SplideEvent_Moved (UBTConnect) | dump :1403-1428 |
| L3 | JSUtils_Console_Log runs `console.log($parameters.Message)` and nothing else | - | `UBTJavaScriptUtils.controller.js` dump :779-783 |

The move log has no effect on the screen, the data or the server. It is a debug line in the browser console.

## 2. React today

- Photobook_Carousel does not register "moved" and logs nothing (`app/src/pages/Photobook/components/Photobook_Carousel.tsx:66`).
- The Carousel already has `setSplideEvent` (`app/src/components/ui/lib/actions.ts:148-150`).
- Project rule NO-CONSOLE: code logs through `platform/log`, never through `console` (`app/src/platform/log/log.ts`
  header). The console sink prints `debug` and `info` only in a development build.
- The other JSUtils_Console_Log calls are not ported either. These are the two drag-error logs of the same block
  (rows 089 and 091 `differs`, `migration/change-requests/CR-Photobook-1.md`). FeedCms and EmbeddedFeed do the same
  (`app/src/components/feed/FeedCms/README.md:77`, `EmbeddedFeed/README.md:78`).

## 3. Options for the user

| Option | What | Effect |
|---|---|---|
| (a) | Do not port. Rows 074, 076 and 105 become `differs` by decision, as rows 089 and 091 | No code change. Same rule as the other console logs |
| (b) | Port this log only: register "moved" with `setSplideEvent`, and write the line with `log.debug` | About 10 lines. The line shows only in a development build. The other console logs stay not ported |
| (c) | Port all JSUtils_Console_Log calls of the app with `log.debug` | Wider change (Photobook, FeedCms, EmbeddedFeed and others) |

Recommendation: (a). The log has no user effect (L2, L3). The project rule and the earlier reviews already keep
console logs out.

## 4. Decision (user, 2026-10-28)

(a) Do not port. Rows 074, 076 and 105 are `differs` by decision (`Directory_Photobook:Q1` in `../answers.json`). No
code change. The matrix has no `unclear` row left.
