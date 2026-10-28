# context-065: item 4, two original bugs kept 1:1 (2026-10-28)

## Result
- Item 4 of the user's list: two TST behaviours that React already ports 1:1. They are the double `?` of the Google
  Maps link and the `<nobr>` of SanitizedHtml. No code change; recorded as known original bugs B20 and B21
  (`app/docs/known-original-bugs.md`). Evidence: `migration/clarify/review/item4-findings.md`.
- Item 3 follow-up (user decision (c)): scrollIntoView spy tests in the four HostSurvey blocks; AccommodationItem calls
  scrollIntoView directly (commit 27b9fef7; ci 4405 tests, parity HostSurvey OK).

## Decisions (user, 2026-10-28)
- Item 3: keep the jsdom polyfill and test the TST scroll behaviour with spies (c).
- Item 4: keep both bugs 1:1 (a), as PD10–PD14.

## Facts learned (evidence)
- MCP: the External Site WebMaps has the URL `https://www.google.com/maps/dir/?api=1` and the parameters `api` and
  `query`. The runtime `generateScreenURL` (G) appends `?` and the parameters, whatever the URL holds.
- TST ReactiveHtmlSanitizer adds AllowTags tokens as written and tests `AllowedTags[node.tagName]` (upper case). So
  lower-case names never match, and a tag that does not match goes with its content.

## Files changed
- `app/docs/known-original-bugs.md` (B20, B21); `migration/clarify/review/item4-findings.md`, `builds/README.md`,
  `builds/item3-dropdowns.md`, `RESUME.md`; HostSurvey tests and one line of `HostSurvey_AccommodationItem.tsx`.

## Open issues
- Seen, not changed: three copies of the scrollIntoView helper in `app/src/pages/HostSurvey/components/`.

## Next
- Item 5 of the user's list: the HostSurvey Tooltip and MultiResolutionImageLoader.
