# Orchestrator review of wave G1 (Fable, 2026-10-27)

Checks made by the orchestrator after the flow agents of G1 handed back. Each line names its evidence. TST is the
source of truth (`python3 migration/clarify/tools/tst_source.py`).

## 1. Major and blocker findings confirmed on TST

| Flow | Finding | TST evidence | Result |
|---|---|---|---|
| App_Menu_ContactUs | F1 blocker: signed-out form (Full Name, Email, Phone, Country, Locality) not built | `UBTConnect.App_Menu_ContactUs.ContactUsDetails.mvc.js:132-136` (validation widgets Input_FullName, Input_Email, Input_PhoneNumber, Dropdown_Country, Input_Locality) | confirmed: the widgets exist on TST |
| App_Menu_ContactUs | F2 major: ContactUs_Rate not built | same file `:538` (`ContactUs_Rate_mvc_view`), `:553` (RateSelected handler) | confirmed |
| App_Profile | F1 major: householder address section not built | `UBTConnect.App_Profile.Profile.mvc.js:12-13` (Custom_AddressInfoRec), `:56-58` (LocalCacheControl_AllLocalities) | confirmed |
| App_Services | F1 major: isLoading not reset after a failed save | `UBTConnect.App_Services.Services.mvc.js:1334-1345` (CommunicationException handler, `// isLoading = False`) | confirmed |
| App_Notifications | F2 major: badge always rendered | `UBTConnect.App_Notifications.Notifications_Header.mvc.js:18, 79-80` (BadgeNumber input); the `> 0` condition is in the view (agent's citation) | input confirmed; condition not re-read here |
| App_Policies | F1 major: PolicyApplications sent as names, TST sends record identifiers | `UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc.js:35, 97-98` (RecordList input); values in `migration/knowledge/static-entities-tst.json:2809` (agent's citation) | input confirmed; values not re-read here |

## 2. Fact questions answered from the TST scripts fetched 2026-10-27

| Question | Answer | Evidence |
|---|---|---|
| App_Policies Q1: does `Get_MemoryCacheKey_UniqueKey` return `Client.UniqueCacheKey`? | Yes: `Key = UniqueCacheKey`; the out value is `getUniqueCacheKey()` | `UBTConnect_Utils.controller.js:2383-2384` |
| App_Menu_ContactUs Q3: the e-mail validator | TST: `/^[a-z0-9][a-z0-9_\&\-\.\+]{0,31}@[a-z0-9\-]{1,}(\.[a-z0-9]{2,20}){1,}$/i` on `text.toLowerCase()`. React: the same class set, on `in_Text.trim().toLowerCase()`. Difference: React trims first; TST does not. | `UBTConnectLibrary.controller.js:7564-7569`; `app/src/pages/ContactUsDetails/hooks/contactUsDetailsState.ts:132` |
| App_Menu_ContactUs Q3: the phone validator | TST code now available (`isPhoneNumber`, `UBTConnectLibrary.controller.js:7646…`). Not compared yet: re-check in the follow-up pass. | |
| App_Services Q1: SortableJS SetupList deny lists | TST code now available (`SortableJS.controller.js:94…`: `parseDenyList`, `normalizeIds`). Not compared with `setupList` yet: re-check in the follow-up pass. | |
| App_Menu Q1: the OnException of the flow App_Menu | `UBTConnect.App_Menu.controller.js` is in `migration/shell/sources/` (now read by `tst_source.py`). Not compared yet. | |

## 3. Corrections to the plan

- `PLAN.md` §3 said all 22 DEV screens that are not built have a `skip` row. False: 5 have no board row
  (`NotificationDetails`, `OneSchoolGlobalCarousel`, `OrbitAdminMilestoneDetail`, `OrbitAdminMilestones`,
  `PassportScan`), they exist on DEV only. Corrected in `PLAN.md` 2026-10-27 (`grep "^| <Screen> " migration/board.md`).
- The App_Notifications agent found that DEV is ahead of TST for the whole flow (13 differences, report §6.1).

## 4. Pack and brief gaps reported by the agents, and what changed

| Gap | Change |
|---|---|
| `app.md` "no mock handler found" (mocks live in `pages/<Screen>/mocks.ts` under data-action names) | `app_index.py` lists the per-screen mock files and greps them |
| Dump omits MaxLength, Enabled=False, inline styles | pack header says so; inputs print `Enabled` and `style` when present; TST check required |
| "continues at <node@x,y>" hard to read | merge nodes get `[M<n>]` labels |
| Structure attribute defaults missing in `data.md` | added |
| Screen actions listed as unresolved in `references.md` | excluded |
| Missing TST sources (library and flow controllers) | 41 scripts fetched read-only (`migration/knowledge/runtime-sources.md`); `tst_source.py` also reads `migration/shell/sources/` |
| Shared scratchpad between parallel agents | `READER.md` / `JUDGE.md`: own scratch folder per flow |
| ADR location (`app/docs/reference/stack.md`, not `app/docs/architecture/`) | to fix in `AGENT.md` / `JUDGE.md` |
| Rules for TST-only elements, native-only branches, flag-off branches, runtime defaults | `JUDGE.md` "How you judge" |
