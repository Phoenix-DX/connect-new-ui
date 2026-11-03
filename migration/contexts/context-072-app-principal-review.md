# context-072: principal review of `app/` (2026-11-03)

## Result
- Read-only review of `app/` at `da0bb2dc`: report `../reviews/app-principal-review-2026-11-03.md`.
- 33 findings: 2 S1, 10 S2, 17 S3, 4 S4. Scorecard 1–3 of 5 on all 11 dimensions; data and production readiness 1.
- Method: facts pack (tool output, no opinion), 6 Sonnet collectors per area, 1 Opus lead. The lead checked the code of
  every S1/S2 claim, sampled 12 S3 claims, then compared with the self-assessments (labels blind spot / understated /
  tracked). 85 citations checked by script, 0 missing; STE lint 0 errors.
- No file in `app/` changed. Tokens: 727,626 Sonnet + 317,541 Opus (ledger, screen `app-principal-review`).

## Decisions (who, date)
- User 2026-11-03: 1 lead + 6 Sonnet; lead model Opus; output = findings + roadmap + target folder structure; one EN
  file in the repository plus a VI summary in chat.

## Facts learned (evidence)
- In the report, sections 2 (F-01 to F-33) and 4 (self-assessment against reality); not copied here.
- Gate counts at `da0bb2dc`: depcruise 139 hidden, ESLint 73 warnings, knip 289 + 758 hidden.
- Coverage 86 % lines. Production entry chunk 573 kB (171 kB gzip). Precache 336 entries, 7.2 MB.

## Files changed
- New: `migration/reviews/app-principal-review-2026-11-03.md`, this context. Updated: `INDEX.md`, `../metrics/ledger.csv`.

## Open issues
- The roadmap (WP-1 to WP-13) and the decisions it names are not accepted. Each needs the user: CI platform, build
  default, accessibility deviation, identity ADR, contract owner.
- Repository split questions V1–V6 (session of 2026-11-03) are still open; the review puts WP-1 to WP-5 before the split.
- An earlier review of the same day (ledger rows `app-architecture-review`, 3 agents) left no report in the repository.

## Next
- The user reads the report and picks the work packages and the decisions.
