# Route spec: ContactUsMenu

## Summary
| Item | Value |
|---|---|
| Route | `/UBTConnect/ContactUsMenu` with inputs none [pack.md; routes.generated.ts:7] |
| Tier | lite |
| Captured | 2026-10-14 (TST), viewport 390×844, states: default, loading, offline [analysis/states.json] |
| Shared/shell components used | `Layout_DetailPage` (src/shared/UBTConnectLibrary/Layout_DetailPage), `CustomContainer` (src/shared/UBTConnectLibrary/CustomContainer), `Menu_List` (src/shared/UBTConnect/Menu_List), `SectionSeparator` (src/shared/UBTConnect/SectionSeparator), `CommonUI_InsideLayout` (src/shared/UBTConnect/CommonUI_InsideLayout), `OSList` (src/components/OSList) |
| Screen-specific components | `components/actions.ts` (client actions Get_LookupContactUsMenu, Get_ContactUsMenuSections), `components/staticEntities.ts` (Type_ContactSubject, the UBT_Icons2 values the shared table lacks) |

## Specification
### Structure
[ContactUsMenu.mvc.js view :125-321; pack.md "Block plan" and "Markup"]
- `Layout_DetailPage` `$b1`: header title "Contact Us" (:155-157), Placeholder_Header_Right, HeaderContent and Bottom empty.
- Content:
  1. `CustomContainer` `$b2` (padding vertical Small, horizontal Base; text Neutral10, FontSize Small, :162-178) with the
     Expression "Please select the most relevant category so our Customer Care Team can direct your request to the right
     team." (:197-199) [dom/default.html:35-41].
  2. `OSWidgets.Container` `contact-us-menu` (:205-218) > `OSWidgets.List` `list list-group` (OSFillParent, animateItems,
     source ContactUs_Menu, :219-230) > per section `Menu_List` `l1-37_<n>-$b3` with In_MenuSection = the current
     section (:236-238) [dom/default.html:42-44, 253, 321].
  3. `SectionSeparator` `$b4` (:272-290) [dom/default.html:438-443].
- Placeholder_CommonUI_Inside_Layout: `CommonUI_InsideLayout` `$b5` with In_IgnorePolicy = IgnorePolices,
  In_IgnoreLockScreen = IgnoreLockedScreen (:291-312).

### Data
No server call of its own: `dataFetchActionNames = []` (:341); Get_ContactUsMenuSections and Get_LookupContactUsMenu are
client actions (UBTConnect.controller.js `get_ContactUsMenuSections$Action`, `get_LookupContactUsMenu$Action`). Every
captured call (calls.md #1-#7) is the app start, owned and mocked by the shell (src/shell/startup.ts, src/shell/mocks.ts).

| Call | Kind | Trigger (call-sites root) | Inputs | Outputs used | Server side (MCP / cache) | Mock scenarios |
|---|---|---|---|---|---|---|
| Get_ContactUsMenuSections | client action | ScreenEvent_OnInitialize (:385-389) | none | Out_ContactUsMenuSections → ContactUs_Menu | none (client only) | none (route `handlers = []`) |
| Get_LookupContactUsMenu | client action | inside Get_ContactUsMenuSections | none | Out_LookupContactUsMenu (one UI_ListMenuOption per subject) | none | none |

Menu content [UBTConnect.controller.js get_LookupContactUsMenu$Action; static-entities-tst.json UBTConnect.type_ContactSubject, uBT_Icons2]:
Id = Label = Type_ContactSubject value; IconId per subject.
- Signed in (GetUserId <> NullIdentifier): "User Account Management" (Set up a UBT One account · ubt; Log in with UBT One ·
  person_add; Subscriptions and Payments · shopping_basket; Household Details & Profile · account_circle), "Community
  Engagement" (Community Events · person_play), "General Inquiries" (General Questions · book_open; General Suggestions,
  Feedback & Rating · tooltip) [dom/default.html:71-418].
- Signed out: same first two sections; "General Inquiries" with General Questions or Suggestions · book_open (Q1).

