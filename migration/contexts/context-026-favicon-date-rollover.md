# context-026 · Favicon 1:1, EventDetail date rollover (2026-10-17 morning, auto mode)

## Result
- The favicon is now 1:1. `app/index.html` links `/UBTConnect/favicon.png` as a `shortcut icon`; the file was fetched
  from TST. The Lighthouse `/favicon.ico` 404 is gone, and HomeFeed best practices went from 96 to 100.
- Parity sweep after the change: 63/64. EventDetail's day digits came out as 30/31/1 instead of the captured 23/24/25.
  The cause is the date rollover, not the code (see Facts). The scoped exemption
  `MOCK-RELATIVE-DATES-EVENTDETAIL-DAYSELECTOR` was added, then the second sweep was clean: **64/64**.
- Splash was re-stamped (comment change in `LayoutBlank.tsx`; auto-confirmed). CI passed: 324 files, 1457 tests.
  `e2e:pwa` passed 8/8. The demo was rebuilt (493 precache entries, zip 7.9 MB).

## Decisions (who, date)
- Both items were auto-accepted under the user's auto mode (2026-10-16 evening → 2026-10-17 morning). They are logged
  in `migration/knowledge/auto-decisions-2026-10-16.md`:
  - Favicon: **TO CONFIRM**. It amends the "AddFavicon not ported" line the user confirmed in Splash's wave-1 review.
  - Exemption: conservative. **TO DECIDE**: a durable fix would have parity freeze the browser clock at the capture
    time, which is a skill tooling change affecting all routes.

## Facts learned (evidence)
- Every original layout (LayoutBlank, BaseLayout_UpdatedOSUI, the UBTConnectLibrary layouts) runs OSUI
  `AddFavicon("favicon.png")`. `OutSystemsUI.js` `Utils.AddFavicon` adds `<link type="image/x-icon" rel="shortcut icon">`.
  The TST file is listed in moduleinfo (`/UBTConnect/favicon.png`, 43×43 PNG). See
  `migration/knowledge/runtime-sources.md`.
- The Orbit mock world places the meetings on the first Friday at least a week after today (`orbit.ts`
  meetingsFriday). EventDetail's unmasked day digits therefore matched the capture only for runs between 2026-10-10
  and 2026-10-16. Other routes' dates are masked in their captures.

## Files changed
- `app/index.html`, `app/public/UBTConnect/favicon.png`, five layout READMEs, `screens/Splash/components/LayoutBlank.tsx`
  (comment only), `app/docs/guides/pwa.md`, `migration/parity-exemptions.json`, `migration/pwa/pwa-discussion-plan.md` §8.

## Open issues
- The same as context-025: F2, the BFF host, the TO CONFIRM review list, low simulated-mobile performance (user track).
  Two items were added to the list (see Decisions).

## Next
- The user turned auto mode OFF at 08:40 +07; every decision is the user's again. The performance brief was not started.
