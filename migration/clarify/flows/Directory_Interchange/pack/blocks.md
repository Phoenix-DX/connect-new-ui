# Pack of UI flow Directory_Interchange (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

Own blocks of the flow: Directory_Interchange_StatisticsList
Blocks of other UBTConnect flows that the flow uses (transitive): 2

## Block Directory_Interchange_StatisticsList (flow Directory_Interchange)
- public: False
- input parameters: In_IsLoading: Boolean; In_ShowSubtitle: Boolean; In_HighlightWords: Text; In_InterchangeList: UI_Interchange List
- events: Event_NavigateToLocality(LocalityId: Long Integer (mandatory); CountryName: Text (mandatory)) mandatory
- local variables: -
- lifecycle: none
- used by (UBTConnect): Locality_Interchange

#### Widget tree
```
block CustomContainer (UBTConnectLibrary.BasePatterns)
  args: Options={ Background: { BackgroundColor: Entities.UBT_Color.Neutral0 }, PaddingSize: { VerticalSizeId: Entities.UBT_Size.Small, HorizontalSizeId: Entities.UBT_Size.Base } }
  placeholder Content:
    block SkeletonSection (UBTConnectLibrary.ConnectPatterns)
      args: In_IsLoading=In_IsLoading
      placeholder Placeholder_LoadingSection:
        list source=In_InterchangeList mode=Default  [style="list list-group list--gap-s"]
          block Statistics_ListItem (UBTConnectLibrary.ConnectCorePatterns)
            args: In_ExtendedClasses=If(In_InterchangeList.Current.IsBookmarked,"ubt-statistics-item__bookmarked",""), In_HasActionsMenu=True, In_HighlightWords=In_HighlightWords, In_ShowSubtitle=In_ShowSubtitle, In_StatisticsOptions=In_InterchangeList.Current.InterchangeStatistics
            on Event_Clicked → Handler_Clicked(InterchangeCountryName=In_InterchangeList.Current.InterchangeCountryName, InterchangeLocalityId=In_InterchangeList.Current.InterchangeLocalityId)
            placeholder ActionsMenu:
              block Directory_EntityDetailsActions (UBTConnect.Directory_CommonBlocks)
                args: ContactPopUp_OverrideOptions={ Name: In_InterchangeList.Current.InterchangeStatistics.Title }, EnableOptions={ EnableBookmark: True, EnableNotes: True }, EntityId=In_InterchangeList.Current.InterchangeLocalityId, EntityType=Entities.Connect_Entity.Interchange, IsEnabled=True
    if In_InterchangeList.Empty and not In_IsLoading
      block Directory_EmptyState (UBTConnect.Directory_CommonBlocks)
        args: EntityTypeId=Entities.Connect_Entity.Interchange, Location="in this locality"
```

#### Block actions
- **Handler_Clicked** inputs: InterchangeLocalityId: Long Integer (mandatory); InterchangeCountryName: Text (mandatory)
  ```
  if In_IsLoading
    end
  else
    trigger event Event_NavigateToLocality(CountryName=InterchangeCountryName, LocalityId=InterchangeLocalityId)
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Blocks of other flows (signature only; full text in the pack of their flow)

| Block | Flow | Pack | Inputs | Events |
|---|---|---|---|---|
| Directory_EmptyState | Directory_CommonBlocks | `../../_shared/pack/blocks.md` | EntityTypeId: Connect_Entity Identifier (mandatory); Location: Text = "found nearby" | - |
| Directory_EntityDetailsActions | Directory_CommonBlocks | `../../_shared/pack/blocks.md` | IsEnabled: Boolean = True; EntityType: Connect_Entity Identifier (mandatory); EntityId: Long Integer (mandatory); ContactPopUp_OverrideOptions: ContactPopUp_OverrideOptions; EnableOptions: ActionsMenuEnableOptions; useViewDetails: Boolean | Event_MenuEdit; OnChange_Bookmark; ViewDetails_OnClick |
