# context-013 · Wave 3 foundation: 36 shared blocks, ports from TST scripts, typed exceptions

Date: 2026-10-15 · Phase: 5 (foundation, wave 3) · Status: current

## Result
- 36 wave-3 blocks built (`migration/blocks/wave3.txt`), batches A ∥ B ∥ C; follow-ups: notes local cache (IndexedDB
  adapter `app/src/shell/localEntities/`), note error scopes 1:1, typed OutSystems exceptions in contract/callAction
  (`app/src/lib/os-exceptions.ts`), SyncNotes at sign-in, signed photo cache + `GetSignedPhotosInBulk` (CR-W3Y-1 via
  `migration/contract/extra-actions.json`), ScrollEvent, sanitizer config, IOS meta/swipe, body theme (CR-W3A-1).
- ci 173 files / 715 tests; parity clean on Login, PINUnlock, PINRegister, Splash, HomeFeed. Contract 96 operations.
- Wave 3 tiers: lite FeedItemDetail, MyEntertaining, Search, Services; full MessageDetail, MessageList, Notes,
  Notifications, Updates_SingleList. FeedItemDetail has no capture.

## Decisions (user, 2026-10-15)
- Wave 3 start; standing rule: fetch missing TST static files read-only (memory feedback-fetch-static-scripts).
- Notes local cache ported; note errors as the original; exception names in the contract.

## Facts learned
- TST runs client entities on IndexedDB although `IndexedDBOffline = false` (`migration/knowledge/shell-facts.md`).
- static_entities.py now reads referenced-module getters: 514 entity views (`static-entities-tst.json`).
- A `= {}` / `= []` default prop re-created per render caused an endless render loop (FilterSheet): use fixed empties.

## Open issues
- Mock exception answers use HTTP 500 (runtime: 200/503 JSON) — align when the real backend is designed.
- Backlog: port OutSystems request timeouts into callAction.

## Next
- Wave 3 routes in rounds of 3: Services, Search, MyEntertaining → MessageList, Notifications, Notes →
  MessageDetail, Updates_SingleList, FeedItemDetail (capture decision).
