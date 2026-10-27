# Flow report: App_Common_Blocks_PopupDialogs

| | |
|---|---|
| Status | draft |
| Date | 2026-10-27 |
| Screens on DEV | 0 (block-only flow) |
| Own blocks | Dialog_CustomChoice, Dialog_ExitConfirmation, Dialog_Information, Dialog_Information_NonNavigation, Dialog_Navigation (5) |
| Sources | `pack/*.md` (DEV model, MCP dump 2026-10-27), `app/src/…`, `migration/app-shell.spec.md:180-193`, TST compiled code of the 5 blocks and of the callers Menu, Profile, ContactUsDetails |
| Rule | TST is the source of truth; DEV is the checklist. A difference is noted in §6. |

## 1. Summary

- Counts by verdict: match 20 · partial 0 · missing 0 · differs 0 · mock-only 0 · n/a 4 · unclear 0 (same as `checklist.json`).
- No findings.
- The default labels "Close" and "Cancel" of `Dialog_CustomChoice` and "Close" of `Dialog_Information` never show on
  TST. Every TST caller fills the label placeholders, and the React callers pass the same labels.
- `Dialog_Information_NonNavigation` is `n/a`: no element of the module uses it.
- The yes and no logic inside the `NavigationHandler` dialogs is `n/a` here. The `_libraries` unit owns it.
- Status: the choice, exit, information and navigation dialogs show the TST classes, texts and labels.

## 2. Blocks

### 2.1 Dialog_CustomChoice

| Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| -001 identity | input StackButtonsVertically; no events; used by Menu (2 instances), Profile | `ChoiceDialog` | match | `app/src/components/ui/Dialog/ChoiceDialog.tsx:8-23` |
| -002 ui root class | `connect-dialog-popup connect-dialog-popup--custom-choice` + " connect-dialog-popup--vertical-buttons" when stacked | the same | match | TST `Dialog_CustomChoice.mvc.js:144` (the pack cuts the class); React `:44-46` |
| -003 ui DialogHeader | margin bottom Base, Neutral10, SemiBold, `text-align-center` | the same | match | React `:26-29, 54-59` |
| -004 ui DialogBody | margin bottom Medium, Neutral10 | the same | match | React `:30, 62-66` |
| -005 strings default confirm "Close" | default content of `Placeholder_ButtonLabel` | no default; callers pass the label | match | TST callers fill it: Menu `Menu.mvc.js:616-618` ("Yes"), `:692-694` ("Submit"); Profile `Profile.mvc.js:2806-2808` ("Update Preference"). React `MenuPage.tsx:94,103`, `ProfilePage.tsx:145` |
| -006 strings default dismiss "Cancel" | default content of `Placeholder_DismissButtonLabe` | no default; callers pass the label | match | TST Menu `:619-621` ("No"), `:695-697` ("Cancel"); Profile `:2809-2811` ("Cancel"). React `MenuPage.tsx:95,104`, `ProfilePage.tsx:146` |
| -007 actions | no event, no action; `Confirmed` of ActionConfirmationDialog not wired | no action of its own | match | React `:32-34`; open and close through `ConfirmAction` (`app-shell.spec.md:182`) |

### 2.2 Dialog_ExitConfirmation

| Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| -008 identity | no inputs; used by HomeFeed, Login | `DialogExitConfirmation({ id = '$b11' })` | match | `app/src/platform/navigation/DialogExitConfirmation.tsx:12` |
| -009 ui `ExitConfirmationDialog` Force=True | back navigation with Force at queue priority -1; root `connect-dialog-popup` | `useExitConfirmation(true)` | match | `migration/app-shell.spec.md:184`; React `DialogExitConfirmation.tsx:13,19`, `app/src/platform/navigation/exitConfirmation.ts:23-33` |
| -010 strings header | "Leave App" | the same | match | React `:28` |
| -011 strings body | "Are you sure you wish to leave the Connect app?" | the same | match | React `:31` |
| -012 strings buttons | "Yes" / "No" | the same | match | React `:32-33` |
| -013 actions yes / no | inside `NavigationHandler.ConfirmationDialogs.ExitConfirmationDialog` | from `useExitConfirmation` | n/a | owned by the `_libraries` unit (`flows/_libraries/pack/blocks.md`), see its report |

