# DEV-ahead register: features that exist on DEV and not on TST

Material for a later comparison when TST deploys a DEV version (user, 2026-10-27: keep a record of every DEV-only
element that a decision removes or leaves out of React). Source: the §6.1 tables of the flow reports (DEV vs TST),
filtered on the words "DEV only", "DEV-only", "absent on TST", "not on TST", "no TST file". Read the report row for
the detail. React follows TST in each case unless the row says otherwise.

| Flow | Element | DEV | TST | What React follows |
|---|---|---|---|---|
| Legacy_MyNotificationsFlow | none |  |  |  |
| Directory_Household_Blocks | none | - | - | - |

Rows: 2. Board rows of the DEV-only screens: V8 (`migration/board.md`).