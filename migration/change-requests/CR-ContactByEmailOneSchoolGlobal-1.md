# CR-ContactByEmailOneSchoolGlobal-1: one shared mock for SendContactMemberEmail; UBT_FontWeight.Bold

- **From:** route ContactByEmailOneSchoolGlobal (wave 5). **Owner:** foundation (`app/src/shared/`).
- **Change 1:** move the MSW handler of `UBTConnect.ServiceAPISendContactMemberEmail` (a write, never recorded) to one
  shared mocks file next to `app/src/shared/UBTConnect/ContactByEmailForm/` with one store collection of sent e-mails,
  and drop the copies in `app/src/screens/ContactByEmailOneSchoolGlobal/mocks.ts` (and ContactByEmailMember's, if it
  has one).
- **Why 1:** the contract has one operation for both screen services
  (`openapi.yaml` x-os-paths ContactByEmailMember / ContactByEmailOneSchoolGlobal), so both route mocks register
  `POST /api/UBTConnect/ServiceAPISendContactMemberEmail`; MSW answers with the first one. Both answer `{}`, so nothing
  breaks today, but the sent e-mails land in whichever collection wins.
- **Change 2:** add `Bold: 'bold'` (and the other TST values `light`, `medium`) to `UBT_FontWeight` in
  `app/src/shared/UBTConnectLibrary/lib/staticEntities.ts` (TST `UBTConnect.uBT_FontWeight` in
  migration/knowledge/static-entities-tst.json). The route keeps a local constant until then
  (`app/src/screens/ContactByEmailOneSchoolGlobal/components/staticEntities.ts`, captured `font-bold`).
- **Impact to check:** none on markup; parity unchanged.
- **Priority:** low (no visible difference).

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
