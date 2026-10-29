# App_Cache: reader notes (stage 1)

## TST presence check
- Pack elements absent on TST: none found. Block file UBTConnect.App_Cache.CacheControl_UserInfo_Wrapper.mvc.js exists (tst_source.py show).
- TST elements absent in the pack: not checked line by line (only file presence read).
- Referenced block CacheControl_UserInfo (UBTConnect_Utils): TST file named by references.md; React port is app/src/legacy/os/cache/UserInfoCacheControl/UserInfoCacheControl.tsx (comments cite the TST lines).

## Pack gaps
- GetUserInformation_Wrapper_Assign: pack gives the signature only (shared action); body not in the pack.
- data.md has no server action; client variable read locations in React not searched beyond tests.
- strings.md is empty.

## Mock files
- app/src/mocks/fixtures/UBTConnect_Utils/DataActionGetCacheInfo/02-7ff2e5bc.json (cache info for the referenced block).

## Screens
- None (block-only flow).
