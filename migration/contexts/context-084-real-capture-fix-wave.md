# context-084: four routes rebuilt to their real captures (2026-11-06)

## Result
- AcceptPendingPolicies, EventDetail, MilestoneDetail, LDM_EventDetail_V2: parity clean in every state against the
  real captures of 2026-11-06 (one route agent per route, in parallel). The 24 Orbit, LDM and policy routes that
  share the fictional Orbit and LDM seeds are still clean (`parity_sweep.py`, 24 of 24). Search re-stamped after the
  user's fixtures review ("ok").
- The parity URL carries the capture-plan ids first and the cloneQuery ids second; `URLSearchParams.get` takes the
  first. The fictional worlds answer the TST ids through alias maps (`orbitWorldId`, the LDM fallback). No second copy
  of an event: the lists of the other routes keep their counts.
- AcceptPendingPolicies: live TST drift. The heading is "Terms & Conditions and Privacy Policy Agreement". A policy
  row is two Expression spans without a click (the older CustomText container is `visible: false`). The seed is one
  policy (Connect Privacy Policy) as captured. The spinner-phase exemption now covers the block's own `div.list-updating`.
- EventDetail: event 7301 gained a visible booklet, a "Seat: Row 3" 6:00 PM meeting and a Saturday meal-host milestone
  (`ORBIT_MILESTONE_TYPES.mealHost`, colour not captured). Its days follow the rule "first Friday the 23rd at least a
  week after today": the day labels 23/24/25 are unmasked in the capture.
- MilestoneDetail: a "Guest Arrangements" link under each of the ten member cards (`HasGuestArrangements` true),
  `ActionGetSignedImagesInBulk` at load as captured.

## Decisions (who, date)
- User 2026-11-06: "làm" for the fix wave; "ok" for the fixtures review (`har_to_fixtures.py review --by user`).
- Fable: widen `SPINNER-ROTATION-PHASE` to the policies block (same CSS animation, same reason). Alias maps rather
  than renumbered fictional worlds: the cloneQueries of every Orbit route carry the old ids.

## Facts learned (evidence)
- Live `AcceptPendingPolicies.mvc.js:355` heading; `Policy_Custom_AcceptPendingPolicies.mvc.js:236-445` row markup.
- Capture `EventDetail/analysis/dom/default.html:92-100` booklet row, `:245-260` meal row, `:294-336` day labels,
  `:385-452` meeting card. `MilestoneDetail/analysis/dom/default.html:183-190` Guest Arrangements link.

## Files changed
- `app/src/pages/{AcceptPendingPolicies,EventDetail,MilestoneDetail,LDM_EventDetail_V2}/**` (mocks, tests, the
  policies form and header), `app/src/mocks/fictional/{orbit,ldm}.ts`, `app/src/api/policy/*.test.*`,
  `app/src/api/event/repository.test.ts`, `migration/parity-exemptions.json`, `migration/screens/<4>/parity/`,
  `migration/screens/EventDetail/route-spec.md`, `AcceptPendingPolicies/route-spec.md`, `migration/metrics/ledger.csv`.

## Open issues
- The four routes count as "finished but modified since": they wait for the user's `confirm` (`restamp.py`).
- A meal-host milestone row opens MilestoneDetail, whose mock answers accommodation milestones only (not captured).
- MCP (Service Studio) not reachable this session; Household_Relations member still open (context-083).

## Next
- The user's `confirm` of the four routes; then re-stamp. MCP when Service Studio is up.
