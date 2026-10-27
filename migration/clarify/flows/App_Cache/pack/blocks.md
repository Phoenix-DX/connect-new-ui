# Pack of UI flow App_Cache (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

Own blocks of the flow: CacheControl_UserInfo_Wrapper
Blocks of other UBTConnect flows that the flow uses (transitive): 0

## Block CacheControl_UserInfo_Wrapper (flow App_Cache)
- public: False
- input parameters: -
- events: Result(UserInformation: Directory_UserCurrent) mandatory
- local variables: -
- lifecycle: none
- used by (UBTConnect): ContactUsDetails, CountryList, FilterSheet, Map, Menu, MoreActionSheet, Profile, SortSheet

#### Widget tree
```
block CacheControl_UserInfo (UBTConnect_Utils.CacheControl)
  on Result → CacheControl_UserInfoResult(CacheControl_Response=CacheControl_Response)
```

#### Block actions
- **CacheControl_UserInfoResult** inputs: CacheControl_Response: CacheControl_UserInformation (mandatory)
  ```
  call GetUserInformation_Wrapper_Assign(UserInformation=CacheControl_Response)
  trigger event Result(UserInformation=CacheControl_Response.Directory_UserCurrent)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