### Behaviour
| Element / lifecycle | Event | Logic | Calls | Navigates to (params) | Feedback |
|---|---|---|---|---|---|
| Screen | OnInitialize (:343-394) | PIN_Check; IgnorePolices = GetUserId = NullIdentifier or NeedRegister; IgnoreLockedScreen = GetUserId <> NullIdentifier and NeedRegister; if the view was restored from cache keep ContactUs_Menu, else ContactUs_Menu = Get_ContactUsMenuSections | none | — | — |
| Menu_List row | OnClick_MenuOption(UI_ListMenuOption) → screen OnClick_MenuOption(Id) (:243-256, :411-441) | ListIndexOf(current section MenuOptions, Id) | none | `/UBTConnect/ContactUsDetails` (In_ContactSubjectId = row Id, In_ContactSubjectTitle = section title, In_ListMenuOptionLabel = row Label), transition Default | — |
| Header back icon | click | shell Layout_DetailPage | — | back | — |

### States
| State | Condition (expression) | Captured | Scenario |
|---|---|---|---|
| default | signed in, menu built on init | yes | real |
| loading | app-start calls pending; the menu is client-side so the markup is the same | yes | loading |
| offline | app-start calls fail; same markup | yes | error |
| signed out | GetUserId = NullIdentifier | no (Q1) | — |

## Patterns used
- P-STATES: loading and offline render the same static markup as default (dom/loading.html, dom/offline.html identical to default in pack.md).
- P-BACK: ContactUs_Menu kept through `useViewState` and skipped when `useWasRestoredFromCache` (IsViewRestoredFromCacheJS, :373-389).
- P-PARAMS: navigation to ContactUsDetails with the original parameter names through `useOsNavigate` (:437-441).
- P-LIST: the sections List through `OSList` (`list list-group`, animateItems, position relative) [dom/default.html:42].
- P-MOCKS: `mocks.ts` exports no handler; the shell mocks the app start.

## Feature flags
- `clientVar:App_PIN_BiometricEnabled`: MCP unavailable; decision not a flag (false positive, user setting for biometric unlock, user 2026-10-14); implemented in the shell PIN blocks only, this route reads no flag [flags.py route ContactUsMenu].

## Unclear points
- The signed-out branch of the menu (Anonymous screen) is compiled but not captured → Q1 (decision, recommended A: build as compiled; pending orchestrator answer).

## Decisions to confirm
- Q1 → A (pending orchestrator answer): both branches of Get_ContactUsMenuSections / Get_LookupContactUsMenu built as compiled; the signed-out menu ("General Questions or Suggestions") has no captured state.
- ContactUsDetails is not built yet: a row click navigates to its original path with the original parameters (`/UBTConnect/ContactUsDetails?In_ContactSubjectId=…&In_ContactSubjectTitle=…&In_ListMenuOptionLabel=…`).
- The TST value "General Questions " (Type_ContactSubject.GeneralQuestions) keeps its trailing space as Id and Label, so the navigation parameter carries it [static-entities-tst.json].
- UBT_Icons2 values UBT, PersonAdd, ShoppingBasket, AccountCircle, PersonPlay, BookOpen, Tooltip are not in the shared static-entity table; kept in `components/staticEntities.ts` with the TST values (no CR needed; the shared table may take them later).

## Change requests
- none

## Parity
| State | Scenario | structure | class | attr | style | layout | Exemptions fired |
|---|---|---|---|---|---|---|---|
| default | real | 0 | 0 | 0 | 0 | 0 (pixel 0.00 %, calls 0) | CAPTURE-LINK-HREF-CURSOR-HOMEFEED ×1, ignoreSubtrees ×1 |
| loading | loading | 0 | 0 | 0 | 0 | 0 (pixel 0.00 %, calls 0) | CAPTURE-LINK-HREF-CURSOR-HOMEFEED ×1, ignoreSubtrees ×1 |
| offline | error | 0 | 0 | 0 | 0 | 0 (pixel 0.00 %, calls 0) | CAPTURE-LINK-HREF-CURSOR-HOMEFEED ×1, ignoreSubtrees ×1 |

Clean on two consecutive runs (2026-10-15). Signed-out branch checked by hand (no captured state): the menu lists
"General Questions or Suggestions" and a row click opens ContactUsDetails with the three parameters; unit test
`components/actions.test.ts` covers both branches.

## Server-side notes
- No server action of its own. The screen is Anonymous (knowledge/navigation.md:30; shell-facts.md:14): ContactUsDetails and the contact-by-email actions behind it must accept anonymous callers deliberately and validate the subject server-side.
