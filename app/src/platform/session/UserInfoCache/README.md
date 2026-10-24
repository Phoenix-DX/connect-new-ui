# CacheControl_UserInfo_Wrapper

OutSystems: `UBTConnect.App_Cache.CacheControl_UserInfo_Wrapper` · pack
`migration/blocks/UBTConnect.App_Cache.CacheControl_UserInfo_Wrapper.md`

Inputs: none. Placeholders: none.

Events: `Result(UserInformation)` → `onResult(directoryUserCurrent)`.

Child block: `CacheControl_UserInfo`. When the child block raises Result:

1. `getUserInformation_Wrapper_Assign` (`../lib/actions.ts`) sets App_Policies_HasPolicyToAccept = HasPoliciesToAccept.
2. The block raises Result with `Directory_UserCurrent`.

## Captured variants (1 distinct; 1 tested)

| Capture | Source                   |
| ------- | ------------------------ |
| v1      | ContactUsDetails/default |
