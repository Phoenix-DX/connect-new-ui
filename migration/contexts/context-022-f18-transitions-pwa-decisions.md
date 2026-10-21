# context-022 · F18 screen transitions + PWA decisions (2026-10-16)

## Result
- **F18 (CR-F18-1)**: screen transitions ported 1:1 from the runtime (user report: no animation on bottom-bar clicks).
  `app/src/shell/navigation/ScreenTransitionGroup.tsx` + `screenTransition.ts`. CI passes with 1384 tests. The parity sweep
  found 0 differences on 64/64 routes after the last code change. Menu and ConnectShare were re-stamped after the user's
  confirm.
- **PWA discussion**: the user decided P1–P16 in one session. Section 7 of `migration/pwa/pwa-discussion-plan.md` has the
  decisions. Phase-0 facts: F1 manifest fetched; F3 file plugins (`migration/knowledge/pwa-file-plugins.md`: on the web,
  files open in a new tab); F4 shows no push on the web.

## Decisions (who, date)
- User, 2026-10-16:
  - F18 quirks kept 1:1 (the user compares on TST); reduced motion is deferred to production; the skill template is updated.
  - PWA: P1 online-first, P2 injectManifest, P3 table 3a, P4 TST manifest + default prompt, P5 no push, P6 PIN only,
    P7 vendored TST scanner, P8 new tab, P9 plain URLs, P10 IndexedDB kept (exception by ADR), P11 silent update,
    P12 same-origin BFF, P13 iOS 16+, P14 e2e + devices + Lighthouse, P15 pilot then cutover, P16 SW only in non-mock
    builds.
- Auto-accept is OFF (stop rule); the hourly cron is deleted.

## Facts learned (evidence)
- Parity compares settled states only, so a missing transition never shows as a diff. The shell spec template now lists
  screen transitions.
- TST's first slider refresh writes `undefinedms`, so the appear class sticks until the first real transition (TST
  captures).
- The mock Feed CMS and the original images are served only by Vite dev/preview middleware (`app/vite.config.ts`). A
  static host needs a demo build step. MSW needs HTTPS or localhost.

## Open issues
- F2: the user checks TST DevTools for a service worker. The BFF host is still open.
- How to share the mock demo (tunnel / static demo build / demo PWA with in-app mocks): waiting for the user.
- Review list: TO CONFIRM rows in `migration/knowledge/auto-decisions-2026-10-16.md`.

## Next
After the user agrees: PWA ADRs and stack item `pwa`, then phase 1 (installable shell).
