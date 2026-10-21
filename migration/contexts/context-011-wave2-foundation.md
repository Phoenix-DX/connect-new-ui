# context-011 · Wave 2 foundation: 42 shared blocks for HomeFeed

Date: 2026-10-15 · Phase: 5 (foundation, wave 2) · Status: current

## Result
- 42 wave-2 blocks built (`migration/blocks/wave2.txt`) in batches A ∥ B, C, D, E (Feed_Embeded); ci 131 files /
  540 tests; build-storybook OK; parity of the 4 captured finished routes unchanged (0).
- Follow-up: mock image rule + neutral placeholders, ports from TST runtime scripts (BottomSheet drag-to-close, Carousel
  provider options, Connect2Feed SDK, cross-origin navigateTo), mock Feed CMS same origin (CR-W2F-1).
- CRs applied: CR-W2A-1 (bulk signed images, cache), CR-W2F-1. HomeFeed tier now `full` (catalog + board tier rerun).
- Ledger wave 2 ≈ 2.3M tokens (batch C spawned 2 forks ≈ 717k: briefs now forbid forks).

## Decisions (user)
- 2026-10-14: wave 2 start; review = localhost links only (no artifact). Q-W2C-1 neutral placeholder images where TST had
  a photo (`migration/knowledge/mock-fixtures.md`). Fetch runtime scripts read-only (`migration/knowledge/runtime-sources.md`).
  useMapsItems stays NotCaptured. User opens UBTConnectLibrary, UBTConnect_Utils, Connect2_Sharing_CS in Service Studio
  for static entity values (pending).
- 2026-10-15: mock Feed CMS = app origin + Vite middleware (CR-W2F-1).

## Facts learned
- block_pack.py ignored survey sources for blocks no capture loaded (fixed: `migration/blocks/sources/`).
- Connect2Feed SDK needs BaseURL as an origin; cross-origin navigateTo → `location.href` (`shell-facts.md`).

## Open issues
- Static entity values to read via MCP: UBT_Icons Gift / FeedItem / InfoFill, SearchInput MaxLength / Debounce,
  Type_ShareObject.Feed (Connect2_Sharing_CS).

## Next
- Route HomeFeed (full tier, 6 own blocks), localhost link for the user's review.
