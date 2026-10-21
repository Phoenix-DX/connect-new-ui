# CR-MessageDetail-1: client variable Connect2_LegacyShared.UnreadWhatsNewsNumber

- Status: applied
- Raised by: MessageDetail, 2026-10-15
- Block: `app/src/shell/clientVars.ts` (Connect2_LegacyShared client variables)
- Other routes using it (survey sources): any reader of UnreadWhatsNewsNumber (DecrementReadWhatsNewsCounter callers)
- Related question: none

## Evidence
- `Connect2_LegacyShared.controller.js:1891-1930` (copy in migration/screens/BookmarksByGroup/analysis/sources/raw/):
  `UnreadWhatsNewsNumber = If(UnreadWhatsNewsNumber > 0, UnreadWhatsNewsNumber - 1, 0)`.
- Called by ScreenBlock_MessageDetail GetMessageInstanceByIdOnAfterFetch (:1030-1035) when an unread message of
  MessageInfoType WhatsNew is opened.
- Parity difference it explains: none in the captured states (the captured message was already read).

## Expected change
Add `'Connect2_LegacyShared.UnreadWhatsNewsNumber': 0` (Long Integer) to the shell client variables.

## Workaround in the route until applied
`screens/MessageDetail/components/actions.ts` decrementReadWhatsNewsCounter does nothing (comment with this CR id).

## Resolution (foundation owner)
Set `- Status: applied` above when done (route.py reset keeps applied requests and deletes open ones raised by a failed run).
- Change (orchestrator, 2026-10-15): `Connect2_LegacyShared.UnreadWhatsNewsNumber` (Long Integer, default 0) added to
  `app/src/shell/clientVars.ts` from the fetched `migration/runtime-sources/Connect2_LegacyShared.clientVariables.js:20-24`;
  `decrementReadWhatsNewsCounter` in the route now decrements it (controller.js:1891-1930).
- Regression parity run on: with the MessageDetail parity run below.
