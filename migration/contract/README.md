# Contract sources

Compiled `*.model.js` of producer modules, fetched read-only from TST (static GET) on 2026-10-14 so contract_gen.py can type their structures. Code only, no user data.

2026-11-05: the live model files of 2026-11-05 (static GET, read-only; `migration/runtime-sources/live/`) replaced the copies of 2026-10-14 in `sources/raw/`: Connect_Bookmarks_CS, Connect_Search_CS, Connect2_Notification_CS.
- 2026-11-05 (wave 2): the module files of `migration/runtime-sources/` are the live ones of 2026-11-05 (see
  `migration/knowledge/runtime-sources.md`). The bookmark service actions now come from `UBTConnect_Utils`
  (`extra-actions.json`); the `UBTConnect` and `Connect2_Assemble_MUI` bookmark operations are gone.