### 2.3 Dialog_Information

| Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| -014 identity | no inputs; used by ContactUsDetails | `InformationDialog` | match | `app/src/pages/ContactUsDetails/components/InformationDialog.tsx:32` |
| -015 ui | `connect-dialog-popup connect-dialog-popup--information`; header and body as in §2.1 | the same | match | React `:35-52` |
| -016 strings default confirm "Close"; no dismiss | default content of `Placeholder_ButtonLabel` | no default; the caller passes "Close" | match | TST ContactUsDetails fills it with "Close" (`ContactUsDetails.mvc.js:1461-1463`); React `SubmittedConfirmationDialog.tsx:43` |

### 2.4 Dialog_Information_NonNavigation

| Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| -017 identity | In_ShowPopup (mandatory), In_ButtonLabel = "Close"; event OnClick_Button; used by nothing in the module | no port | n/a | dead in the model: `pack/blocks.md` "used by: nothing in this module"; TST file present |
| -018 ui | popup `popup-dialog connect-dialog-popup` with a Small button | no port | n/a | as row -017 |

### 2.5 Dialog_Navigation

| Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| -019 identity | ConfirmLabel = "Yes", DIsmissLabel = "No"; event Event_OnBackNavigation; used by ContactByEmailForm, ContactUsDetails, Profile | `NavigationDialog` variant `connect`, props `confirmLabel`, `dismissLabel` | match | `app/src/components/ui/Dialog/NavigationDialog.tsx:11-30, 65-88`; TST keeps the name `DIsmissLabel` (`Dialog_Navigation.mvc.js:18`) |
| -020 ui | `connect-dialog-popup connect-dialog-popup--navigation`; header and body as in §2.1 | the same | match | React `:67-81` |
| -021 strings labels | expressions ConfirmLabel, DIsmissLabel | `confirmLabel ?? 'Yes'`, `dismissLabel ?? 'No'` | match | React `:82-83`; TST ContactUsDetails passes no inputs (`ContactUsDetails.mvc.js:1469-1470`), so the defaults show |
| -022 actions Navigation → Event_OnBackNavigation | raises the block event with the NavigationEvent | `latestOnNavigation.current?.(navigationEvent)` | match | TST `Dialog_Navigation.mvc.js:171-179`; React `:145-147` |
| -023 actions yes / no | inside `NavigationHandler.ConfirmationDialogs.NavigationConfirmationDialog` | confirm resumes, dismiss cancels | n/a | owned by the `_libraries` unit, see its report; React `:144-165` merges these internals into the component |

### 2.6 Flow-level rows

| Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| -024 data | no server action, no client variable (`pack/data.md`) | the components take props only | match | rows -001 to -023 |

No block has a validation.

## 3. Blocks of the flow

The flow uses no block of another UBTConnect flow. This report checks only the arguments and
placeholders of the referenced blocks of `NavigationHandler` and `UBTConnectLibrary`.

## 4. Shared blocks and actions

The flow calls no shared client action. The ContactFlow report (row 142) gives `Dialog_Navigation` to this report.

## 5. Findings

No findings.

## 6. DEV vs TST differences

### 6.1 DEV model vs TST compiled code

| Element | DEV (model) | TST (compiled code) | What the React app follows | Source |
|---|---|---|---|---|
| Dialog_CustomChoice root class | the dump cuts the class at "vertical-b…" | " connect-dialog-popup--vertical-buttons" | TST | `Dialog_CustomChoice.mvc.js:144` |

No other difference found.

### 6.2 KB pages vs TST (for the KB owner)

None. The KB names no rule for these blocks.

## 7. Questions for the user

None.

## 8. Counts

| Area | Items | match | partial | missing | differs | mock-only | n/a | unclear |
|---|---|---|---|---|---|---|---|---|
| identity | 5 | 4 | 0 | 0 | 0 | 0 | 1 | 0 |
| data | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 |
| ui | 7 | 6 | 0 | 0 | 0 | 0 | 1 | 0 |
| actions | 4 | 2 | 0 | 0 | 0 | 0 | 2 | 0 |
| validations | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| logic | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| strings | 7 | 7 | 0 | 0 | 0 | 0 | 0 | 0 |
| **total** | 24 | 20 | 0 | 0 | 0 | 0 | 4 | 0 |
