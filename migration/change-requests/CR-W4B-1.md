# CR-W4B-1: UBTConnect_Utils Connect_Entity → TST values

- **From:** wave 4, batch B (Directory_EmptyState). **Owner:** shared module `app/src/shared/UBTConnect_Utils/lib/staticEntities.ts`.
- **Change:** set `Connect_Entity` to the TST values of `UBTConnect_Utils.connect_Entity` (migration/knowledge/static-entities-tst.json):
  SupperMeetings_aka_Subdivisions `'Supper Meetings'`, OneSchoolGlobal `'OneSchool Global'`, FeedItem `'Feed Item'`
  (Member, Locality, Household, Interchange already equal); add Country `'Country'`.
- **Why:** Directory_EmptyState renders the UBTConnect Connect_Entity Id ("No Supper Meetings found nearby"), so
  `UBTConnect/lib/staticEntities.ts` holds TST values, and passes it to GetEntityType_Icon, which compares with the
  UBTConnect_Utils constants. With the current opaque values, Supper Meetings, OneSchool Global and Feed Item get the
  fallback icon (ImageGallery) instead of HouseFill / SchoolFill / FeedItem. In TST both entities have the same values.
- **Impact to check:** callers that compare or send these constants (GetImageType_FromEntity, Feed_Embeded SharePopup
  EntityTypeId, ShareableObject_Generic stories) and any test asserting the old literal strings.
- **Not done by batch B:** the file belongs to another batch's shared module entries ("add only your entries").

## Status

Applied (wave-4 foundation owner, 2026-10-15).

## Resolution

`app/src/shared/UBTConnect_Utils/lib/staticEntities.ts` `Connect_Entity` now holds the TST values of
`UBTConnect_Utils.connect_Entity` (migration/knowledge/static-entities-tst.json): Supper Meetings, OneSchool Global,
Feed Item, plus Country. Every caller uses the constant (no test or story asserted the old literal strings); `ci` passes.
