# TST sync log

One line per event. Written by sync.py.

- 2026-11-07T07:11:34 imported 29 items from migration/sync/triage-2026-11-07.md
- 2026-11-07T07:11:34 begun by the user: "ok (item 8 of the decision session, 2026-11-07: start the wave)"
- 2026-11-07T07:12:53 MessageList started
- 2026-11-07T07:12:53 MessageList brief written (loop 0)
- 2026-11-07T07:12:53 MessageList stage dev
- 2026-11-07T07:12:53 LDM_EventDetail_V2 started
- 2026-11-07T07:12:53 LDM_EventDetail_V2 brief written (loop 0)
- 2026-11-07T07:12:53 LDM_EventDetail_V2 stage dev
- 2026-11-07T07:12:54 ContactByEmailMember started
- 2026-11-07T07:12:54 ContactByEmailMember brief written (loop 0)
- 2026-11-07T07:12:54 ContactByEmailMember stage dev
- 2026-11-07T07:12:54 OrbitAdminLanding started
- 2026-11-07T07:12:54 OrbitAdminLanding brief written (loop 0)
- 2026-11-07T07:12:54 OrbitAdminLanding stage dev
- 2026-11-07T07:12:54 Household_Relations started
- 2026-11-07T07:12:55 Household_Relations brief written (loop 0)
- 2026-11-07T07:12:55 Household_Relations stage dev
- 2026-11-07T07:12:55 MessageDetail started
- 2026-11-07T07:12:55 MessageDetail brief written (loop 0)
- 2026-11-07T07:12:55 MessageDetail stage dev
- 2026-11-07T07:12:55 Menu started
- 2026-11-07T07:12:55 Menu brief written (loop 0)
- 2026-11-07T07:12:55 Menu stage dev
- 2026-11-07T07:12:55 LDM_MyEvents_V2 started
- 2026-11-07T07:12:56 LDM_MyEvents_V2 brief written (loop 0)
- 2026-11-07T07:12:56 LDM_MyEvents_V2 stage dev
- 2026-11-07T07:15:25 MessageList stage test
- 2026-11-07T07:16:28 Menu stage test
- 2026-11-07T07:18:07 MessageDetail stage test
- 2026-11-07T07:18:07 ContactByEmailMember stage test
- 2026-11-07T07:19:04 Q1 (LDM_EventDetail_V2) asked: Exemptions: (1) photo background-image + pixel for the host and guest photos (signed CloudFront URLs in the capture, placeholder in the mock) as DATA-GUEST-PHOTO-LDM-MYEVENTS-V2 already does for LDM_MyEvents_V2; (2) host-name title width 82 vs 118 px (masked 21-char name) as masked-text data drift. a: add both (master edits exemptions) / b: leave the diffs (route cannot restamp) / c: other
- 2026-11-07T07:19:04 Q2 (MessageList) asked: consistency NO-INLINE-COLOR on MessageListItem.tsx:124,129 (urgent icon inline styles from the compiled TST block; no capture, old or new, has an urgent message). a: keep the code and record a consistency exclusion for these lines with the compiled-code citation / b: render the urgent branch as NotCaptured / c: remove the inline styles
