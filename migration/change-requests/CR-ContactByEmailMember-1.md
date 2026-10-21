# CR-ContactByEmailMember-1: one mock handler for SendContactMemberEmail (shared by two screens)

- **From:** route ContactByEmailMember (wave 5). **Owner:** foundation (`app/src/mocks/` or a shared `mocks.ts`).
- **Change:** register the MSW handler of `UBTConnect.ServiceAPISendContactMemberEmail` once, in a shared place (e.g.
  `app/src/shared/UBTConnect/ContactByEmailForm/mocks.ts` or `app/src/shell/mocks.ts`), with one P-MUTATION collection
  of the sent forms; remove the copies from `app/src/screens/ContactByEmailMember/mocks.ts` and
  `app/src/screens/ContactByEmailOneSchoolGlobal/mocks.ts`.
- **Why:** the contract merges the two screen services
  `screenservices/UBTConnect/ContactFlow/ContactByEmailMember/ServiceAPISendContactMemberEmail` and
  `…/ContactByEmailOneSchoolGlobal/ServiceAPISendContactMemberEmail` into one operation
  (`app/src/api/openapi.yaml` `/api/UBTConnect/ServiceAPISendContactMemberEmail`, `x-os-screens` both). Both routes are
  built in parallel and each registers a handler on the same URL; MSW answers with the first one in glob order
  (`app/src/mocks/handlers.ts`), so the second route's handler is dead code and the two could drift.
- **Impact to check:** both screens' Send (no visible read-back of the sent mails in any screen; output is `{}`).
- **Meanwhile:** ContactByEmailMember registers its own handler (collection `ContactByEmailMember.sentEmails`).

## Status

applied (foundation F7b, 2026-10-15)

## Resolution (foundation owner)
Foundation F7b, 2026-10-15. One handler for `UBTConnect.ServiceAPISendContactMemberEmail` in
`app/src/shared/UBTConnect/ContactByEmailForm/mocks.ts`, with one merged P-MUTATION collection
`UBTConnect.sentContactMemberEmails` (the server action receives the same In_UI_ContactByEmailForm from both screens and
cannot tell them apart; nothing reads the sent mails back). The route mocks of ContactByEmailMember and
ContactByEmailOneSchoolGlobal now register no handler. `UBT_FontWeight` of `app/src/shared/UBTConnect/lib/staticEntities.ts`
(module UBTConnect, as the compiled screens use `UBTConnectModel.staticEntities.uBT_FontWeight`: ContactByEmailMember
.mvc.js:507 semiBold, ContactByEmailOneSchoolGlobal .mvc.js:310 bold) has the five TST values (Bold, Light, Medium,
Regular, SemiBold; static-entities-tst.json `UBTConnect.uBT_FontWeight`); both routes import it, the OneSchool Global
local constant is removed. Parity of both routes: clean.
